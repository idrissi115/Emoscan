import os
import pandas as pd

# Chemins
csv_path = "../raw_dataset.csv"
images_folder = "../images_cleaned"

# Chargement des données
df = pd.read_csv(csv_path)

# Création d'un chemin complet pour chaque image
df["image_path"] = df["file_name"].apply(lambda name: os.path.join(images_folder, name + ".jpg"))

# Filtrer uniquement les lignes dont l’image existe physiquement
df = df[df["image_path"].apply(os.path.exists)]

print(f"✅ {len(df)} images liées à leur ligne du dataset.")
print(df[["file_name", "emotion", "image_path"]].head())

# Sauvegarder ce DataFrame préparé (optionnel)
df.to_csv("../processed_dataset.csv", index=False)
