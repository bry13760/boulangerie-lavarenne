# Guide photos & vidéos — Boulangerie Lavarenne

Le site est prêt et fonctionnel avec des emplacements réservés. Pour qu'il s'affiche avec vos vrais visuels, déposez vos fichiers dans le dossier `assets/` avec **exactement ces noms** (le site les appelle automatiquement).

## Page d'accueil (index.html)

| Fichier attendu | Ce qu'il faut prendre |
|---|---|
| `assets/hero-boulanger.jpg` | Photo large : vos mains façonnant un pain, four ou pétrin en fond (celle qui donne le ton du site) |
| `assets/cat-pains.jpg` | Un beau pain de campagne ou une baguette, en gros plan |
| `assets/cat-viennoiseries.jpg` | Croissants ou pains au chocolat, sortie de four |
| `assets/cat-patisseries.jpg` | Une pâtisserie signature (fraisier, tarte...) |
| `assets/cat-sandwichs.jpg` | Un sandwich maison bien garni |
| `assets/cat-pizzas.jpg` | Une pizza maison, entière |
| `assets/cat-petitdej.jpg` | Une formule petit-déjeuner ou un café |
| `assets/atelier-video-cover.jpg` | Image de couverture pour la vidéo de l'atelier (vous au travail) |
| `assets/gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` | 3 photos d'ambiance atelier (croissants, dressage, pétrissage) |
| `assets/univers-1.jpg` à `univers-7.jpg` | 7 photos variées : pains, sandwichs, pâtisseries, intérieur boutique, pizza, dessert |
| `assets/facade.jpg` | Photo de la façade / vitrine de la boutique |

## Page produits (produits.html)

Pour chaque catégorie, une image de couverture vidéo + une photo par produit de la gamme :

- **Pains** : `video-pains.jpg` puis `prod-noix.jpg`, `prod-fruite.jpg`, `prod-noir.jpg`, `prod-cereales2.jpg`, `prod-oson.jpg`, `prod-epeautre.jpg`, `prod-mais.jpg`, `prod-tourteseigle.jpg`
- **Viennoiseries** : `video-viennoiseries.jpg` puis `prod-croissant.jpg`, `prod-painchoco.jpg`, `prod-chausson.jpg`, `prod-brioche.jpg`, `prod-raisin.jpg`
- **Pâtisseries** : `video-patisseries.jpg` puis `prod-tarte.jpg`, `prod-eclair.jpg`, `prod-parisbrest.jpg`, `prod-millefeuille.jpg`, `prod-fraisier.jpg`
- **Sandwichs** : `video-sandwichs.jpg` puis `prod-jambonbeurre.jpg`, `prod-poulet.jpg`, `prod-thon.jpg`, `prod-vege.jpg`, `prod-club.jpg`
- **Pizzas** : `video-pizzas.jpg` puis `prod-margherita.jpg`, `prod-reine.jpg`, `prod-chevremiel.jpg`, `prod-4fromages.jpg`, `prod-pizzavege.jpg`
- **Petit-déjeuner** : `video-petitdej.jpg` puis `prod-formule.jpg`, `prod-cafe.jpg`, `prod-chocolat.jpg`, `prod-jusfrais.jpg`

## Conseils de prise de vue (avec votre téléphone, c'est suffisant)

- **Lumière naturelle** : près de la vitrine le matin, jamais de flash direct sur le pain (aplatit la croûte).
- **Gros plan + un peu d'action** : une main qui incise le pain, de la farine qui vole, la vapeur qui sort du four.
- **Fond simple** : plan de travail en bois ou toile de four, évitez le fond encombré.
- **Même angle par produit** : facilite la cohérence visuelle sur la page produits.
- **Vidéos courtes (8–15s)** : un seul geste par vidéo (façonnage, enfournement, dressage, garnissage) suffit largement, pas besoin de montage.

## Intégrer une vraie vidéo (au lieu de l'image de couverture)

Dans les fichiers HTML, remplacez ce bloc :
```html
<div class="video-block">
  <img src="assets/atelier-video-cover.jpg" ...>
  <button class="play-btn">▶</button>
</div>
```
par :
```html
<div class="video-block">
  <video controls poster="assets/atelier-video-cover.jpg">
    <source src="assets/atelier-video.mp4" type="video/mp4">
  </video>
</div>
```

Une fois vos photos et vidéos prêtes, envoyez-les-moi ici et je les intègre directement dans les fichiers.
