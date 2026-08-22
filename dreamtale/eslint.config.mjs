import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
  {
    rules: {
      // Karty používají vlastní preload (lib/images/preload.ts) a lokální assety,
      // optimalizační pipeline next/image by tu nic nepřinesla.
      '@next/next/no-img-element': 'off',
    },
  },
];

export default eslintConfig;
