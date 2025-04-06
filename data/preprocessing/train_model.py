import os
import pandas as pd
import tensorflow as tf
from tensorflow.keras import layers, models
from sklearn.model_selection import train_test_split

# 📌 مسار ملف CSV
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(BASE_DIR, '..', 'processed_dataset.csv')

# 📥 قراءة CSV
df = pd.read_csv(csv_path)

# 🧹 حذف الصور الغير موجودة
df['full_path'] = df['image_path'].apply(lambda x: os.path.abspath(os.path.join(BASE_DIR, x)))
df = df[df['full_path'].apply(os.path.exists)]

print(f"🧹 {len(df)} images valides trouvées.")

# ✂️ تقسيم Train / Val
train_df = df[df['type'] == 'train']
val_df = df[df['type'] == 'test']

print(f"🧪 Train samples: {len(train_df)}")
print(f"🧪 Validation samples: {len(val_df)}")

# 🚫 التحقق من وجود بيانات
if len(train_df) == 0 or len(val_df) == 0:
    raise ValueError("🚫 Dataset vide après filtrage. Vérifiez les chemins et les types dans le CSV.")

# 📦 Dataset loader
def load_image(image_path):
    image = tf.io.read_file(image_path)
    image = tf.image.decode_jpeg(image, channels=3)
    image = tf.image.resize(image, [224, 224])
    image = tf.cast(image, tf.float32) / 255.0
    return image

def get_dataset(dataframe):
    paths = dataframe['full_path'].values
    labels = dataframe['emotion'].values
    dataset = tf.data.Dataset.from_tensor_slices((paths, labels))
    dataset = dataset.map(lambda x, y: (load_image(x), y))
    return dataset.batch(32).shuffle(100)

# 📂 تحميل البيانات
train_ds = get_dataset(train_df)
val_ds = get_dataset(val_df)

# 🧠 نموذج بسيط
model = models.Sequential([
    layers.Input(shape=(224, 224, 3)),
    layers.Conv2D(32, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(64, activation='relu'),
    layers.Dense(df['emotion'].nunique(), activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# 🏋️ التدريب
model.fit(train_ds, validation_data=val_ds, epochs=10)
