# ⚽ Mercato Live - TP Foot Docker

## 📝 Présentation du Projet
Ce projet est une application web de démonstration permettant de suivre les transferts de football en temps réel. L'objectif principal est de démontrer la mise en place d'une architecture micro-services conteneurisée à l'aide de **Docker** et **Docker Compose**.

## 🏗️ Architecture Technique
L'application repose sur une architecture découplée :

1.  **Backend (API)** : 
    - Serveur : Node.js (sans dépendances externes pour la légèreté).
    - Rôle : Fournit les données des joueurs au format JSON.
    - Port interne : `3000`.
2.  **Frontend (UI)** :
    - Serveur : Nginx (image Alpine) pour servir les fichiers statiques.
    - Technologies : HTML5, CSS3 (séparé), JavaScript Vanilla.
    - Communication : Le client (navigateur) effectue des appels `fetch` vers l'API.

## 🚀 Commandes pour lancer le projet

Pour démarrer l'ensemble de l'infrastructure :

```powershell
# Construction et lancement des containers
docker-compose up --build
```

**Accès :**
- **Interface Web** : [http://localhost:8080](http://localhost:8080)
- **API (JSON)** : [http://localhost:3000/api/mercato](http://localhost:3000/api/mercato)

## 💡 Notes & Explications
- **Docker-Compose** : Le fichier `docker-compose.yml` automatise la création des images et le mapping des ports. Il garantit que le backend démarre avant le frontend grâce à `depends_on`.

## 🤖 Note sur le développement
Le contenu applicatif (code backend et design frontend) a été **généré par Intelligence Artificielle (IA)** 
---
*Projet réalisé dans le cadre d'un TP sur l'orchestration de containers Docker.*
