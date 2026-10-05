# Cours 05 — ASS : comportements et interactions

## Objectif

Décrire les comportements d'une page de façon déclarative et indépendante de l'implémentation JavaScript d'un framework externe.

## 1. Règle ASS

```text
#save {
  on click -> action("save");
  class pending <- state.pending;
}
```

Chaque sélecteur déclare un ensemble de statements.

## 2. Événements

La forme générale est :

```text
on <event>(.mod)* -> action("name", args...);
```

Les modificateurs sont interprétés par le runtime d'événements.

## 3. Écriture

```text
attr aria-busy <- state.pending;
class active <- state.active;
text <- state.label;
prop value <-> state.formValue;
```

## 4. Lifecycle

```text
lifecycle mount -> action("load");
```

ASS peut également émettre un signal métier ou événement déclaré.

## 5. État local

```text
state pending = false;
```

Pour les valeurs calculées complexes, préférez DSS pour les données de compilation et les stores/signaux runtime pour l'état réel.

## 6. Actions

Les actions portent l'intention. Le runtime les résout dans le registre d'actions. Cela permet à la même déclaration ASS de rester stable quelle que soit la manière dont une action est implémentée.

## 7. Validation

Les sélecteurs sont validés après expansion. Le bug historique `@page` a été corrigé : une directive ASS racine avec `@` ne doit pas être interprétée comme un sélecteur.
