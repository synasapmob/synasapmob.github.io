import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      react(),

      nodePolyfills({
        globals: {
          Buffer: true, // that'll avaliable Buffer from browser
          global: true,
          process: true,
        },
      }),

      // import SVG as component
      svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: {},

        // esbuild options, to transform jsx to js
        esbuildOptions: {
          minify: true,
        },

        // A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include.
        include: "**/*.svg",

        //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
        exclude: "**/*.svg?*url*",
      }),
    ],

    base: "/synasapmob.github.io",
  });
};
