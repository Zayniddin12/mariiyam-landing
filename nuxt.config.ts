export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'uz',
      },
      title: 'Mariyam Academy',
      description:
        'O’zingizga qulay vaqtda va joylarda o’rganing. Kurslar, vebinarlar va testlarga to’g’ridan-to’g’ri mobil qurilmangizdan kirish imkoniga ega bo’ling. Hurmatli kitobxonlar! Har birimiz shaxsiy o’sish va rivojlanish uchun ulkan salohiyatga egamiz. O’zingizga ishonish va maqsadlaringiz sari qadam tashlashdan qo’rqmaslik muhimdir. Mening kurslarim sizning potentsialingizni ochish va ichki to’siqlarni engib o’tishga yordam berish uchun mo’ljallangan.',
      meta: [
        {
          name: 'description',
          content:
            'O’zingizga qulay vaqtda va joylarda o’rganing. Kurslar, vebinarlar va testlarga to’g’ridan-to’g’ri mobil qurilmangizdan kirish imkoniga ega bo’ling.\n' +
            'Hurmatli kitobxonlar! Har birimiz shaxsiy o’sish va rivojlanish uchun ulkan salohiyatga egamiz. O’zingizga ishonish va maqsadlaringiz sari qadam tashlashdan qo’rqmaslik muhimdir. Mening kurslarim sizning potentsialingizni ochish va ichki to’siqlarni engib o’tishga yordam berish uchun mo’ljallangan.',
        },
        {
          property: 'og:title',
          content: 'Mariyam Academy',
        },
        {
          property: 'og:description',
          content:
            'O’zingizga qulay vaqtda va joylarda o’rganing. Kurslar, vebinarlar va testlarga to’g’ridan-to’g’ri mobil qurilmangizdan kirish imkoniga ega bo’ling.\n' +
            'Hurmatli kitobxonlar! Har birimiz shaxsiy o’sish va rivojlanish uchun ulkan salohiyatga egamiz. O’zingizga ishonish va maqsadlaringiz sari qadam tashlashdan qo’rqmaslik muhimdir. Mening kurslarim sizning potentsialingizni ochish va ichki to’siqlarni engib o’tishga yordam berish uchun mo’ljallangan.',
        },
        {
          property: 'og:image',
          content: '/favicon.svg',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `/favicon.svg`,
        },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
      ],
    },
  },

  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/main.css',
    '~/assets/icomoon/style.css',
    '~/assets/styles/_toastification.css',
    'aos/dist/aos.css', // AOS CSS faylini qo'shish
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-marquee',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
  ],

  plugins: [{ src: '~/plugins/aos.client.js', mode: 'client' }], // AOS pluginini qo'shish

  i18n: {
    langDir: 'locales',
    baseUrl: 'https://marjon.uz/',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru',
        name: 'Русский',
      },
      {
        code: 'uz',
        iso: 'uz-uz',
        file: 'uz',
        name: "O'zbekcha",
      },
      {
        code: 'en',
        iso: 'en-en',
        file: 'en',
        name: 'England',
      },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'i18n_redirected',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'uz',
      cookieCrossOrigin: true,
    },
    defaultLocale: 'uz',
    strategy: 'prefix',
  },

  nitro: {
    serveStatic: true,
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },

  devServer: {
    port: 3000,
  },

  compatibilityDate: '2024-07-03',
  build: {
    transpile: ['vue-toastification'],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
