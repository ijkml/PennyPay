import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';
import {} from 'nuxt-umami';

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        {
          name: 'description',
          content: 'Accept payments globally with no structural lock-in.',
        },
      ],
    },
  },
  alias: {
    '@img': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@icons': fileURLToPath(new URL('./assets/icons', import.meta.url)),
    '@data': fileURLToPath(new URL('./assets/data', import.meta.url)),
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    'vite-plugin-vue-type-imports/nuxt',
    'nuxt-umami',
  ],
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
  },
  routeRules: {
    // Set custom (efficient) cache policy
    '/_nuxt/**': {
      headers: {
        'cache-control': 'max-age=31536000, s-maxage=31536000',
      },
    },
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
  css: ['@unocss/reset/tailwind.css', '@/assets/styles/root.scss'],
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
    preference: 'dark',
  },
  umami: {
    scriptUrl: 'https://ml-umami.netlify.app/umami.js',
    websiteId: 'dead95c9-f13c-4728-a825-ac1eb173ed97',
    domains: 'pennypay.netlify.app',
    autoTrack: false,
  },
});
