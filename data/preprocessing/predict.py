# 📦 استيراد المكتبات
import tensorflow as tf
import numpy as np
from PIL import Image
import sys

# 🧠 تحميل النموذج المدرب
model = tf.keras.models.load_model("emotion_model.keras")

# 🏷️ أسماء الفئات (المشاعر)
class_names = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'sad', 'surprise']

# 📥 قراءة الصورة والتنبؤ
def predict_image(image_path):
    print(f"📂 Image chargée : {image_path}")
    image = Image.open(image_path).resize((64, 64))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)  # (1, 64, 64, 3)

    prediction = model.predict(image)
    class_index = np.argmax(prediction)
    class_label = class_names[class_index]

    print(f"🎯 Prédiction : {class_label} (index {class_index})")
    print(f"📊 Probabilités : {np.round(prediction[0], 3)}")

# ▶️ طريقة الاستعمال
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("⚠️ Usage :python3 data/preprocessing/predict.py data/images_cleaned/drink_angry_1_a.jpg")
    else:
        predict_image(sys.argv[1])
