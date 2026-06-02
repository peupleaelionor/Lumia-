import type { Config } from 'tailwindcss';

/**
 * Système de design LUMIA.
 * Palette : crème chaud, sable, beige doux, vert sauge, terracotta douce,
 * bois clair, doré discret, blanc ivoire, brun naturel.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF6EC',
          50: '#FEFCF7',
          100: '#FBF6EC',
          200: '#F5ECDB',
        },
        ivory: '#FFFDF8',
        sand: {
          DEFAULT: '#E9DCC4',
          light: '#F1E8D6',
          dark: '#D9C7A8',
        },
        beige: '#EFE6D6',
        sage: {
          DEFAULT: '#8FA084',
          light: '#AEBCA2',
          dark: '#6F7E64',
        },
        terracotta: {
          DEFAULT: '#C68A6E',
          light: '#D9A88F',
          dark: '#A96F54',
        },
        wood: {
          DEFAULT: '#C9A876',
          light: '#DBC09A',
          dark: '#A8895C',
        },
        gold: {
          DEFAULT: '#BE9A4E',
          light: '#D2B673',
        },
        brown: {
          DEFAULT: '#5B4A39',
          light: '#7A6650',
          dark: '#3E3225',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        arch: '50% 50% 0 0 / 28% 28% 0 0',
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(91, 74, 57, 0.22)',
        'soft-lg': '0 24px 70px -28px rgba(91, 74, 57, 0.30)',
        warm: '0 8px 30px -12px rgba(198, 138, 110, 0.35)',
      },
      backgroundImage: {
        'starry':
          'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.9), transparent), radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.7), transparent), radial-gradient(1.5px 1.5px at 80% 60%, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 75% 80%, rgba(255,255,255,0.7), transparent)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'soft-float': 'soft-float 6s ease-in-out infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
