# Cours 19 — Minimiser le runtime CINE

## Objectif

Comprendre comment CINE peut livrer uniquement le code réellement atteint par une page et ses relations.

## 1. Le problème du framework monolithique

Installer un framework complet pour une page qui n'utilise que texte, événements et quelques styles entraîne du code inutilisé.

CINE sépare donc le **framework de développement** du **runtime livré**.

## 2. Première étape : capacités

Le linker commence par demander :

```text
Qu'est-ce que cette application fait réellement ?
```

ASS peut révéler `events.listen`, `dom.text.write`, `dom.class.add` ; BSS peut révéler `dom.create`.

## 3. Deuxième étape : entrypoints

Chaque capacité connaît une ou plusieurs entrées runtime.

## 4. Troisième étape : fermeture

Le linker suit les imports ES relatifs jusqu'à stabilisation.

## 5. Quatrième étape : plugins

Un plugin runtime demandé devient une entrée. Le plugin qui sert uniquement à compiler n'est pas livré à l'utilisateur final.

## 6. Exemple

Pour `examples/native-cine-site`, le slice contient uniquement la fermeture nécessaire aux actions, au DOM, aux événements, à l'état et au runtime BSS/ASS détectés.

## 7. Mesure

Le résultat publie :

```text
candidateBytes
selectedBytes
reductionRatio
```

Cette mesure sert à suivre la qualité de la réduction ; elle ne promet pas un poids gzip exact.

## 8. Pourquoi ne pas supprimer directement des fonctions

Parce que JavaScript possède exports, side effects, imports dynamiques, réflexions et comportements indirects. La baseline CINE choisit d'abord le niveau module, plus conservateur et vérifiable.

## 9. Étape future

Le symbole/fonction-level tree shaking pourra être ajouté lorsqu'une analyse AST complète pourra démontrer qu'une fonction n'est jamais atteinte et qu'elle n'a pas d'effet de module.

## 10. Principe final

CINE ne doit pas seulement être un framework riche. Il doit pouvoir devenir un runtime petit parce que **la relation entre la page et le framework est calculée avant le déploiement**.
