# Mern Auth

## Descrição

Uma simples POC para servir de base para futuros projetos

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - Redux Toolkit para gerenciamento de estado
  - JWT para autenticação

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (ou seu banco de dados escolhido)

## Pré-requisitos

- Node.js instalado 
- MongoDB instalado e configurado

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-app.git`
2. Navegue até o diretório do frontend: `cd frontend`
3. Instale as dependências: `npm install`
4. Navegue até o diretório do backend: `cd backend`
5. Instale as dependências: `npm install`

## Configuração

### Backend

1. Crie um arquivo `.env` no diretório `backend` e configure as variáveis de ambiente, incluindo a chave secreta JWT e as informações do banco de dados.

   Exemplo:

   ```env
   PORT=3001
   MONGODB_URI=mongodb://localhost/seu-app
   JWT_SECRET=suachaveultrasecreta
