import globals from 'globals'

import path from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended })

export default [
    {
        languageOptions: { globals: globals.browser },
        rules: {
            'no-unused-vars': 'error',
            'no-undef': 'error',
            'no-await-in-loop': 'error',
            quotes: ['warn', 'single'],
            'no-extra-semi': ['warn']
        },
        env: {
            'jest/globals': true,
            browser: true,
            es2021: true
        },
        plugins: ['jest'],
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },
    ...compat.extends('standard')
]
