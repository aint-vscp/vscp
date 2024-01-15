import type { Config } from 'tailwindcss'

let fallbackFonts = ['Arial', 'Helvetica', 'sans-serif'];

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--foreground-hex)",
        "secondary-color": "var(--background-hex)",
        "sub-color": "var(--sub-hex)",
        "text-color-1": "var(--text-1-hex)",
        "text-color-2": "var(--text-2-hex)",
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      fontFamily: {
        'baybayin': ['Baybayin', ...fallbackFonts],
        'league': ['LeagueSpartan', ...fallbackFonts],
        'playlist': ['Playlist', ...fallbackFonts],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'transparent': 'transparent'
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px gray',
          'text-stroke': '1px gray',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

export default config