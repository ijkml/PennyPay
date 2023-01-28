import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      // link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      link: [{ rel: 'icon', type: 'image/png', href: '/nuxt.png' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [{ name: 'description', content: 'Vitesse Nuxt Starter (mod)' }],
    },
  },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    // '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    // '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    'vite-plugin-vue-type-imports/nuxt',
  ],
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader({
        defaultImport: 'url',
      }),
    ],
  },
  css: ['@unocss/reset/tailwind.css'],
  colorMode: {
    classSuffix: '',
  },
});
