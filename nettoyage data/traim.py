import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import os
print("Le script a bien démarré")

def charger_et_nettoyer_dataset_hacer(fichier_csv="C:/Users/zineeb/Downloads/data pfa/HACER_dataset.csv", data_str=None):
    """
    Fonction pour charger et nettoyer le dataset HACER
    
    Paramètres:
    fichier_csv (str): Chemin vers le fichier CSV
    data_str (str): Contenu du fichier CSV sous forme de chaîne de caractères
    
    Retourne:
    pd.DataFrame: DataFrame nettoyé
    """
    # Chargement des données
    if data_str is not None:
        import io
        df = pd.read_csv(io.StringIO(data_str))
    elif fichier_csv:
        df = pd.read_csv(fichier_csv)
    else:
        raise ValueError("Veuillez fournir soit un chemin de fichier CSV, soit le contenu du CSV")
    
    print("1. Données chargées avec succès")
    print(f"   Dimensions originales: {df.shape}")
    
    # 1. Vérification et suppression des doublons
    nb_doublons = df.duplicated().sum()
    if nb_doublons > 0:
        print(f"2. Suppression de {nb_doublons} doublons")
        df = df.drop_duplicates()
    else:
        print("2. Aucun doublon détecté")
    
    # 2. Gestion des valeurs manquantes
    valeurs_manquantes = df.isnull().sum().sum()
    if valeurs_manquantes > 0:
        print(f"3. Traitement de {valeurs_manquantes} valeurs manquantes")
        print(df.isnull().sum())
        # On peut choisir de supprimer ou remplir selon le contexte
        df = df.dropna()
    else:
        print("3. Aucune valeur manquante détectée")
    
    # 3. Normalisation des identifiants de personnes (correction casse)
    if 'J' in df['person'].values:
        df['person'] = df['person'].str.lower()
        print("4. Normalisation des identifiants de personnes (J -> j)")
    else:
        print("4. Identifiants de personnes déjà normalisés")
    
    # 4. Parsing des informations à partir des noms de fichiers
    print("5. Extraction d'informations à partir des noms de fichiers")
    
    # Extraire la partie activité du nom de fichier (avant le premier underscore)
    df['action'] = df['file_name'].apply(lambda x: x.split('_')[0])
    
    # Extraire l'émotion depuis le nom de fichier (entre le premier et le deuxième underscore)
    df['file_emotion'] = df['file_name'].apply(lambda x: x.split('_')[1])
    
    # Extraire l'index vidéo (entre le deuxième et le troisième underscore)
    df['file_index'] = df['file_name'].apply(lambda x: x.split('_')[2])
    
    # Extraire l'identifiant de la personne (après le dernier underscore)
    df['file_person'] = df['file_name'].apply(lambda x: x.split('_')[-1])
    
    # 5. Création de colonnes descriptives pour les codes numériques
    print("6. Mappage des codes numériques vers des étiquettes lisibles")
    
    # Mappage pour les activités
    activity_mapping = {
        0: 'drink',
        1: 'put_on_glasses',
        2: 'put_on_jacket',
        3: 'read',
        4: 'sit_down',
        5: 'stand_up',
        6: 'take_off_glasses',
        7: 'take_off_jacket',
        8: 'write'
    }
    
    # Mappage pour les émotions
    emotion_mapping = {
        0: 'angry',
        1: 'disgust',
        2: 'happy',
        3: 'neutral',
        4: 'sad'
    }
    
    # Ajout des colonnes avec les étiquettes
    df['activity_name'] = df['activity'].map(activity_mapping)
    df['emotion_name'] = df['emotion'].map(emotion_mapping)
    
    # 6. Vérification de la cohérence entre les noms de fichiers et les codes
    print("7. Vérification de la cohérence des données")
    
    # Vérifier la cohérence activité
    activity_coherence = {}
    for act_num, act_name in activity_mapping.items():
        mask = df['activity'] == act_num
        if mask.any():
            actions_in_filenames = df.loc[mask, 'action'].unique()
            activity_coherence[act_name] = actions_in_filenames
    
    # Vérifier la cohérence émotion
    emotion_coherence = {}
    for emo_num, emo_name in emotion_mapping.items():
        mask = df['emotion'] == emo_num
        if mask.any():
            emotions_in_filenames = df.loc[mask, 'file_emotion'].unique()
            emotion_coherence[emo_name] = emotions_in_filenames
    
    # Vérifier la cohérence des index vidéo
    index_coherence = (df['video_index'].astype(str) == df['file_index']).mean() * 100
    print(f"   - Cohérence des index vidéo: {index_coherence:.2f}%")
    
    # Vérifier la cohérence des identifiants de personnes
    person_coherence = (df['person'] == df['file_person']).mean() * 100
    print(f"   - Cohérence des identifiants de personnes: {person_coherence:.2f}%")
    
    # 7. Nettoyage des colonnes redondantes ou temporaires si nécessaire
    print("8. Finalisation du DataFrame")
    
    # Réorganisation des colonnes pour plus de clarté
    colonnes_finales = [
        'file_name', 'activity', 'activity_name', 'emotion', 'emotion_name',
        'video_index', 'person', 'type'
    ]
    
    df_final = df[colonnes_finales]
    
    print(f"   Dimensions finales: {df_final.shape}")
    return df_final, activity_coherence, emotion_coherence

