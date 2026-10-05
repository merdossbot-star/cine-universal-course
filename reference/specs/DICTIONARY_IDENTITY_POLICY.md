# Politique normative — identité et unicité du dictionnaire CINE

## 1. Objet

Le dictionnaire CINE est un registre global. Il doit rester fusionnable lorsque plusieurs frameworks, bibliothèques et scripts utilisent les mêmes capacités.

## 2. Identifiants

Les `id` de classes, capacités et règles sont uniques dans l'espace global. Un même `id` avec deux sémantiques différentes est interdit.

## 3. Noms humains

Les noms sont comparés après normalisation Unicode, suppression des accents, passage en minuscules et réduction des séparateurs. Exemple : `Café UI`, `cafe-ui` et `cafe_ui` appartiennent au même nom canonique.

Deux classes peuvent partager ce nom canonique uniquement si leur empreinte sémantique est identique : `kind`, capacités, marqueurs et stratégies doivent être identiques après normalisation/tri.

Une différence de sémantique exige donc un nom ou une entrée canonique différente. Un alias qui réalise exactement la même transformation peut rester autorisé avec une empreinte identique.

## 4. Capacités

Avant de créer un nouvel atom, rechercher une capacité existante qui exprime déjà la même intention. Une nouvelle capacité doit avoir une frontière claire et un identifiant stable.

## 5. Règles

Une règle de traduction possède un `id` unique. Elle indique source, motif, cible, confiance et preuve requise. Une règle non prouvée reste dans l'espace des propositions apprises.

## 6. Gate

`npm run gate:dictionary` vérifie l'identité globale. Les tests de `test/dictionary-identity.test.js` vérifient explicitement :

- collision de noms avec sémantiques différentes → rejet ;
- alias avec sémantique identique → accepté ;
- collision d'ID → rejet.

## 7. Principe de fusion

```text
Framework A ─┐
Framework B ─┼→ capacités canoniques → règles prouvées → CINE
Framework X ─┘
```

Le dictionnaire ne doit pas devenir une collection de dialectes indépendants. Il doit converger vers un vocabulaire interne commun.
