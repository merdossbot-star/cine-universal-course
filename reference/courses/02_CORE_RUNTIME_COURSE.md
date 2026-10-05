# Cours 02 — Core, état, événements et runtime

## Objectif

Savoir construire un comportement interactif CINE sans dépendre d'une bibliothèque de composants externe.

## 1. Scope

Un scope regroupe une durée de vie et un contexte. Les composants et instances peuvent disposer d'un scope enfant qui sera libéré avec leur destruction.

## 2. Signal

Un signal possède une valeur et des abonnés. La modification d'un signal notifie ses dépendances.

```js
const count = Cine.signal?.(0)
```

Dans le runtime public, on peut aussi utiliser les primitives exportées du noyau universel pour les workflows plus bas niveau.

## 3. Store

Le store fournit `get`, `set`, `patch`, `subscribe`, `undo` et `transaction`. Il convient aux données applicatives alors qu'un signal convient à une valeur réactive isolée.

## 4. Events

Les événements sont normalisés et enregistrés dans le scope. ASS peut déclarer :

```text
on click -> action("save");
```

Les modificateurs (`once`, `prevent`, `stop`, `capture`, `passive`) restent attachés à la déclaration.

## 5. DOM

Les primitives DOM résolvent des éléments, créent des handles, appliquent des propriétés et écrivent le contenu. Le runtime évite de faire dépendre le langage de présentation directement du navigateur.

## 6. Discipline

Une page doit garder les données dans DSS/store, les intentions de comportement dans ASS et la mise en forme dans CSS. Le JavaScript est réservé aux tâches qui ne peuvent pas être exprimées nativement ou aux intégrations spécifiques du runtime.
