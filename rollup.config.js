import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import { terser } from "rollup-plugin-terser";
export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
    {
      file: packageJson.browser,
      format: "umd",
      name: "IsXTime",
      noConflict: true,
      banner: ";",
    },
  ],
  plugins: [commonjs(), typescript(), terser()],
};
