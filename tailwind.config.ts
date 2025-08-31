import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['var(--font-neue)'],
        humane: ['var(--font-humane'],
        doner: ['var(--font-doner)'],
        donerdisplay: ['var(--font-donerdisplay']
      },
    },
  },
  plugins: [],
};

export default config;
