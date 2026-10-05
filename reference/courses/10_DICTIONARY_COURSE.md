# Cours 10 — Dictionnaire global CINE

## Objectif

Faire du dictionnaire la base canonique de vocabulaire et de cours pour fusionner des frameworks sans créer plusieurs définitions concurrentes d'une même capacité.

## 1. Ce que contient le dictionnaire

La livraison actuelle contient 23 classes de frameworks, 11 classes de scripts, 44 capacités et 18 règles de traduction.

## 2. Classe framework

Une classe décrit une entrée externe : identifiant, nom, version, marqueurs, capacités et stratégies possibles (`native`, `adapter`, `bridge`, `residual-js`).

## 3. Classe script

Une classe décrit un comportement ou une famille de scripts génériques lorsque le projet n'appartient pas à un framework précis.

## 4. Capability atom

Une capacité doit avoir un identifiant canonique. Exemples : `dom.query`, `dom.mutate`, `events.listen`, `state.local`, `router.navigation`, `network.fetch`, `worker.create`, `data.define`.

## 5. Règle de traduction

Une règle relie une forme de source à une cible CINE avec un niveau de confiance et une exigence de preuve. Une proposition insuffisamment prouvée reste une proposition apprise et ne devient pas automatiquement une règle normative.

## 6. Politique d'unicité

L'identifiant (`id`) est toujours globalement unique.

Le nom humain est normalisé avant comparaison. Deux classes portant le même nom canonique ne sont admises que si leur empreinte sémantique est identique : même `kind`, même ensemble de capacités, mêmes marqueurs normalisés et mêmes stratégies. Sinon le gate rejette le dictionnaire pour ambiguïté.

Une collision qui représente réellement la même transformation doit réutiliser l'entrée canonique ou conserver exactement la même empreinte sémantique ; elle ne doit pas créer une seconde interprétation concurrente.

Les IDs de capacités et de règles sont eux aussi uniques et leurs clés doivent correspondre à leur `id`.

## 7. Pourquoi cette règle est importante

Le dictionnaire doit être fusionnable. Un traducteur doit pouvoir demander : « quelle capacité CINE correspond à ce comportement ? » sans dépendre de la provenance du framework.

## 8. Cycle de vie

```text
analyser → identifier → mapper vers capacités → vérifier → proposer → prouver → promouvoir
```

Le dictionnaire est donc à la fois registre, contrat et base pédagogique.

## 9. Référence normative

La règle exacte de fusion et de collision est détaillée dans `docs/spec/DICTIONARY_IDENTITY_POLICY.md`.
