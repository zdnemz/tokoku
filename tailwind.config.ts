import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1e88e5',
          dark: '#bb86fc',
        },
        secondary: {
          light: '#ffc107',
          dark: '#03dac6',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#212121',
          dark: '#e0e0e0',
        },
        accent: {
          light: '#d32f2f',
          dark: '#cf6679',
        },
        border: {
          light: '#e0e0e0',
          dark: '#2c2c2c',
        },
        skeleton: {
          light: '#e0e0e0',
          dark: '#2c2c2c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
