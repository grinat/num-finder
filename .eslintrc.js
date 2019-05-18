module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module'
  },
  rules: {
    'no-console': 'off',
    'quotes': [0]
  }
}
