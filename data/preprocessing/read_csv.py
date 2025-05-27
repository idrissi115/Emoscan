import pandas as pd
import os

# Lecture du fichier CSV
csv_path = "../raw_dataset.csv"

if not os.path.exists(csv_path):
    print("❌ Le fichier CSV n'existe pas à ce chemin :", csv_path)
else:
    df = pd.read_csv(csv_path)
    print("✅ Aperçu du dataset :")
    print(df.head())  # Affiche les 5 premières lignes
    print("\n📊 Colonnes disponibles :", df.columns.tolist())
