# Cours 18 — Automates de validation et compilateur CINE

## Objectif

Savoir pourquoi CINE possède un compilateur distinct du parser et comment un fichier passe de source texte à un état autorisé pour l'exécution.

## 1. Parser et compilateur ne sont pas la même chose

Le parser répond : « quelle structure possède ce texte ? »

Le compilateur répond : « ce texte est-il accepté, correctement relié et prêt pour la suite ? »

Il agrège donc : structure, langage, sémantique, imports, plugins et plan d'exécution.

## 2. Pourquoi une pile

Une expression simple peut être reconnue par une machine d'états. Mais :

```text
@if {
  @each {
    .x { ... }
  }
}
```

possède une profondeur arbitraire. Le validateur utilise donc une pile de délimiteurs. C'est un automate à pile déterministe.

## 3. Premier exemple

```text
@const gap = 8px;
.card { padding: #{gap}; }
```

Le compilateur :

1. vérifie la structure ;
2. valide les directives ;
3. évalue la constante ;
4. produit le CSS plat ;
5. passe le résultat au graphe CSS.

## 4. Erreur avant exécution

```text
@if true {
  .card { color: red; }
```

Le compilateur produit `CINE-E7001` et s'arrête. Il n'envoie pas une source partiellement connue au runtime.

## 5. Contrat `compileFile`

Une unité valide expose au minimum :

```text
file
lang
sourceHash
status
validation
artifact
diagnostics
```

`status=compiled` signifie que les contrôles du front-end ont réussi.

## 6. Contrat `compileProject`

Le projet ajoute :

```text
proof
executionPlan
assembly
runtimeSlice
```

`browserBehaviorProven=false` est normal tant qu'un oracle navigateur n'a pas tourné.

## 7. Développeur

Toujours lancer :

```text
cine check .
cine compile examples/native-cine-site/main.lss
cine build examples/native-cine-site/main.lss --out dist
cine slice examples/native-cine-site/main.lss --out dist/runtime
```

## 8. Règle pédagogique

On ne dit jamais « ça fonctionne » uniquement parce qu'un parser accepte le fichier. On distingue : accepté, compilé, lié, prêt à exécuter et prouvé par runtime.
