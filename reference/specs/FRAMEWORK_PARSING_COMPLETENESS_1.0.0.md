# CINE 1.0.0 — Complétude du parsing framework

« Tous les frameworks connus » signifie ici l'ensemble des profils enregistrés dans `frameworks/*.json` et le registre canonique de `dictionary/global.json` à la date de la release. Ce n'est pas une affirmation qu'il existe un ensemble fini de tous les frameworks publiés dans le monde.

Pour chaque profil, CINE maintient :

- identité et nom canonique ;
- packages/modules indicateurs ;
- familles de constructions reconnues ;
- vocabulaire local du framework ;
- mapping vers les capacités canoniques CINE ;
- probe syntaxique reproductible ;
- statut de parsing ;
- observations non classifiées.

La complétude est donc mesurée sur le registre, puis augmentée par des corpus réels de versions et de projets.

## Règle « tous les scripts »

Il est impossible de publier une liste finie de toutes les fonctions qu'un framework pourrait exposer sans figer une version, des plugins et les APIs privées. CINE applique donc deux couches complémentaires :

1. **vocabulaire connu** : les constructions documentées par le profil du framework ;
2. **inventaire exhaustif par AST/CST** : tous les appels, accès et constructeurs effectivement rencontrés dans le corpus sont conservés, même s'ils ne sont pas encore classifiés.

Ainsi, un nouveau script n'est pas « ignoré » ; il apparaît comme observation à classifier.

## Critère de passage

Un framework passe la gate lorsque :

- son profil est présent ;
- son identité est unique ;
- un probe canonique est parseable ;
- le framework est détecté dans son probe ;
- les constructions du probe sont inventoriées ;
- aucun diagnostic syntaxique n'est silencieusement supprimé.

La certification « conversion complète » est une étape distincte et nécessite un corpus comportemental et une preuve différentielle.
