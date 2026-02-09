# 📊 Sales Dashboard - DNC

Este é um projeto de Dashboard de Vendas de alto nível, desenvolvido com React 19, TypeScript e Vite. A aplicação foca na visualização de dados complexos através de gráficos interativos, gerenciamento de estado global com Redux e uma arquitetura robusta preparada para testes automatizados.

---

## 🛠️ Tecnologias e Ferramentas

### Core do Front-end

- React 19 & TypeScript: Interface moderna com tipagem estática para maior segurança.
- Vite: Ferramenta de build de última geração para performance máxima.
- React Router Dom 7: Sistema de rotas dinâmicas e proteção de páginas.

### Estado e Dados

- Redux Toolkit: Gerenciamento centralizado do estado da aplicação.
- Axios: Integração e consumo de APIs REST.
- JWT Decode & JS-Cookie: Controle de autenticação, decodificação de tokens e persistência.

### Interface e Gráficos

- Chart.js & React-Chartjs-2: Renderização de gráficos de performance (Barras, Pizza, Linhas).
- Material UI (MUI) & Styled Components: Estilização baseada em componentes e Design System profissional.

---

## 🚀 Guia de Comandos

Abaixo estão todos os comandos necessários para instalar, rodar e testar o projeto localmente:

### 1. Preparação Inicial

Para instalar todas as dependências necessárias listadas no package.json, utilize o comando: npm install

### 2. Execução (Ambiente de Desenvolvimento)

Para iniciar o servidor local com Hot Module Replacement (HMR), utilize o comando: npm run dev

### 3. Qualidade de Código (Lint & Formatação)

Para garantir que o código siga os padrões de escrita e evitar erros comuns:
Para verificar erros de Lint, utilize: npm run lint
Para formatar automaticamente os arquivos com Prettier, utilize: npm run format

### 4. Testes Automatizados

O projeto conta com uma suíte completa de testes (Unitários e E2E):
Para Jest (Unitários) e relatório de cobertura, utilize: npm run test
Para Cypress (E2E) via interface, utilize: npm run cypress:open
Para Cypress (E2E) via terminal, utilize: npm run cypress:run

### 5. Build e Produção

Para gerar a versão final otimizada para hospedagem (Vercel/Netlify), utilize o comando: npm run build

---

## 📝 Observações Importantes

### Sobre a API

O projeto foi desenvolvido para integrar-se a uma API educacional da Escola DNC. Se a API estiver offline, a aplicação ainda serve como uma demonstração sólida de Engenharia de Front-end, evidenciando o tratamento de estados de carregamento (Loading) e erro, a lógica de tratamento de dados para componentes visuais e o fluxo de segurança e login.

### Automação com Husky

Este repositório utiliza Husky para hooks de commit, garantindo que os testes e o lint sejam verificados automaticamente antes de qualquer envio de código, mantendo a estabilidade do projeto.

---

## 👤 Autor

Desenvolvido por Reinaldo M. Ferreira (Rmfera).
