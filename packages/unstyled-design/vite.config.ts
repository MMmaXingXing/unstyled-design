import path from "path";
import typescript2 from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'design',
      // the proper extensions will be added
      fileName: 'design'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    {
      ...typescript2(),
      apply: "build",
    },
  ],
});
