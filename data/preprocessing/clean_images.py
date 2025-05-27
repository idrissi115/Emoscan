import os
from PIL import Image

input_folder = "../images_raw"
output_folder = "../images_cleaned"
target_size = (224, 224)

os.makedirs(output_folder, exist_ok=True)

def process_image(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGB")
        img = img.resize(target_size)
        img.save(output_path)
        print(f"✔️ {output_path}")
    except Exception as e:
        print(f"❌ Failed: {image_path} — {e}")

for filename in os.listdir(input_folder):
    if filename.endswith(('.png', '.jpg', '.jpeg')):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, filename)
        process_image(input_path, output_path)
