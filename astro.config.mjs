import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  devToolbar: {
    enabled: false
  },  
  
  base: process.env.NODE_ENV === "production" ? "/novavida-institucional-homologacao" : "/",
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
      cssCodeSplit: false,


      rollupOptions: {
        output: {
 
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name][extname]'; 
            }

            // if (assetInfo.name && assetInfo.name.endsWith('.svg') || assetInfo.name.endsWith('.ttf') || assetInfo.name.endsWith('.woff')) {
            //   return 'assets/font-icons/fonts/[name][extname]'; 
            // }            

            return 'assets/[name][extname]';
          },
        },
      },
    },
  }
});