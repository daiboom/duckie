module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: false,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'es5',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				singleline: 'never',
				multiline: 'always',
				bracketSameLine: false,
				endOfLine: 'auto',
			},
		],
	},
}
