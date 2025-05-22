#!/bin/bash

echo "🚀 Nettoyage des fichiers trackés indésirables..."

# Définir les extensions à ignorer
EXTENSIONS=("*.h5" "*.keras" "*.jpg" "*.jpeg" "*.png" "*.mp4" "*.avi" "*.mov")

for ext in "${EXTENSIONS[@]}"; do
  files=$(git ls-files $ext)
  for file in $files; do
    echo "🧹 Suppression du suivi de : $file"
    git rm --cached "$file"
  done
done

echo "✅ Terminé. N'oublie pas de valider avec : git commit -m '♻️ Nettoyage des fichiers trackés'"