def analyser_dataset_hacer(df):
    """
    Analyse approfondie du dataset HACER nettoyé
    
    Paramètres:
    df (pd.DataFrame): DataFrame HACER nettoyé
    
    Retourne:
    dict: Résultats d'analyse
    """
    print("\n=== ANALYSE DU DATASET HACER ===")
    resultats = {}
    
    # 1. Statistiques générales
    print("1. Statistiques générales")
    print(f"   - Nombre total d'enregistrements: {len(df)}")
    print(f"   - Nombre d'activités: {df['activity'].nunique()} ({', '.join(df['activity_name'].unique())})")
    print(f"   - Nombre d'émotions: {df['emotion'].nunique()} ({', '.join(df['emotion_name'].unique())})")
    print(f"   - Nombre de personnes: {df['person'].nunique()} ({', '.join(sorted(df['person'].unique()))})")
    
    # 2. Distribution des données
    print("\n2. Distribution des données")
    
    # Distribution des activités
    activity_counts = df['activity_name'].value_counts()
    print("   - Distribution des activités:")
    for act, count in activity_counts.items():
        print(f"     * {act}: {count} ({count/len(df)*100:.1f}%)")
    resultats['activity_distribution'] = activity_counts
    
    # Distribution des émotions
    emotion_counts = df['emotion_name'].value_counts()
    print("\n   - Distribution des émotions:")
    for emo, count in emotion_counts.items():
        print(f"     * {emo}: {count} ({count/len(df)*100:.1f}%)")
    resultats['emotion_distribution'] = emotion_counts
    
    # Distribution des personnes
    person_counts = df['person'].value_counts()
    print("\n   - Distribution par personne (top 5):")
    for person, count in person_counts.head().items():
        print(f"     * {person}: {count} ({count/len(df)*100:.1f}%)")
    resultats['person_distribution'] = person_counts
    
    # 3. Analyse de la répartition train/test
    print("\n3. Analyse de la répartition train/test")
    train_test_ratio = df['type'].value_counts()
    print(f"   - Train: {train_test_ratio['train']} ({train_test_ratio['train']/len(df)*100:.1f}%)")
    print(f"   - Test: {train_test_ratio['test']} ({train_test_ratio['test']/len(df)*100:.1f}%)")
    resultats['train_test_ratio'] = train_test_ratio
    
    # 4. Analyse croisée activité/émotion
    print("\n4. Distribution croisée activité/émotion")
    activity_emotion_cross = pd.crosstab(df['activity_name'], df['emotion_name'])
    print(activity_emotion_cross)
    resultats['activity_emotion_cross'] = activity_emotion_cross
    
    # 5. Analyse des déséquilibres dans les données
    print("\n5. Analyse des déséquilibres")
    
    # Déséquilibre entre activités
    activite_max = activity_counts.max()
    activite_min = activity_counts.min()
    ratio_activites = activite_max / activite_min
    print(f"   - Ratio max/min pour les activités: {ratio_activites:.2f}")
    print(f"     (Max: {activity_counts.idxmax()} avec {activite_max}, Min: {activity_counts.idxmin()} avec {activite_min})")
    
    # Déséquilibre entre émotions
    emotion_max = emotion_counts.max()
    emotion_min = emotion_counts.min()
    ratio_emotions = emotion_max / emotion_min
    print(f"   - Ratio max/min pour les émotions: {ratio_emotions:.2f}")
    print(f"     (Max: {emotion_counts.idxmax()} avec {emotion_max}, Min: {emotion_counts.idxmin()} avec {emotion_min})")
    
    # 6. Analyse personne par type
    print("\n6. Répartition train/test par personne")
    person_type_cross = pd.crosstab(df['person'], df['type'])
    print(person_type_cross)
    
    # Calcul du ratio train/test par personne
    if 'train' in person_type_cross.columns and 'test' in person_type_cross.columns:
        person_type_cross['ratio'] = person_type_cross['train'] / person_type_cross['test'].replace(0, 1)
        print("\n   - Ratio train/test par personne:")
        print(person_type_cross['ratio'].sort_values(ascending=False))
    
    resultats['person_type_cross'] = person_type_cross
    
    return resultats

