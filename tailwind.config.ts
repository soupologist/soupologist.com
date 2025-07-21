import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['var(--font-neue)'],
        humane: ['var(--font-humane'],
      },
    },
  },
  plugins: [],
};

export default config;
