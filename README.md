### Rode o comando para instalar as dependências

```bash
    yarn 
```

### A aplicação está no docker, então basta subir os containeres usando:

```bash
    docker-compose up -d
```

### Caso queira parar e iniciar novamente os containeres use:

```bash
    docker stop desafio-sharenergy
```

```bash
    docker stop db-mongo
```

```bash
    docker start desafio-sharenergy
```

```bash
    docker start db-mongo
```

### Para rodar o seed use:

```bash
    yarn seed
```
