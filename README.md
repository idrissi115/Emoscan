# EmoScan

**Développement d'une application web intelligente de détection d'émotions et d'absence**

## Membres de l'équipe

- **LEBBAR Yasmine** | GROUPE A - 5  
- **IDRISSI Hamza** | GROUPE A - 5  
- **EL OUAGHLIDI Zineb** | GROUPE A - 5
- **EL-HAYOUNI Meriem** | GROUPE A - 5

## Objectif du projet
Créer une application intelligente capable de :
- Détecter et analyser les émotions à partir de l'image vidéo.
- Effectuer une reconnaissance faciale pour l'identification et la gestion des présences.
- Collecter et stocker les données d'analyse pour des rapports et une analyse approfondie.

## Technologies utilisées

### Back-end
- **Python** : Langage principal pour la logique métier.
- **Flask** : Framework léger pour la gestion des API et de la logique serveur.
- **SQL** : Base de données relationnelle pour stocker les informations.

### Front-end
- **HTML / CSS / JavaScript** : Pour la création de l'interface utilisateur web.

### Intelligence artificielle
- **OpenCV** : Bibliothèque pour la détection des visages et l'analyse vidéo.
- **CNN (Convolutional Neural Network)** : Modèle de deep learning pour la reconnaissance d'émotions.
- **FaceNet** : Algorithme avancé pour la reconnaissance faciale.

## Fonctionnalités principales

### 1. Détection d'émotions
L'application peut détecter et reconnaître plusieurs types d'émotions :
- 😢 Tristesse
- 😟 Angoisse
- 😊 Joie
- 😴 Fatigue
- 😐 Ennui
- 😳 Timidité
- 😡 Colère

### 2. Reconnaissance biométrique
- Identification des individus par reconnaissance faciale.
- Analyse vidéo en temps réel pour détecter des personnes inconnues.
- Collecte des données pour suivi et analyse.

### 3. Gestion des absences
Inspiré par le logiciel **Calamari**, notre application offre une gestion améliorée grâce à l'ajout de la reconnaissance émotionnelle.

## Installation et mise en place

1. **Cloner le projet :**
```bash
git clone https://github.com/votre-repo/emoscan.git
cd emoscan
```

2. **Créer un environnement virtuel (optionnel mais recommandé) :**
```bash
python -m venv venv
source venv/bin/activate  # Sur Windows : venv\Scripts\activate
```

3. **Installer les dépendances :**
```bash
pip install -r requirements.txt
```

4. **Lancer le serveur Flask :**
```bash
python app.py
```

5. **Accéder à l'application :**
Ouvrez un navigateur et accédez à :
```
http://localhost:5000
```

## Structure du projet
```
├── emoscan/
│   ├── app.py              # Point d'entrée principal
│   ├── static/             # Ressources statiques (CSS, JS)
│   ├── templates/          # Pages HTML
│   ├── models/             # Modèles de la base de données
│   └── requirements.txt    # Dépendances Python
└── REA
