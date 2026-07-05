/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // One Song Foundation brand palette (Recover One Song Design System)
        green: {
          50: '#eef6f2',
          100: '#e1efe9',
          200: '#c7e0d6',
          300: '#9cc6b8',
          400: '#6aa996',
          500: '#358a74',
          600: '#2a7160',
          700: '#1f5c4d',
          800: '#1a5444',
          900: '#14463a',
          950: '#0e2f27',
        },
        amber: {
          50: '#fdf6e9',
          100: '#fbecd2',
          200: '#f6d7a6',
          300: '#f1c178',
          400: '#eaa948',
          500: '#e0922e',
          600: '#c4781f',
          700: '#b06a18',
          900: '#7a4612',
        },
        sand: {
          50: '#faf6ee',
          100: '#f4ecdd',
          200: '#e9ddc7',
          300: '#dcceb2',
        },
        ink: {
          300: '#aab0a5',
          400: '#8b9187',
          500: '#6b7268',
          600: '#4c534a',
          700: '#353b33',
          800: '#20241f',
          900: '#1a1f1b',
        },
        card: '#fffdf8',
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'os-lg': '18px',
        'os-xl': '26px',
        'os-2xl': '36px',
      },
      boxShadow: {
        'os-sm': '0 2px 6px rgba(26, 31, 27, 0.07), 0 1px 2px rgba(26, 31, 27, 0.05)',
        'os-md': '0 6px 18px rgba(26, 31, 27, 0.09), 0 2px 5px rgba(26, 31, 27, 0.05)',
        'os-lg': '0 16px 40px rgba(26, 31, 27, 0.12), 0 4px 10px rgba(26, 31, 27, 0.06)',
      },
    },
  },
  plugins: [],
}
