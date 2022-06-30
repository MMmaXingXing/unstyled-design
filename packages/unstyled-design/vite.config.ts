import typescript2 from "rollup-plugin-typescript2";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
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
    {
      ...typescript2(),
      apply: "build",
    },
  ],
});
