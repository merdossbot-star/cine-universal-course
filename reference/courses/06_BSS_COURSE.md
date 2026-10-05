# Cours 06 — BSS : structure, templates et rendu

## Objectif

Créer des structures de composants et de rendu sans dépendre d'un moteur de composants externe.

## 1. Template

```text
template "button" (label) {
  button.primary {
    text <- label;
  }
}
```

## 2. Éléments

Un élément suit une spécification simple : `tag`, `#id` et `.classes`. La normalisation retire les espaces accidentels autour de `.` et `#`.

## 3. Boucle compile-time

```text
@each $item in dss.nav {
  a.item-#{$item.id} {
    text <- "#{$item.label}";
  }
}
```

Cette boucle est dépliée avant que le parser BSS construise l'IR.

## 4. Conditions runtime

```text
if user.admin {
  li.admin { text <- "Admin"; }
}
```

Sans `@`, le `if` reste une construction dynamique BSS.

## 5. Boucle runtime

```text
for item in user.items key item.id {
  li.item { text <- item.label; }
}
```

Elle reste dans l'IR pour être évaluée par le runtime avec l'état courant.

## 6. Distinction fondamentale

`@each` = réduire le code source à la compilation.

`each`/`for` dynamique = répondre aux données disponibles à l'exécution.

C'est une frontière architecturale importante pour garder CINE déterministe et prouvable.
