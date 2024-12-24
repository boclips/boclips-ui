/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'boclips-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `boclips-ui.${format === 'es' ? '' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    target: 'es2020',
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'lib') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'lib/components'),
      },
      { find: '@styles', replacement: resolve(__dirname, 'lib/styles') },
      { find: '@hooks', replacement: resolve(__dirname, 'lib/hooks') },
    ],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
  },
  plugins: [
    react(),
    dts({
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      tsconfigPath: './tsconfig.app.json',
      // Uncomment when dts() supports TypeScript 5.6.3: https://github.com/qmhc/vite-plugin-dts/issues/395
      // rollupTypes: true,
    }),
    svgr(),
    viteStaticCopy({
      targets: [
        { src: resolve(__dirname, 'lib/styles/*.less'), dest: 'styles' }
      ]
    }),
  ],
  test: {
    include: ['**/*.test.tsx'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
