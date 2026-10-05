# Cours 08 — DSS : données et langage compile-time

## Objectif

Utiliser DSS comme source commune de constantes et de données statiques pour les cinq langages CINE.

## 1. Types

CINE DSS supporte `null`, booléens, nombres, dimensions, chaînes, couleurs, tableaux et objets.

## 2. Constantes

```text
@const gap = 8px
@const radius = 6px
```

Dans un `.dss`, les constantes et données sont exportées automatiquement.

## 3. Données

```text
@data colors { primary: #0af; danger: #e33; }
```

Les tableaux et objets gardent leur ordre d'insertion.

## 4. Imports

```text
@use "theme.dss";
@use "admin.dss" as admin;
```

Un `.dss` sans alias rejoint l'espace `dss`. Deux clés homonymes dans cet espace produisent une collision explicite.

## 5. Expressions

Le langage commun ajoute les variables `$name`, chemins (`dss.colors.primary`), tableaux, objets, dimensions, couleurs, plages et fonctions pures.

## 6. Fonctions

Les fonctions compile-time sont une liste blanche : collections (`len`, `range`, `keys`, `values`, `entries`, `concat`, `slice`, `at`, `includes`, `reverse`, `unique`, `sort`, `sum`), texte (`upper`, `lower`, `trim`, `join`, `replace`, `pad`, `str`, `num`), nombres (`min`, `max`, `abs`, `round`, `floor`, `ceil`, `clamp`), logique (`not`, `coalesce`, `empty`, `has`) et couleur (`mix`, `alpha`).

## 7. Sécurité

Les clés `__proto__`, `constructor` et `prototype` sont interdites. Les boucles, imports, profondeur et tailles sont bornés.

## 8. Idempotence

Une expansion réussie produit du texte plat. Une seconde expansion de ce texte ne doit plus créer de nouvelle expansion compile-time. C'est une propriété testée du langage.
