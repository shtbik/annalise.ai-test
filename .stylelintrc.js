module.exports = {
  extends: ['stylelint-config-rational-order'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    // https://stylelint.io/user-guide/rules/number-leading-zero
    'number-leading-zero': 'always',

    // https://stylelint.io/user-guide/rules/string-quotes
    'string-quotes': 'single',

    // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    'selector-attribute-quotes': 'always',

    // https://stylelint.io/user-guide/rules/selector-combinator-space-after
    'selector-combinator-space-after': 'always',

    // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
    'declaration-block-trailing-semicolon': 'always',

    // https://stylelint.io/user-guide/rules/selector-max-id
    'selector-max-id': 0,

    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
    'selector-list-comma-newline-after': 'always',

    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    'rule-empty-line-before': ['always', { ignore: ['after-comment'] }],

    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    'comment-empty-line-before': ['always', { except: ['first-nested'] }],

    // https://stylelint.io/user-guide/rules/block-opening-brace-space-before
    'block-opening-brace-space-before': 'always',

    // https://stylelint.io/user-guide/rules/declaration-colon-space-after
    'declaration-colon-space-after': 'always',

    // https://stylelint.io/user-guide/rules/declaration-colon-space-before
    'declaration-colon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    'declaration-block-single-line-max-declarations': 1,

    // https://stylelint.io/user-guide/rules/function-url-quotes
    'function-url-quotes': 'always',

    // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
    'declaration-property-value-blacklist': { '/^border/': ['none'] },

    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': ['always', { ignore: ['after-comment'], except: ['first-nested'] }],

    // https://stylelint.io/user-guide/rules/max-nesting-depth
    'max-nesting-depth': 10,

    // https://stylelint.io/user-guide/rules/media-feature-colon-space-after
    'media-feature-colon-space-after': 'always',

    // https://stylelint.io/user-guide/rules/media-feature-colon-space-before
    'media-feature-colon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
    'media-feature-parentheses-space-inside': 'never',

    // https://stylelint.io/user-guide/rules/color-hex-case
    'color-hex-case': 'lower',

    // https://stylelint.io/user-guide/rules/color-hex-length
    'color-hex-length': 'short',

    // https://github.com/hudochenkov/stylelint-order/tree/master/rules/order
    'order/order': [
      [],
      {
        disableFix: true,
      },
    ],

    // rules for styled-components support
    // https://github.com/styled-components/stylelint-config-styled-components

    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    'value-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-no-vendor-prefix': true,

    // https://stylelint.io/user-guide/rules/no-empty-source
    'no-empty-source': null,

    // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
    'no-missing-end-of-source-newline': null,
  },
}
