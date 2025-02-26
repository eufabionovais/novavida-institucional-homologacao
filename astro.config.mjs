import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  devToolbar: {
    enabled: false
  },  
  
  base: process.env.NODE_ENV === "production" ? "novavida-institucional" : "",
  compressHTML: false,
  output: "static",

  build: {
    format: "file",
    assets: "assets",
    inlineStylesheets: "never"
  },

  style: {
    scss: {
      includePaths: ["src/css"]
    }
  },  

  vite: {
    build: {
      cssMinify: false,
      rollupOptions: {
        output: {
          // Custom naming for CSS files
          assetFileNames: (assetInfo) => {
            console.log(assetInfo)
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name][extname]'; 
            }

            return 'assets/[name][extname]';
          },
        },
      },
    },
  }
});