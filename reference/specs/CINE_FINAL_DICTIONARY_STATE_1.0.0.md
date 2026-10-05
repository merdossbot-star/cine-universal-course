# CINE 1.0.0 — État final du dictionnaire

## Registre

- 36 profils framework synchronisés depuis `frameworks/*.json`.
- 1 classe `Generic JavaScript` dans la section framework historique, traitée comme classe de langage.
- 169 capacités framework-locales.
- 44 capacités canoniques CINE.
- 11 classes de scripts.
- 18 règles de traduction.

## Unicité

Les IDs de classes et de règles sont uniques. Les noms humains sont contrôlés par empreinte sémantique ; une collision n'est autorisée que lorsqu'elle réutilise réellement le même mapping sémantique.

## Séparation des vocabulaires

Le vocabulaire local d'un framework n'est pas fusionné automatiquement avec les capacités canoniques. Une promotion vers CINE doit passer par un mapping explicite et vérifié.

## Sources

`dictionary/global.json` est le dictionnaire canonique livré.
`dictionary/framework-vocabulary.json` contient le vocabulaire propre aux frameworks.
`dictionary/framework-registry.final.json` est le registre machine-readable des profils.
