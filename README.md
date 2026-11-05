# k6 - API pública (JSONPlaceholder)

Projeto k6 adaptado para a API pública https://jsonplaceholder.typicode.com.

## Estrutura

```
k6/
  configuration/   values-<recurso>-config.yaml
  execution/<POSTS|USERS|TODOS>/
    Index.js            cenário (ramping-vus), setup/teardown
    userVariables.js    BASE_URL, RESOURCE_CODE, cloudConfig
    common/utils.js     verificarStatus, chance, carimboHora
    resources/jsonPlaceholder.js   requisições GET
    data/recursos.csv   dados do SharedArray
```

## Executar

```
k6 run k6/execution/POSTS/Index.js
k6 run -e MAX_VUS=10 -e CONSTANT_DURATION=5m k6/execution/USERS/Index.js
```

Variáveis: `BASE_URL`, `RESOURCE_CODE`, `RAMP_UP_DURATION` (30s), `CONSTANT_DURATION` (2m), `MAX_VUS` (5).
Use carga baixa: é uma API pública compartilhada.
