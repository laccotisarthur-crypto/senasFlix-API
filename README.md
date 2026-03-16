# API SenasFlix - node.js + Express
API REST asmples para gerenciar filmes e series

## Pré-requisitos
- Node.js Instalado

## Como rodar

### Instalar dependências
```bash
npm
```

### Iniciar o servidor
```bash
node index.js
```

### Acessar 
Abra o navegador em: `https://localhost:3000`


## Endpoints

### Filmes

| Métodos | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Buscar um filme específico |
| POST | `/filmes` | Cria um novo filme |

### Series

| Métodos | Endpoint | Descrição |
|---------|----------|-----------|
| GET | `/series` | Lista todos as series |
| GET | `/serie/:id` | Buscar uma serie específica |
| POST | `/series` | Cria uma nova serie |

## Tecnologias
- Node.js
