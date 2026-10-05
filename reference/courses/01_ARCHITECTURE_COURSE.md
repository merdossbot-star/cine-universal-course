# Cours 01 — Architecture CINE

## Objectif

Comprendre CINE comme un système en couches où les pages, les comportements, les données et la cinématique restent séparés et composables.

## 1. Vue globale

```text
Source CINE
  ├─ .dss  données et constantes
  ├─ .css  présentation visuelle
  ├─ .ass  comportements et liaisons
  ├─ .bss  structures et templates
  └─ .lss  composition de l'application
          ↓
     scanner / expansion
          ↓
     parsers + graphes
          ↓
       IR CINE
          ↓
         CUPG
          ↓
 runtime / DOM / writers / drivers
```

L'expansion intervient avant les parsers historiques. Elle a pour rôle de transformer les directives de compilation en texte plat sans modifier le modèle IR existant.

## 2. Les quatre responsabilités runtime

### Drivers

Un driver produit un signal normalisé. Exemples disponibles dans l'API : `scroll`, `time`, `pointer`, `view`, `task`, `media`, `resize`, `visibility`, `reducedMotion`, `wheel`, `drag`, `orientation`, `keyboard`, `form`, `fullscreen`, `event`, `custom`.

### Effects

Un Effect consomme des entrées et possède une sortie déclarée. Le principe est :

```text
signal(s) → map → valeur de sortie → writer
```

Un Effect ne possède pas plusieurs sorties implicites : plusieurs canaux sont représentés par plusieurs Effects composables.

### Writers

Le writer sait appliquer une valeur au support cible. CINE fournit des writers pour `style`, `attr`, `class`, `content`, `transform`, `filter`, `shadow`, `gradient`, `clip`, `svg`, `property`, etc.

### Scheduler/runtime

Le runtime échantillonne les drivers, ordonne les Effects, évite les écritures identiques et orchestre la boucle d'exécution.

## 3. État et événements

L'état est représenté par des signaux, computed values ou stores. Les événements sont normalisés par le moteur d'événements et peuvent être consommés par ASS ou par du code runtime.

## 4. Design et cinématique

Le design system fournit des tokens et des contrats. Les espaces de valeurs rendent explicites les dimensions, couleurs, transformations, gradients, filtres et autres valeurs structurées. Les timelines, scènes et modulateurs ajoutent la dimension cinématique sans devenir une logique métier.

## 5. Sécurité et isolation

Le langage compile-time est volontairement non Turing-complet. L'évaluateur ne fait ni accès réseau, ni accès fichier arbitraire, ni exécution JavaScript dynamique. Les limites d'itération, profondeur et taille empêchent une expansion non bornée.

## 6. Pourquoi cette séparation est générique

Une fonctionnalité externe n'est pas ajoutée comme une nouvelle architecture concurrente. Elle est ramenée à des capacités CINE : rendu, état, événements, réseau, stockage, navigation, workers, etc. Cela permet d'avoir une représentation interne stable même lorsque l'entrée change.

## 7. Règle d'or

Construire une page signifie d'abord définir sa structure, ses données et ses comportements dans les langages CINE. Le support d'un framework externe vient ensuite par traduction et preuve ; il ne doit pas contaminer la méthode native.
