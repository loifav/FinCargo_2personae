## Déploiement dans Google Cloud Plateforme

1. Création d'un Dockerfile
2. Création d'une image Docker pour le déploiement

```bash
docker build -t react-cloud .
```

se connecter via ligne de commmande

```bash
gcloud auth login
```

3. Se connecter à GCP puis aller dans Arifact Registry
4. Sélectionner le bon projet GCP
5. Créer un Repository
6. Transférer une image locale vers un Depot docker

```bash
gcloud auth configure-docker europe-west6-docker.pkg.dev
```

```bash

LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY/IMAGE

```

```bash

europe-west6-docker.pkg.dev/fincargo-0001/frontend-react/frontend-react:v1

```

```
docker tag frontend-fincargo-cloud europe-west6-docker.pkg.dev/fincargo-0001/frontend-react/frontend-react:v2
```

```
docker push europe-west6-docker.pkg.dev/fincargo-0001/frontend-react/frontend-react:v2
```
