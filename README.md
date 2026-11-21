# 🎳 StrikeNight — site du tournoi de bowling

Site statique une page (HTML/CSS/JS pur, aucune dépendance, aucun build).
Thème néon rétro, countdown en direct jusqu'au tournoi, animations au scroll.

## Structure

```
index.html       -> tout le contenu (sections : accueil, date, équipes, participants, catégories)
css/style.css    -> design
js/script.js     -> countdown + animations au scroll
Dockerfile       -> image nginx servant le site statique
docker-compose.yml
nginx.conf
```

## Personnaliser le contenu

Tout se modifie directement dans `index.html`, il n'y a pas de CMS :

- **Nom de l'événement** : remplace `[ NOM DE L'ÉVÉNEMENT ]` (2 occurrences : hero + footer).
- **Date / heure / lieu** : section `#date`, et dans `js/script.js` la constante
  `EVENT_DATE` (ligne ~8) pilote le compte à rebours — à mettre à jour si la date change.
- **Équipes** : section `#equipes`, un bloc `.team-card` par équipe (nom, phrase, membres).
- **Participants** : section `#participants`, liste de `.tag`.
- **Catégories** : section `#categories`, un bloc `.cat-card` par catégorie.

Chaque bloc est copiable/collable pour ajouter une équipe, un participant ou une catégorie.

## Lancer en local sans Docker

Ouvre simplement `index.html` dans un navigateur, ou :

```bash
python3 -m http.server 8080
```

## Lancer avec Docker

```bash
docker compose up -d --build
```

Le site sera disponible sur `http://localhost:8080` (port modifiable dans `docker-compose.yml`).

Pour un build/run manuel sans compose :

```bash
docker build -t strikenight .
docker run -d -p 8080:80 --name strikenight strikenight
```

## Mettre à jour le site une fois déployé

Modifie les fichiers, puis :

```bash
docker compose up -d --build
```
