# CINE 1.0.0 — Laboratoire de parsing universel des frameworks

## But

Ce cours apprend à étendre CINE sans inventer un parser différent pour chaque framework. Le framework est décrit par un profil de vocabulaire et un jeu de probes ; le frontend de langage conserve l'AST/CST et inventorie les constructions réellement rencontrées.

## Procédure standard

```text
1. identifier l'extension
2. sélectionner le frontend du langage
3. parser la syntaxe
4. charger le graphe de projet
5. résoudre imports et alias
6. inventorier appels/membres/constructeurs
7. détecter le framework à partir de preuves indépendantes
8. matcher les constructions connues
9. conserver les constructions inconnues comme observations
10. mapper vers les capacités CINE
11. compiler l'alternative CINE
12. prouver la cible
```

## Principe essentiel

Une API inconnue n'est jamais supprimée et n'est jamais déclarée équivalente par défaut. Elle reste dans l'inventaire jusqu'à ce qu'une règle soit validée.

## Travail de laboratoire

Chaque profil `frameworks/*.json` possède un probe canonique. La gate `gate-framework-corpus` exige qu'un probe soit parseable et que le framework soit détecté.

Le corpus de probes n'est pas la preuve de compatibilité fonctionnelle de l'intégralité du framework. La compatibilité comportementale nécessite un corpus versionné de projets réels, une compilation cible et une trace différentielle.

## Ajout d'un nouveau framework

Créer le profil, définir les packages et marqueurs fiables, ajouter les familles de constructions connues, générer le probe, exécuter le gate, puis ajouter des projets réels. Les noms doivent être uniques selon la politique du dictionnaire.
