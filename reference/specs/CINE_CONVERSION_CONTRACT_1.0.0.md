# CINE Conversion Contract 1.0.0

## Architecture

```text
External source
  -> language/framework frontend
  -> syntax AST/CST
  -> semantic analysis
  -> capability graph
  -> CINE semantic IR
  -> target lowering
  -> target AST/source/resources
  -> native toolchain
  -> proof
```

## Authority

AST/CST and semantic analysis are authoritative. Regex may only discover hints, profile markers or migration candidates.

## Failure model

```text
PARSE_ERROR
SEMANTIC_ERROR
LINK_ERROR
TOOLCHAIN_ERROR
PROOF_BLOCKED_ENV
```

These statuses are distinct from translation states.

## Target backend contract

Every backend implements:

`validate -> lower -> generate -> compile -> test -> package -> inspectDependencies -> slice -> verify`

## Safe fallback

When translation is not provable, use `BRIDGED`, `RESIDUAL` or `UNSUPPORTED` with evidence. Never emit a silent approximation.
