# Cours CINE — Construire un backend Java, Python, C#, C++, Rust, Kotlin, Swift, Dart ou Go

## Objectif

Apprendre à partir de CINE et non à partir d'un framework externe.

Le cours enseigne une seule méthode :

```text
CINE source
→ CINE IR
→ target lowering
→ target project
→ target compiler
→ target runtime
→ target proof
```

## Leçon 1 — Comprendre le problème

Un backend n'est pas un traducteur de syntaxe. Il résout les différences entre modèles d'exécution.

Un bouton CINE signifie :

```text
UI element
+ visual properties
+ enabled state
+ label
+ click intent
+ accessibility name
```

La cible peut représenter ces mêmes choses avec un XML, une classe, une fonction ou un DSL.

## Leçon 2 — Apprendre l'arbre commun

Toute cible doit être étudiée sur dix branches :

```text
UI
Layout
Style
State
Events
Navigation
Resources
Platform
Toolchain
Proof
```

## Leçon 3 — Faire un tableau de correspondance

Pour chaque capacité :

```text
CINE capability
Target primitive
Mode
Proof
Limit
```

Exemple :

```text
ui.layout.vertical
→ Swing BoxLayout
→ native
→ static + UI smoke
```

## Leçon 4 — Générer un écran minimal

Le premier fixture contient :

```text
window
header
text
input
button
list
image
navigation
state
```

## Leçon 5 — Style

Le CSS CINE est compilé en `CStyle-IR` avant d'être abaissé.

Ne jamais faire :

```text
CSS → regex → Java
```

Faire :

```text
CSS
→ style model
→ target mapping
```

## Leçon 6 — État

Le backend ne doit pas recopier le modèle d'état de la cible. CINE possède un état abstrait.

Exemple :

```text
count = 0
button click → count + 1
label = count
```

Cette relation est conservée dans `CState-IR/CEvent-IR` puis abaissée selon le runtime cible.

## Leçon 7 — Formats structurés

Lorsque la cible offre un format comme `.form`, `.ui`, `.xaml`, `.fxml` ou Android XML, utiliser le format comme couche de génération et d'import.

Il est interdit d'en faire la source de vérité CINE.

## Leçon 8 — Compiler

Le backend appelle la toolchain officielle de la cible.

La compilation CINE doit rester distincte de la compilation cible.

```text
CINE compiler = prouve le modèle CINE
Target compiler = prouve le langage cible
```

## Leçon 9 — Slicing

Le runtime complet n'est jamais une obligation.

Le linker demande au backend :

```text
quelles bibliothèques sont réellement nécessaires ?
quels modules sont réellement nécessaires ?
quelles ressources ?
quelles APIs ?
```

## Leçon 10 — Preuve

Un backend doit fournir une preuve graduée.

```text
parsed
semantic
compiled
smoke-tested
interaction-tested
visually/differentially certified
```

## Exercices par cible

### Java Swing

Construire `LoginPage` et générer `.java` + `.form` optionnel.

### JavaFX

Construire la même page et générer FXML + CSS + Java/Kotlin/JVM glue.

### PySide6

Construire la même page, générer `.ui` + Python + QSS.

### WPF

Construire XAML + C# avec styles/bindings.

### Qt C++

Construire `.ui` + `.hpp/.cpp` et lancer `uic`.

### Android Views

Construire un projet Gradle avec XML layouts et Kotlin.

### Android Compose

Construire les mêmes écrans avec `@Composable`.

### SwiftUI

Construire la même app avec SwiftUI et un backend AppKit pour les besoins macOS spécifiques.

### Flutter

Construire la même app en widget tree Dart.

### Slint/Rust

Construire une UI déclarative puis compiler AOT.

### Fyne/Go

Construire la même app avec containers/widgets/layouts et packaging mobile/desktop.

## Projet final

Une seule application CINE doit générer au minimum :

```text
web
swing
pyside6
android-compose
```

Puis les targets restantes.

Le résultat doit présenter un tableau de couverture identique pour toutes les cibles.
