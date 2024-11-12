import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'

const neoConfig = neostandard({
  ignores: resolveIgnoresFromGitignore(),
  noStyle: true
})

/** @type {import("eslint").Linter.Config} */
export default [
  ...neoConfig,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier
]
