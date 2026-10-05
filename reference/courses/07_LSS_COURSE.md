# Cours 07 — LSS : composition de l'application

## Objectif

Comprendre pourquoi LSS est la racine du graphe CINE et comment assembler une page complète.

## 1. Blocs

Les blocs principaux sont `app`, `page`, `layout`, `component`, `plugin`, `resource`, `route` et `env`.

## 2. Application

```text
app "site" {
  html "./index.html";
  css ["./theme.css"];
  ass ["./page.ass"];
  bss ["./components.bss"];
}
```

## 3. Page

```text
page "home" {
  root "#app";
  route "/";
}
```

Une page peut déclarer ses ressources propres. Les ressources définies au niveau `app` peuvent être héritées par les pages dans le mode d'assemblage prévu.

## 4. DSS dans LSS

```text
@use "./data.dss";
@each $p in dss.pages {
  page "#{$p.id}" {
    route "#{$p.route}";
  }
}
```

Le LSS peut donc transformer une liste de données en plusieurs pages statiques.

## 5. Imports

`@use` doit apparaître avant les autres directives de compilation. LSS reste la racine : un `.lss` ne peut pas être importé comme un module DSS/CSS/ASS/BSS.

## 6. Build

Après expansion, CINE écrit un `.clss` compatible, les ressources plates et `expansion.report.json`. Le but est de séparer clairement la source expressive du résultat déployable.
