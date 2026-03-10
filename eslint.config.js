import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "tests/playwright/tests-examples"],
  },
  {
    extends: [...tseslint.configs.recommendedTypeChecked],

    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      // (allow export default none name)
      "react/display-name": "off",

      // (allow spread with any type [...Array(10)])
      "@typescript-eslint/no-unsafe-assignment": "off",

      // (allow return arrow function void)
      "@typescript-eslint/no-confusing-void-expression": "off",

      // (allow comparision is always true "true" ===  "true")
      "@typescript-eslint/no-unnecessary-condition": "off",

      // (allow number template `My age is: ${age}`)
      "@typescript-eslint/restrict-template-expressions": "off",

      // (allow magic number <Component age={18} />)
      "@typescript-eslint/no-magic-numbers": "off",

      // (allow use any type)
      "@typescript-eslint/no-explicit-any": "off",

      // (allow reject with any type)
      "@typescript-eslint/prefer-promise-reject-errors": "off",

      // (allow user throw anytime, don't need new Error())
      "@typescript-eslint/only-throw-error": "off",

      // (allow export default function)
      "import/no-anonymous-default-export": "off",

      // (allow unsafe function, ts not sure )
      "@typescript-eslint/no-unsafe-call": "off",

      // (allow unsafe access, TS not sure 100% the object return this type) https://github.com/typescript-eslint/typescript-eslint/issues/2728#issuecomment-720777459
      "@typescript-eslint/no-unsafe-member-access": "off",

      // (allow no need Promise return)
      "@typescript-eslint/no-misused-promises": "off",

      // (allow use any type)
      "@typescript-eslint/no-redundant-type-constituents": "off",

      // (allow use unsafe-argument, but remember declare fully type please.)
      "@typescript-eslint/no-unsafe-argument": "off",

      // (allow use type any when return)
      "@typescript-eslint/no-unsafe-return": "off",
    },
  },
  // Test-specific configuration
  {
    files: ["tests/**/*.{ts,tsx}"],
    rules: {
      // Disable unbound-method for test files as Vitest mocks don't use 'this'
      "@typescript-eslint/unbound-method": "off",
      // Allow no-await in async functions for test setup/teardown
      "@typescript-eslint/require-await": "off",
    },
  },
);
