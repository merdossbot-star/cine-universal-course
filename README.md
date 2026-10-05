# CINE Universal — Course & Laboratory Site 1.0.0

Site statique prêt pour GitHub Pages et Vercel.

## Contenu

- `index.html` — présentation
- `course.html` — cours complet synthétique
- `examples.html` — catalogue + comparaisons iframe
- `reference.html` — docs/specs du dépôt CINE
- `deploy.html` — déploiement GitHub Pages / Vercel
- `examples/hello-world/` — Hello World CINE non vide
- `examples/compare/` — React réel + alternative CINE
- `assets/framework-registry.json` — registre CINE actuel
- `reference/courses/` — cours source du dépôt CINE
- `reference/specs/` — spécifications source du dépôt CINE
- `.github/workflows/pages.yml` — déploiement GitHub Pages
- `vercel.json` — configuration Vercel

## Local

```bash
python3 -m http.server 4173
# http://127.0.0.1:4173/
```

## GitHub Pages

1. créer le dépôt GitHub ;
2. copier ce projet à la racine ;
3. push sur `main` ;
4. Settings → Pages → GitHub Actions ;
5. attendre le workflow `Deploy CINE Course to GitHub Pages`.

## Vercel

Importer le dépôt depuis Vercel (`New Project`). Pour un site à la racine, aucune étape de build n’est nécessaire ; pour un mono-repo, définir `Root Directory` sur le dossier du site.

## Notes

Le site ne prétend pas certifier une API « HTMLX 4.0.0 » exacte sans source versionnée dans le dépôt de référence. Une zone d’intégration est prévue dans `reference.html`.
