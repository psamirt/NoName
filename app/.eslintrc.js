// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				tabWidth: 2,
				trailingComma: "none"
			}
		],
		"react/react-in-jsx-scope": "off"
	}
};
