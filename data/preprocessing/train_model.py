# train_model.py
import os
import pandas as pd
import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt

# 📁 Fichiers
csv_path = os.path.join(os.path.dirname(__file__), "..", "processed_dataset.csv")
images_dir = os.path.join(os.path.dirname(__file__), "..")

# 📊 Charger les données
df = pd.read_csv(csv_path)
df = df[df["image_path"].apply(lambda p: os.path.exists(os.path.join(images_dir, p.strip("./"))))]

if df.empty:
    raise ValueError("🚫 Dataset vide après filtrage. Vérifiez les chemins et les types dans le CSV.")

print(f"🧹 {len(df)} images valides trouvées.")

# 🎯 Split
train_df = df[df["type"] == "train"]
val_df = df[df["type"] == "test"]
print(f"🧪 Train samples: {len(train_df)}")
print(f"🧪 Validation samples: {len(val_df)}")

# 🔁 Dataset
def get_dataset(dataframe):
    paths = dataframe["image_path"].apply(lambda p: os.path.join(images_dir, p.strip("./"))).tolist()
    labels = dataframe["emotion"].tolist()
    dataset = tf.data.Dataset.from_tensor_slices((paths, labels))

    def load_image(path):
        image = tf.io.read_file(path)
        image = tf.image.decode_jpeg(image, channels=3)
        image = tf.image.resize(image, (64, 64))
        return image / 255.0

    def preprocess(path, label):
        return load_image(path), tf.one_hot(label, depth=7)

    return dataset.map(preprocess).batch(32).shuffle(100)

train_ds = get_dataset(train_df)
val_ds = get_dataset(val_df)

# 🧠 Model
model = models.Sequential([
    layers.Input(shape=(64, 64, 3)),
    layers.Conv2D(32, 3, activation='relu'),
    layers.MaxPooling2D(),
    layers.Conv2D(64, 3, activation='relu'),
    layers.MaxPooling2D(),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(7, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# 🏋️‍♂️ Training
history = model.fit(train_ds, validation_data=val_ds, epochs=10)

# 💾 Save model
model.save("emotion_model.keras")

# 📊 Plot
plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Train acc')
plt.plot(history.history['val_accuracy'], label='Val acc')
plt.title("Accuracy")
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Train loss')
plt.plot(history.history['val_loss'], label='Val loss')
plt.title("Loss")
plt.legend()

plt.savefig("training_metrics.png")
plt.show()
