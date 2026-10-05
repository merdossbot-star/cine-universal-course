# Cours 09 — Parser, IR, graphes et CUPG

## Objectif

Comprendre le chemin entre les fichiers source et la représentation compilée.

## 1. Scanner

Le scanner lit le texte sans prétendre parser CSS ou JavaScript. Il respecte chaînes, commentaires, parenthèses et accolades. Il reconnaît uniquement les directives CINE compile-time.

## 2. Expansion

L'expandeur résout les variables, conditions, boucles et imports. Il produit :

```text
{text, map, exports, uses, diagnostics, stats}
```

## 3. Parsers

Les parsers ASS/BSS/LSS historiques continuent à construire leurs IR respectives. Le CSS reste analysé par le graphe CSS après expansion.

## 4. Source maps

Le texte généré est relié à la position source. Une erreur du parser final peut donc être remontée à la directive CINE qui a généré la ligne fautive.

## 5. Graphe de modules

Les imports sont résolus par chemin canonique, mis en cache avec le hash de contenu, ordonnés de façon stable et rejetés en cas de cycle ou de profondeur excessive.

## 6. CUPG

Le CUPG est haché à partir du JSON canonique du graphe. `sourceMap` et les métadonnées d'exports n'entrent pas dans le hash. Deux sources différentes qui produisent le même graphe utile doivent donc converger vers le même hash.

## 7. Build

`cine build` produit des ressources plates adaptées au déploiement et conserve un rapport d'expansion pour mesurer la réduction du code.
