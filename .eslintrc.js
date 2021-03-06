module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    __BUNDLE_START_TIME__: false,
    __DEV__: true,
    __dirname: false,
    __filename: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    escape: false,
    exports: false,
    fetch: false,
    global: false,
    jest: false,
    pit: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: false,
    requestAnimationFrame: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    window: false,
    FormData: true,
    XMLHttpRequest: false,

    // Flow "known-globals" annotations:
    ReactElement: false,
    ReactClass: false,
    Class: false,
    $Shape: false,
    $Keys: false,
    $PropertyType: false,
    $Enum: false,
  },
  env: {
    es6: true,
    node: true,
    jasmine: true,
  },
  plugins: ['react', 'graphql', 'flowtype', 'import', 'json'],
  rules: {
    strict: 0,
    indent: [1, 2, { SwitchCase: 1 }],
    quotes: [1, 'single', { avoidEscape: true }],
    'linebreak-style': [2, 'unix'],
    semi: [1, 'always'],
    eqeqeq: 2,
    curly: 2,
    'prefer-arrow-callback': 0,
    'arrow-spacing': 1,
    'no-console': 0,
    'comma-dangle': [1, 'always-multiline'],
    radix: 1,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^ignore',
        vars: 'all',
        args: 'none',
      },
    ],
    'no-redeclare': 2,
    'no-trailing-spaces': 2,
    'keyword-spacing': [1, { before: true, after: true }],
    'space-before-blocks': [1, 'always'],
    'brace-style': [1, '1tbs'],
    'no-undef': 2,

    'graphql/template-strings': ['error', {
      // Import default settings for your GraphQL client. Supported values:
      // 'apollo', 'relay', 'lokka', 'literal'
      env: 'apollo',

      // no need to specify schema here, it will be automatically determined using .graphqlconfig

      validators: [
        'ExecutableDefinitions',
        'FieldsOnCorrectType',
        'FragmentsOnCompositeTypes',
        'KnownArgumentNames',
        // 'KnownDirectives',
        // 'KnownFragmentNames', // (disabled by default in all envs)
        'KnownTypeNames',
        'LoneAnonymousOperation',
        'NoFragmentCycles',
        'NoUndefinedVariables',
        // 'NoUnusedFragments', // (disabled by default in all envs)
        'NoUnusedVariables',
        'OverlappingFieldsCanBeMerged',
        'PossibleFragmentSpreads',
        'ProvidedNonNullArguments',
        'ScalarLeafs',
        'SingleFieldSubscriptions',
        'UniqueArgumentNames',
        'UniqueDirectivesPerLocation',
        'UniqueFragmentNames',
        'UniqueInputFieldNames',
        'UniqueOperationNames',
        'UniqueVariableNames',
        'ValuesOfCorrectType',
        'VariablesAreInputTypes',
        'VariablesDefaultValueAllowed',
        'VariablesInAllowedPosition',
      ]
    }],
    'graphql/no-deprecated-fields': [
      'warn',
      {
        env: 'apollo',
      },
    ],
    'graphql/named-operations': ['warn', {
      env: 'apollo',
    }],
    'graphql/capitalized-type-name': ['warn', {
      env: 'apollo',
    }],

    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': [
      1,
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned',
      },
    ],
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': [1, 2],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'jsx-quotes': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 1,

    // Imports
    'import/extensions': 0,

    // Flow
    'flowtype/define-flow-type': 2,

    'no-cond-assign': 1, // disallow assignment in conditional expressions
    'no-constant-condition': 0, // disallow use of constant expressions in conditions
    'no-control-regex': 1, // disallow control characters in regular expressions
    'no-debugger': 1, // disallow use of debugger
    'no-dupe-keys': 2, // disallow duplicate keys when creating object literals
    'no-empty': 0, // disallow empty statements
    'no-empty-character-class': 1, // disallow the use of empty character classes in regular expressions
    'no-ex-assign': 1, // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 1, // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0, // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 1, // disallow unnecessary semicolons
    'no-func-assign': 0, // disallow overwriting functions written as function declarations
    'no-inner-declarations': 0, // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 1, // disallow invalid regular expression strings in the RegExp constructor
    'no-negated-in-lhs': 1, // disallow negation of the left operand of an in expression
    'no-obj-calls': 1, // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 1, // disallow multiple spaces in a regular expression literal
    'no-reserved-keys': 0, // disallow reserved words being used as object literal keys (off by default)
    'no-sparse-arrays': 1, // disallow sparse arrays
    'no-unreachable': 2, // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': 1, // disallow comparisons with the value NaN
    'valid-jsdoc': 0, // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 1, // Ensure that the results of typeof are compared against a valid string

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

    'block-scoped-var': 0, // treat var statements as if they were block scoped (off by default)
    complexity: 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': 0, // require return statements to either always or never specify values
    'default-case': 0, // require default case in switch statements (off by default)
    'dot-notation': 0, // encourages use of dot notation whenever possible
    'guard-for-in': 0, // make sure for-in loops have an if statement (off by default)
    'no-alert': 0, // disallow the use of alert, confirm, and prompt
    'no-caller': 1, // disallow use of arguments.caller or arguments.callee
    'no-div-regex': 1, // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 0, // disallow else after a return in an if (off by default)
    'no-eq-null': 0, // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 1, // disallow use of eval()
    'no-extend-native': 1, // disallow adding to native types
    'no-extra-bind': 1, // disallow unnecessary function binding
    'no-fallthrough': 1, // disallow fallthrough of case statements
    'no-floating-decimal': 1, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implied-eval': 1, // disallow use of eval()-like methods
    'no-labels': 1, // disallow use of labeled statements
    'no-iterator': 1, // disallow usage of __iterator__ property
    'no-lone-blocks': 1, // disallow unnecessary nested blocks
    'no-loop-func': 0, // disallow creation of functions within loops
    'no-multi-str': 0, // disallow use of multiline strings
    'no-native-reassign': 0, // disallow reassignments of native objects
    'no-new': 1, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 1, // disallow use of new operator for Function object
    'no-new-wrappers': 1, // disallows creating new instances of String,Number, and Boolean
    'no-octal': 1, // disallow use of octal literals
    'no-octal-escape': 1, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-param-reassign': 2, // disallow reassigning function parameters
    'no-proto': 1, // disallow usage of __proto__ property
    'no-return-assign': 1, // disallow use of assignment in return statement
    'no-script-url': 1, // disallow use of javascript: urls.
    'no-self-compare': 1, // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 1, // disallow use of comma operator
    'no-unused-expressions': 0, // disallow usage of expressions in statement position
    'no-void': 1, // disallow use of void operator (off by default)
    'no-warning-comments': 0, // disallow usage of configurable warning terms in comments": 1,                        // e.g. TODO or FIXME (off by default)
    'no-with': 1, // disallow use of the with statement
    'semi-spacing': 1, // require a space after a semi-colon
    'vars-on-top': 0, // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': 0, // require immediate function invocation to be wrapped in parentheses (off by default)
    yoda: 1, // require or disallow Yoda conditions

    // Variables
    // These rules have to do with variable declarations.

    'no-catch-shadow': 1, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': 1, // disallow deletion of variables
    'no-label-var': 1, // disallow labels that share a name with a variable
    'no-shadow': 1, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 1, // disallow shadowing of names such as arguments
    'no-undefined': 0, // disallow use of undefined variable (off by default)
    'no-undef-init': 1, // disallow use of undefined when initializing variables
    'no-use-before-define': 0, // disallow use of variables before they are defined

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    'handle-callback-err': [1, '^.*(e|E)rr'], // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'no-mixed-requires': 1, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-new-require': 1, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-path-concat': 1, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-process-exit': 0, // disallow process.exit() (on by default in the node environment)
    'no-restricted-modules': 1, // restrict usage of specified node modules (off by default)
    'no-sync': 0, // disallow use of synchronous methods (off by default)

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    'key-spacing': 0,
    'comma-spacing': 0,
    'no-multi-spaces': 0,
    camelcase: 0, // require camel case names
    'consistent-this': 1, // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 0, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    'new-cap': 0, // require a capital letter for constructors
    'new-parens': 1, // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
    'no-array-constructor': 1, // disallow use of the Array constructor
    'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
    'no-new-object': 1, // disallow use of the Object constructor
    'no-spaced-func': 1, // disallow space between function identifier and application
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
    'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation
    'quote-props': 0, // require quotes around object literal property names (off by default)
    'sort-vars': 0, // sort variables within the same declaration block (off by default)
    'space-in-brackets': 0, // require or disallow spaces inside brackets (off by default)
    'space-in-parens': 0, // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 0, // require spaces around operators
    'space-unary-ops': [1, { words: true, nonwords: false }], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'max-nested-callbacks': 0, // specify the maximum depth callbacks can be nested (off by default)
    'one-var': 0, // allow just one var statement per function (off by default)
    'wrap-regex': 0, // require regex literals to be wrapped in parentheses (off by default)
  },
};
