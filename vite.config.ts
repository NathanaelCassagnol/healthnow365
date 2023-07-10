import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

type ViteConfigInput = {
  mode: string;
  command: string;
};

// https://vitejs.dev/config/
export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:6]' : '[local]_[hash:base64:6]';

  return defineConfig({
    plugins: [react(), tsconfigPaths(), envCompatible()],
    build: {
      outDir: 'build',
      chunkSizeWarningLimit: 4000,
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      },
    },
  });
};
