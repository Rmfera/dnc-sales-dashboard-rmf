module.exports = {
  env: {
    browser: true,             // Definir como ambiente do navegador
    'cypress/globals': true,   // Permitir o uso das variáveis globais do Cypress (como 'cy')
  },
  extends: [
    'eslint:recommended',      // Regras recomendadas do ESLint
    'plugin:cypress/recommended',  // Regras recomendadas para Cypress
  ],
  plugins: ['cypress'],       // Adicionar o plugin do Cypress
  overrides: [
    {
      files: ['**/*.cy.{js,ts,jsx,tsx}'],  // Aplica a configuração a arquivos com essas extensões
      env: {
        'cypress/globals': true, // Habilitar as variáveis globais do Cypress nesses arquivos
      },
      rules: {
        'no-undef': 'off',  // Desativar a regra 'no-undef' nesses arquivos
      },
    },
  ],
  rules: {
    // Outras regras personalizadas
  },
};
