# 💇 Hair Day

Aplicação Web para agendamentos de corte de cabelo, desenvolvida durante o curso da RocketSeat.

## 📋 Sobre o Projeto

Hair Day é uma aplicação moderna e intuitiva para gerenciar agendamentos de uma barbearia/salão de beleza. A aplicação permite que os clientes selecionem data, horário e informem seus nomes para criar agendamentos de forma rápida e eficiente.

## ✨ Funcionalidades

- 📅 Seleção de data para agendamento
- ⏰ Visualização de horários disponíveis e ocupados
- 👤 Cadastro de cliente por agendamento
- ✅ Criação de novos agendamentos
- ❌ Cancelamento de agendamentos existentes
- 📊 Visualização de agendamentos por dia

## 🚀 Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação principal
- **Webpack** - Module bundler para empacotamento dos assets
- **Day.js** - Biblioteca para manipulação de datas
- **JSON Server** - API REST fake para desenvolvimento
- **HTML5 & CSS3** - Estrutura e estilização

## 📁 Estrutura do Projeto

```
projeto-hairday/
├── src/
│   ├── index.html          # Página principal
│   ├── main.js            # Arquivo de entrada JavaScript
│   ├── assets/            # Imagens e ícones
│   ├── modules/           # Módulos da aplicação
│   │   ├── form/         # Formulário de agendamento
│   │   └── schedules/    # Gerenciamento de agendamentos
│   ├── services/         # Serviços de API
│   ├── styles/           # Arquivos CSS
│   └── utils/            # Utilitários
├── package.json          # Dependências do projeto
├── server.json          # Banco de dados JSON
└── webpack.config.js    # Configuração do Webpack
```

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm ou yarn

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/wellingtonbarbosadev/projeto-petshop/
cd projeto-hairday
```

2. Instale as dependências:
```bash
npm install
```

## 🎮 Como Usar

### Modo Desenvolvimento

Para iniciar a aplicação em modo de desenvolvimento, você precisa executar dois comandos em terminais separados:

1. **Inicie o servidor da API** (Terminal 1):
```bash
npm run server
```
A API estará rodando em `http://localhost:3333`

2. **Inicie o servidor de desenvolvimento** (Terminal 2):
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:8080`

### Build para Produção

Para gerar uma versão otimizada para produção:
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Webpack
- `npm run build` - Gera build de produção
- `npm run server` - Inicia o JSON Server na porta 3333

## 📝 Endpoints da API

A API REST disponibiliza os seguintes endpoints:

- `GET /schedules` - Lista todos os agendamentos
- `GET /schedules/:id` - Busca um agendamento específico
- `POST /schedules` - Cria um novo agendamento
- `DELETE /schedules/:id` - Cancela um agendamento

## 🎨 Características

- Interface moderna e responsiva
- Feedback visual de horários disponíveis/ocupados
- Validação de formulários
- Experiência de usuário intuitiva

## 👨‍💻 Desenvolvido por

Wellington Barbosa - Projeto do Curso RocketSeat

## 📄 Licença

Este projeto foi desenvolvido como parte do curso da RocketSeat.

---

Desenvolvido com 💜 por Wellington Wesley
