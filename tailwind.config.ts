/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      borderRadius: {
        20: '20px',
      },
      colors: {
        black: {
          DEFAULT: '#021419',
          100: '#03151A',
          200: '#354052',
          300: '#1D1D1D',
        },
        boxShadow: {
          '3xl': '0px 10px 48px 0px rgba(16, 16, 16, 0.30)',
          md: '0px 0px 40px 0px rgba(202, 162, 67, 0.16)',
        },
        blue: {
          DEFAULT: '#077E94',
          100: '#066b7e',
          200: '#083B49',
          300: '#077E94',
        },
        gray: {
          DEFAULT: '#7C7C7C',
          100: '#F5F9FA',
          200: '#F5F5F5',
          300: '#828F91',
          400: '#F1F2F4',
          500: '#828f91',
          600: '#F0F3F3',
          700: '#E3E8E9',
        },
        yellow: {
          DEFAULT: '#CAA244',
          100: '#9f8037',
        },
      },
      lineHeight: {
        130: '130%',
        140: '140%',
      },
      fontSize: {
        32: '32px',
        40: '40px',
      },
    },
  },
  plugins: [],
}
