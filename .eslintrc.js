module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: ['plugin:github/recommended'], 
    overrides: [
      {
        env: {
          node: true
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script'
        }
      }
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['github'], 
    rules: {}
  };