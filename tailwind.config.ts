import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'icon': '5px 5px 10px rgba(0, 0, 0, 0.6)',
        'header': '0px 4px 10px rgba(0, 0, 0, .3)',
        'footer': '0px -4px 10px rgba(0, 0, 0, .3)',
      }
    },
  },
  plugins: [],
}
export default config
