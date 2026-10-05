# CINE 1.0.0 — Algorithme universel de parsing des frameworks

## Objectif

Le parsing universel CINE ne cherche pas à connaître à l'avance chaque fonction de chaque framework. Il doit :

1. reconnaître le langage et le format conteneur ;
2. utiliser le frontend syntaxique approprié ;
3. produire un AST/CST sans perte volontaire ;
4. résoudre les imports, alias et symboles lorsque le frontend le permet ;
5. inventorier toutes les constructions exécutables rencontrées ;
6. détecter le framework avec plusieurs indices indépendants ;
7. associer les constructions aux capacités locales du framework ;
8. mapper les capacités locales vers les capacités canoniques CINE ;
9. préserver toute construction non prouvée sous forme d'observation, bridge ou residual ;
10. ne jamais déclarer une traduction équivalente uniquement parce qu'un texte a été reconnu.

## Frontends

### JavaScript / TypeScript / JSX / TSX

Le frontend de laboratoire utilise l'API Compiler de TypeScript. Il produit un `SourceFile` AST, des diagnostics syntaxiques et un inventaire des appels, membres, constructeurs et identifiants. Les alias d'import sont résolus pour obtenir des noms canoniques tels que `react.useState` même lorsque le code utilise `useState as s`.

La résolution sémantique complète par `Program`, `Symbol` et `TypeChecker` reste la source d'autorité pour les informations de type et de portée du projet.

### Formats composites

Vue, Svelte et Astro sont découpés en parties structurelles (script, template, style/frontmatter). Le script est envoyé au frontend JavaScript ; le template utilise le tokenizer/parseur de structure CINE et les marqueurs propres à l'écosystème.

### HTML et DSL attributaires

Alpine, htmx, Stimulus, Angular templates et Tailwind sont traités comme des formats HTML enrichis : l'arbre HTML reste indépendant de la sémantique de chaque bibliothèque et les attributs sont ensuite classifiés.

## Détection

La détection utilise dans cet ordre :

- module importé ;
- alias de package ;
- syntaxe propre au conteneur ;
- marqueurs de template/directives ;
- nom/extension du fichier ;
- profil connu du dictionnaire.

Un seul indice générique ne suffit pas à conclure qu'un framework a été utilisé lorsqu'il est ambigu.

## Inventaire complet

L'inventaire AST conserve toutes les occurrences des appels et accès observés. Les fonctions inconnues ne sont pas supprimées : elles restent des observations non classifiées. Cela permet d'étendre ultérieurement le profil d'un framework sans reparcourir le texte de façon aveugle.

## Classification

Chaque construction observée reçoit éventuellement :

`known-framework-construct`
`generic-language-construct`
`framework-local-unknown`
`dynamic-boundary`
`platform-boundary`

L'absence de classification ne vaut jamais pour « inutile ».

## Sortie obligatoire

```json
{
  "status": "PASS|PARSE_ERROR|UNSUPPORTED_FILE_TYPE",
  "parserPipeline": [],
  "frameworks": [],
  "constructs": [],
  "canonicalCapabilities": [],
  "inventory": {},
  "diagnostics": []
}
```

## Preuve

La campagne de parsing distingue :

- réussite syntaxique ;
- réussite d'analyse framework ;
- couverture des constructions ;
- couverture de capacités ;
- conversion CINE ;
- compilation de la cible ;
- équivalence comportementale.

Ces étapes ne doivent pas être fusionnées.
