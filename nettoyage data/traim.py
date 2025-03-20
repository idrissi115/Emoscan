import pandas as pd
import numpy as np

# Spécifier les chemins des fichiers
chemin_fichier_entree = 'C:/Users/zineeb/Downloads/archive (1)/HACER_dataset.csv'  # Remplacez par votre chemin réel
chemin_fichier_sortie = 'C:/Users/zineeb/Downloads/archive (1)/HACER_dataset_cleaned.csv'  # Remplacez par votre chemin réel


# Charger les données
df = pd.read_csv(chemin_fichier_entree)

# Afficher les informations de base sur le dataset
print("Forme initiale du dataset:", df.shape)
print("\nAperçu du dataset original:")
print(df.head())

# Vérifier les valeurs manquantes
print("\nVérification des valeurs manquantes:")
print(df.isnull().sum())

# Créer des mappages pour les codes numériques
activity_mapping = {
    0: "drink",
    1: "putonglasses",
    2: "putonjacket",
    3: "read",
    4: "sitdown",
    5: "standup",
    6: "takeoffglasses",
    7: "takeoffjacket",
    8: "write"
}

emotion_mapping = {
    0: "angry",
    1: "disgust",
    2: "happy",
    3: "neutral",
    4: "sad"
}

# Ajouter des colonnes avec les noms descriptifs
df['activity_name'] = df['activity'].map(activity_mapping)
df['emotion_name'] = df['emotion'].map(emotion_mapping)

# Vérifier les doublons
nb_duplicates = df.duplicated().sum()
print(f"\nNombre de lignes dupliquées: {nb_duplicates}")

if nb_duplicates > 0:
    # Supprimer les doublons
    df = df.drop_duplicates()
    print(f"Après suppression des doublons: {df.shape}")

# Vérifier les incohérences entre le nom de fichier et les données
df['expected_filename'] = df.apply(
    lambda row: f"{row['activity_name']}_{row['emotion_name']}_{row['video_index']}_{row['person']}", axis=1
)

# Vérifier si les noms de fichier correspondent aux valeurs des colonnes
inconsistent = df[df['file_name'] != df['expected_filename']]
print(f"\nNombre de lignes avec des incohérences: {len(inconsistent)}")

if len(inconsistent) > 0:
    print("Exemples d'incohérences:")
    print(inconsistent[['file_name', 'expected_filename']].head())
    
    # Décider si on corrige les incohérences en fonction du nom de fichier
    # Cette ligne est commentée car elle nécessite une décision
    # df['file_name'] = df['expected_filename']

# Statistiques sur le dataset
print("\nStatistiques par activité:")
print(df.groupby('activity_name').size())

print("\nStatistiques par émotion:")
print(df.groupby('emotion_name').size())

print("\nStatistiques par personne:")
print(df.groupby('person').size())

print("\nStatistiques par type (train/test):")
print(df.groupby('type').size())

# Enregistrer le dataset nettoyé
df.to_csv(chemin_fichier_sortie, index=False)

print(f"\nLe dataset nettoyé a été enregistré sous '{chemin_fichier_sortie}'")