def visualiser_dataset_hacer(df, output_dir=None):
    """
    Génère des visualisations pour le dataset HACER
    
    Paramètres:
    df (pd.DataFrame): DataFrame HACER nettoyé
    output_dir (str): Dossier où sauvegarder les visualisations
    """
    print("\n=== VISUALISATION DU DATASET HACER ===")
    
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Dossier créé: {output_dir}")
    
    # Configuration du style de visualisation
    plt.style.use('ggplot')
    
    # 1. Distribution des activités
    plt.figure(figsize=(12, 6))
    ax = sns.countplot(y='activity_name', data=df, 
                       order=df['activity_name'].value_counts().index,
                       palette='viridis')
    
    # Ajout des valeurs sur les barres
    for i, p in enumerate(ax.patches):
        ax.annotate(f"{p.get_width()}", (p.get_width() + 1, p.get_y() + p.get_height()/2), 
                    ha='left', va='center')
    
    plt.title('Distribution des activités', fontsize=14)
    plt.xlabel('Nombre d\'enregistrements', fontsize=12)
    plt.ylabel('Activité', fontsize=12)
    plt.tight_layout()
    
    if output_dir:
        plt.savefig(f"{output_dir}/distribution_activites.png", dpi=300, bbox_inches='tight')
        print(f"Figure sauvegardée: {output_dir}/distribution_activites.png")
    plt.show()
    
    # 2. Distribution des émotions
    plt.figure(figsize=(10, 6))
    ax = sns.countplot(x='emotion_name', data=df, 
                       order=df['emotion_name'].value_counts().index,
                       palette='mako')
    
    # Ajout des valeurs sur les barres
    for i, p in enumerate(ax.patches):
        ax.annotate(f"{p.get_height()}", (p.get_x() + p.get_width()/2, p.get_height() + 5), 
                    ha='center')
    
    plt.title('Distribution des émotions', fontsize=14)
    plt.xlabel('Émotion', fontsize=12)
    plt.ylabel('Nombre d\'enregistrements', fontsize=12)
    plt.xticks(rotation=0)
    plt.tight_layout()
    
    if output_dir:
        plt.savefig(f"{output_dir}/distribution_emotions.png", dpi=300, bbox_inches='tight')
        print(f"Figure sauvegardée: {output_dir}/distribution_emotions.png")
    plt.show()
    
    # 3. Matrice de chaleur activité/émotion
    plt.figure(figsize=(14, 10))
    activity_emotion_cross = pd.crosstab(df['activity_name'], df['emotion_name'])
    
    # Heatmap avec annotations
    sns.heatmap(activity_emotion_cross, annot=True, fmt='d', cmap='YlGnBu', linewidths=.5)
    plt.title('Distribution des combinaisons activité/émotion', fontsize=16)
    plt.ylabel('Activité', fontsize=14)
    plt.xlabel('Émotion', fontsize=14)
    plt.tight_layout()
    
    if output_dir:
        plt.savefig(f"{output_dir}/heatmap_activite_emotion.png", dpi=300, bbox_inches='tight')
        print(f"Figure sauvegardée: {output_dir}/heatmap_activite_emotion.png")
    plt.show()
    plt.close()

    print("\n=== FIN DES VISUALISATIONS ===")
print("Le script est terminé")

    


    
