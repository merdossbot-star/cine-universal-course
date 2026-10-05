# Protocole de validation et de compilation CINE

## 1. But

Ce protocole définit ce qu'un fichier CINE doit franchir avant de pouvoir être considéré comme exécutable.

## 2. Machine de validation

La validation combine deux automates :

1. **automate lexical** : états `text`, `single`, `double`, `line-comment`, `block-comment` ;
2. **automate à pile** : équilibre `()`, `[]`, `{}` et imbrication des blocs.

Une machine d'état seule ne peut pas reconnaître toutes les imbrications possibles ; la pile est donc une partie normative du validateur.

## 3. Pipeline

```text
SOURCE
  │
  ├─ S0 structure ──────── rejet immédiat si échec
  │
  ├─ S1 parser extension ─ rejet si syntaxe invalide
  │
  ├─ S2 sémantique ─────── rejet si variable/type/règle invalide
  │
  ├─ S3 linking ─────────── rejet si ressource/plugin/import impossible
  │
  ├─ S4 execution-ready ── production du plan et du slice
  │
  └─ S5 oracle runtime ─── preuve comportementale indépendante
```

## 4. Règle d'extension

Toute nouvelle extension CINE doit fournir :

- une identité dans `extensions.js` ;
- un parser ;
- un contrat IR ;
- un ensemble de diagnostics ;
- au minimum un automate structurel compatible ;
- des fixtures valides et invalides ;
- un compilateur qui ne fait pas d'exécution arbitraire.

## 5. Règle de rejet

Aucune étape aval ne doit masquer une erreur d'étape amont. Un fichier structurellement invalide ne doit pas être « récupéré » par un parser indulgent.

## 6. CSS

CSS reste un langage hôte. Le validateur CINE vérifie sa structure et toutes les constructions CINE qui l'enrichissent. Pour une certification navigateur stricte, la grammaire CSS complète du navigateur reste une preuve de niveau S5.

Il est volontairement interdit de prétendre qu'un scanner CSS minimal est un parseur CSS complet.

## 7. Source maps

Les erreurs d'expansion et les erreurs des parsers post-expansion sont remappées vers le fichier et la position du source original.

## 8. Idempotence

```text
expand(expand(source)) == expand(source)
```

L'expansion réussie est un texte plat ne contenant plus de directives CINE à exécuter.

## 9. Déterminisme

La même entrée, le même contexte et les mêmes limites donnent le même artefact sémantique et le même hash.

## 10. Sécurité

Les limites minimales sont celles du langage DSS : itérations, profondeur, taille, profondeur d'import et clés interdites.

L'évaluateur ne fait pas `eval`, `new Function`, réseau, horloge ou accès fichier libre.
