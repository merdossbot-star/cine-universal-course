# Protocole CINE de minimisation du runtime

## 1. Objectif

Produire pour chaque application un runtime adapté aux capacités réellement atteignables au lieu de distribuer systématiquement tout CINE.

## 2. Unité de calcul

La baseline 1.1.0 slice au niveau **module**.

```text
CINE project
  → IR pages
  → capabilities
  → entry modules
  → transitive import closure
  → selected runtime
```

## 3. Sources de reachability

Le linker peut recevoir :

- opérations détectées dans ASS/BSS ;
- capacités fournies/déclarées par les plugins ;
- fichiers d'actions référencés ;
- points d'entrée de features ;
- imports ES internes.

## 4. Fermeture

Pour chaque entrée `E`, tous les imports relatifs internes de `E` sont parcourus récursivement. Chaque module n'est copié qu'une fois.

## 5. Dépendances externes

Les imports non relatifs ne sont jamais copiés silencieusement dans le slice. Ils restent dans `externals[]` afin que le déploiement sache ce qui doit être fourni par l'environnement.

## 6. Plugins

Un plugin CINE runtime réellement sélectionné devient lui-même un entrypoint. Le plugin de compilation n'est pas inclus dans le slice runtime.

## 7. Mesures

Le manifeste publie :

```text
candidateBytes
selectedBytes
retentionRatio
reductionRatio
```

La mesure est informative et dépend du périmètre de candidats choisi ; elle n'est pas une mesure de compression gzip.

## 8. Sécurité de conservation

Le mode `conservative-static-closure` préfère une dépendance en trop à une suppression potentiellement fonctionnelle.

## 9. Fonction-level future

Une optimisation ultérieure peut descendre du module vers le symbole puis la fonction. Elle devra prouver les exports utilisés, les imports dynamiques, les side effects et les interactions avec le runtime. Elle ne doit pas être activée par défaut tant que la preuve n'est pas supérieure à celle du slice module-level.
