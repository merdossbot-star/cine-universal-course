# CINE Portable Profile 1.0.0

## Purpose

The Portable Profile defines the subset of CINE that can be compiled to a selected set of target backends without hidden semantic changes.

## Principle

CINE source is the source of truth. Target-specific files are generated artifacts. A construct is portable only when its semantic requirement is supported by every selected target or is covered by an explicit adapter/bridge.

## Statuses

- `EXACT_NATIVE`: direct target capability.
- `LOWERED`: CINE semantics lowered to an equivalent target representation.
- `BRIDGED`: semantics preserved through an explicit target/runtime adapter.
- `RESIDUAL`: source/runtime-specific code retained outside the portable core.
- `UNSUPPORTED`: no safe mapping exists.

## Strict mode

Strict portable mode rejects `RESIDUAL`, `UNSUPPORTED`, runtime code generation, nondeterminism and opaque dynamic dispatch. Non-strict mode reports warnings so a developer can decide whether to add a bridge or accept target-specific code.

## Authoring rules

Prefer explicit IDs, explicit state, named events, declared resources, static imports and the CINE semantic layout/style primitives. Avoid direct target objects in portable business/state code. Declare platform capabilities at the boundary.

## Command

```text
cine portable app.js --targets web,java.swing,python.pyside6
```

## Important guarantee

A `PASS` means the source satisfies the declared portability contract for the requested targets. It does not by itself prove visual or behavioral equivalence on every native runtime; those are later proof stages.
