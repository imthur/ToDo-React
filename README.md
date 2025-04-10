# ✅ Lista de Tarefas em React

Uma aplicação moderna e interativa de gerenciamento de tarefas construída com React, projetada para ajudar você a organizar suas atividades diárias de forma eficiente.

## 🚀 Funcionalidades

- **Gerenciamento de Tarefas**: Crie, complete e remova tarefas com facilidade
- **Categorias**: Organize tarefas por categorias (Trabalho, Pessoal, Estudos)
- **Pesquisa**: Encontre tarefas rapidamente digitando na barra de pesquisa
- **Filtragem**: Visualize todas as tarefas, apenas tarefas concluídas ou apenas tarefas ativas
- **Ordenação**: Organize tarefas em ordem alfabética crescente ou decrescente
- **Design Responsivo**: Funciona em dispositivos desktop e móveis

## 📋 Requisitos

- Node.js (v16.0.0 ou superior)
- npm (v8.0.0 ou superior)

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seunome/lista-tarefas-react.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd lista-tarefas-react
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra seu navegador e acesse:
   ```
   http://localhost:5173
   ```

## 💻 Como Usar

- **Adicionar uma tarefa**: Preencha o título da tarefa e selecione uma categoria, depois clique em "Criar Tarefa"
- **Concluir uma tarefa**: Clique no botão "Concluir" para marcar uma tarefa como completa
- **Reabrir uma tarefa**: Clique no botão "Reabrir" em uma tarefa concluída
- **Remover uma tarefa**: Clique no botão "x" em qualquer tarefa
- **Pesquisar**: Digite na caixa de pesquisa para filtrar tarefas por título
- **Filtrar por status**: Use o menu suspenso para mostrar todas, concluídas ou não concluídas
- **Ordenar**: Clique nos botões "Asc" ou "Desc" para ordenar tarefas alfabeticamente

## 🏗️ Estrutura do Projeto

```
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Filter.jsx    # Componente de filtragem e ordenação
│   │   ├── Search.jsx    # Componente de pesquisa
│   │   ├── Todo.jsx      # Componente de tarefa individual
│   │   └── TodoForm.jsx  # Formulário para criar novas tarefas
│   ├── img/
│   │   └── bg.png        # Imagem de fundo
│   ├── App.css           # Estilos principais
│   ├── App.jsx           # Componente principal da aplicação
│   └── main.jsx          # Ponto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologias

- **React** - Biblioteca front-end
- **Vite** - Ferramenta de build e servidor de desenvolvimento
- **CSS** - Estilização
