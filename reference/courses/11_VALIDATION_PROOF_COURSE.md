# Cours 11 — Validation et preuve

## Objectif

Savoir distinguer un code qui « semble fonctionner » d'une architecture dont les propriétés importantes sont démontrées par des tests reproductibles.

## 1. Niveaux

### Test unitaire

Vérifie une fonction isolée : lexer, expression, scanner, parser, source map, dictionnaire.

### Test d'intégration

Vérifie un flux complet : DSS → CSS/ASS/BSS/LSS → assembleur.

### Gate

Vérifie une propriété globale du dépôt : déterminisme, absence de `eval`, couverture, dictionnaire, universalité, pages réelles, grammaire DSS, idempotence, sûreté.

## 2. Parité historique

Une source sans nouvelle syntaxe doit emprunter le chemin rapide et conserver le comportement IR historique. C'est la règle qui protège la compatibilité 1.0.0.

## 3. Déterminisme

Trois exécutions de la même source doivent produire le même hash. Les fonctions compile-time n'ont ni horloge, ni aléatoire, ni réseau.

## 4. Sécurité

Tester au minimum : boucle énorme, cycle d'import, profondeur excessive, sortie trop grande, collection trop grande et clés interdites.

## 5. Parsing comme propriété centrale

Tout fichier CINE généré doit repasser par les parsers CINE. La réussite d'une génération de texte ne suffit pas ; le texte doit être accepté par le langage cible et produire un IR valide.

## 6. Preuve de traduction

Une transformation de framework externe ne doit pas être promue parce qu'elle « ressemble » à CINE. Elle doit passer l'oracle différentiel, le round-trip ou une preuve comportementale adaptée. Les parties non prouvées restent isolées.
