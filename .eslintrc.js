module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'arrow-spacing': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'camelcase': [2, {'properties': 'always'}],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'complexity': [2, 10],
    'consistent-this': [0, 'self'],
    'curly': [2, 'multi-line'],
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'func-style': [2, 'expression'],
    'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 2}],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    'linebreak-style': [2, 'unix'],
    'no-alert': 2,
    'no-console': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-inner-declarations': [2, 'both'],
    'no-irregular-whitespace': 2,
    'no-magic-numbers': [2, {'enforceConst': true, ignore: [-1, 0, 1, 2, 100]}],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {'max': 1}],
    'no-nested-ternary': 2,
    'no-obj-calls': 2,
    'no-sparse-arrays': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': [2, {'args': 'all', 'argsIgnorePattern': '^_', 'vars': 'all', 'varsIgnorePattern': '^_'}],
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-var': 2,
    'no-void': 2,
    'object-curly-spacing': [2, 'never'],
    'object-shorthand': 2,
    'operator-linebreak': [2, 'before'],
    'padded-blocks': 0,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-template': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'quote-props': [2, 'as-needed'],
    'radix': 2,
    'semi': [2, 'always'],
    'semi-spacing': [2, {'before': false, 'after': true}],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': 0,
    'space-in-brackets': 0,
    'space-infix-ops': 2,
    'spaced-comment': 2,
    'strict': 0,
    'wrap-iife': [2, 'inside']
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
