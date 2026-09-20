import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactRouter(), svgr()],
});
