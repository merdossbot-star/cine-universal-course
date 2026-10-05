# Cours 03 — Construire une page CINE native

## Objectif

Créer une page complète uniquement avec l'architecture CINE, sans utiliser une alternative de framework comme méthode de construction.

## 1. Structure minimale

```text
site/
├── index.html
├── data.dss
├── theme.css
├── page.ass
├── components.bss
└── main.lss
```

Le `.lss` est la racine de composition. Il référence les ressources de la page.

## 2. HTML

L'HTML fournit la structure sémantique et les points de montage : `header`, `main`, sections, boutons, formulaires, etc.

## 3. DSS

Définir les constantes et données répétées dans `data.dss`. Exemple :

```text
@const radius = 12px
@data nav = [
  { id: "home", label: "Accueil", href: "/" },
  { id: "docs", label: "Documentation", href: "/docs" }
]
```

## 4. CSS

Le CSS décrit la présentation. Les directives `@each`, `@for` et `@if` génèrent du CSS statique puis disparaissent avant l'analyse finale.

## 5. ASS

ASS relie des éléments à des événements, classes, attributs, propriétés, texte, HTML ou actions.

## 6. BSS

BSS décrit des templates et des éléments. Un `@each` est statique et compile-time ; `if` et `for` sans `@` restent dynamiques dans l'IR BSS lorsqu'ils dépendent de l'état d'exécution.

## 7. LSS

Le LSS compose l'application :

```text
app → page → ressources
```

Une page peut déclarer `html`, `css`, `ass`, `bss`, `js`, `cine` et `dss`.

## 8. Cycle complet

```text
sources → cine check → cine assemble → cine build → navigateur
```

`cine build` écrit le CSS plat, les `.cass/.cbss/.clss` de compatibilité et le rapport d'expansion.

## 9. Méthode de travail

1. Définir la donnée.
2. Définir le HTML.
3. Écrire le CSS statique et ses générations répétitives.
4. Déclarer le comportement ASS.
5. Définir les templates BSS.
6. Composer dans LSS.
7. Tester.
8. Construire.

Le site d'exemple `examples/native-cine-site/` illustre cette méthode sans framework externe.
