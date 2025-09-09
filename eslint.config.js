// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig, // 👈 disables ESLint rules that conflict with Prettier
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Disable PropTypes if you use TS or not required
      "react/no-unescaped-entities": "off", // Allow ' in JSX

      // React hooks
      "react-hooks/rules-of-hooks": "error", // Check hook usage
      "react-hooks/exhaustive-deps": "warn", // Warn about missing deps

      // React Fast Refresh (Vite/CRA hot reload)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
    },
    settings: {
      react: {
        version: "detect", // Auto-detect React version
      },
    },
  },
];
