import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(() => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        assets: path.resolve("src/assets/"),
        styles: path.resolve("src/styles/"),
        data: path.resolve("src/data/"),
        lib: path.resolve("src/lib/"),
        store: path.resolve("src/store/"),
        components: path.resolve("src/components/"),
        contexts: path.resolve("src/contexts/"),
        layouts: path.resolve("src/layouts/"),
        routes: path.resolve("src/routes/"),
        services: path.resolve("src/services/"),
        utils: path.resolve("src/utils/"),
        variables: path.resolve("src/variables/"),
        views: path.resolve("src/views/"),
        // "~": path.resolve("src"),
      },
    },
    server: { port: 3000, strictPort: true },
    plugins: [react()],
  };
});
