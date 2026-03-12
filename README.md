# ⚽ Mercato Live - TP Foot Docker

Une application web moderne de suivi des transferts de football, architecturée avec **Docker** et **Docker Compose**.

## 🚀 Architecture du Projet

Ce projet est divisé en deux services principaux :

- **Backend** : Un serveur Node.js léger servant une API REST sur le port `3000`.
- **Frontend** : Une interface utilisateur moderne (Dark Mode) servie par Nginx sur le port `8081`.

## 🛠️ Prérequis

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.
- Terminal (PowerShell, Bash, ou CMD).

## 🏃 Démarrage Rapide

Pour lancer l'application complète, exécutez la commande suivante à la racine du projet :

```powershell
docker-compose up --build
```

Une fois les containers démarrés :
- 🌐 **Frontend** : Accédez à [http://localhost:8080](http://localhost:8080)
- ⚙️ **API Backend** : Accédez à [http://localhost:3000/api/mercato](http://localhost:3000/api/mercato)

## 📁 Structure des fichiers

```text
tp-foot-docker/
├── backend/
│   ├── Dockerfile
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── app.css
├── docker-compose.yml
└── README.md
```

## 🤖 Note sur le développement

Le contenu applicatif de ce projet (code backend et design frontend) a été **généré par Intelligence Artificielle (IA)**. 

Le design utilise un thème sombre moderne avec la police *Inter* et des animations CSS fluides pour offrir une expérience utilisateur premium, même pour un prototype.

---
*Projet réalisé dans le cadre d'un TP sur l'orchestration de containers Docker.*
