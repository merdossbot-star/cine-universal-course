# Cours 04 — CSS CINE

## Objectif

Utiliser CSS comme langage de présentation tout en profitant du noyau compile-time commun.

## 1. Ce qui reste du CSS

CINE ne remplace pas les règles CSS natives. Les at-rules hôtes comme `@media`, `@keyframes`, `@font-face`, `@supports` et `@import` restent du texte CSS.

`var(--cine-ring)` est également un canal CSS runtime. Il ne doit jamais être confondu avec `$variable`.

## 2. Variables de compilation

```text
@use "data.dss";
.card { border-radius: #{dss.radius}; }
```

`$x` et `#{...}` appartiennent à la compilation CINE. `var(--x)` appartient à CSS.

## 3. Boucles

```text
@for $i in 1..3 {
  .m-#{$i} { margin: #{dss.gap * $i}; }
}
```

Les bornes sont inclusives. La sortie est du CSS plat.

## 4. Variantes

```text
@each $name, $c in dss.colors {
  .btn-#{$name} { background: $c; }
}
```

## 5. Chaînes

Dans une chaîne CSS, seule l'interpolation `#{...}` est substituée. Un `$x` littéral dans une chaîne CSS n'est pas automatiquement transformé.

## 6. Validation

Le CSS développé passe ensuite par l'analyse de graphe CINE. Les sélecteurs générés restent soumis aux règles de validation de CINE lorsqu'ils entrent dans des langages qui les interprètent.
