/**
 * Enhanced Tailwind Configuration with Taekwondo Club Design System
 * 
 * This configuration extends Tailwind CSS with the complete design system
 * including light and dark mode themes following Korean and Colombian cultural colors.
 * 
 * Usage: Import and extend your tailwind.config.js with these color values
 */

export const designSystemConfig = {
  extend: {
    colors: {
      // Primary Colors - Korean Heritage (Light Mode)
      'taekwondo-red': {
        50: '#FFF5F8',
        100: '#FFE8EF',
        200: '#FFB3CC',
        300: '#FF7FA8',
        400: '#F54A84',
        500: '#DA1F50', // Primary
        600: '#C2183A',
        700: '#A01429',
        800: '#8F0F33', // Active Dark
        900: '#6B0A25',
        950: '#4A0519',
      },
      'taekwondo-blue': {
        50: '#F0F7FF',
        100: '#E1EDFF',
        200: '#BFD9FF',
        300: '#93BFFF',
        400: '#5A99FF',
        500: '#0052CC', // Primary
        600: '#0041B2',
        700: '#003399',
        800: '#002966',
        900: '#001F4D',
        950: '#000D26',
      },

      // Complementary Colors - Colombian Heritage (Light Mode)
      'colombia-yellow': {
        50: '#FFFDF0',
        100: '#FFFAE0',
        200: '#FFF5C2',
        300: '#FFED99',
        400: '#FFE47A',
        500: '#FFD60A', // Primary
        600: '#DFB800',
        700: '#BF9600',
        800: '#997600',
        900: '#664D00',
        950: '#332600',
      },
      'colombia-green': {
        50: '#F2F7F4',
        100: '#E5EEE8',
        200: '#C9DDD0',
        300: '#A8C9B2',
        400: '#7DAF90',
        500: '#2D6A4F', // Primary
        600: '#235843',
        700: '#1A4638',
        800: '#11342D',
        900: '#091E17',
        950: '#050D0B',
      },

      // Neutral Colors
      'neutral-light': {
        0: '#FFFFFF',
        50: '#F8F8F8',
        100: '#E8E8E8',
        300: '#CCCCCC',
        500: '#808080',
        600: '#666666',
        900: '#0D0D0D',
      },
      'neutral-dark': {
        0: '#0D0D0D',
        50: '#1A1A1A',
        100: '#2D2D2D',
        500: '#808080',
        700: '#B0B0B0',
        900: '#F5F5F5',
      },

      // Dark Mode Accent Colors
      'taekwondo-red-dark': {
        400: '#FF4B6E', // Light version
        500: '#FF4B6E', // Primary Dark
        600: '#FF6B89',
      },
      'taekwondo-blue-dark': {
        400: '#4A9EFF',
        500: '#4A9EFF', // Primary Dark
      },
      'colombia-yellow-dark': '#FED66D',
      'colombia-green-dark': '#52B788',
    },

    backgroundColor: {
      // Light Mode Semantics
      'primary-light': '#FFFFFF',
      'secondary-light': '#F8F8F8',
      'tertiary-light': '#E8E8E8',

      // Dark Mode Semantics
      'primary-dark': '#0D0D0D',
      'secondary-dark': '#1A1A1A',
      'tertiary-dark': '#2D2D2D',
    },

    textColor: {
      // Light Mode
      'primary-light': '#0D0D0D',
      'secondary-light': '#808080',
      'inverse-light': '#FFFFFF',

      // Dark Mode
      'primary-dark': '#F5F5F5',
      'secondary-dark': '#B0B0B0',
      'inverse-dark': '#0D0D0D',
    },

    fontSize: {
      'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
      'h2': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
      'h3': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
      'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
      'body-lg': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
      'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      'code': ['13px', { lineHeight: '1.5', fontWeight: '400', fontFamily: 'monospace' }],
    },

    spacing: {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '10': '40px',
      '12': '48px',
      '16': '64px',
      '20': '80px',
      '24': '96px',
    },

    borderRadius: {
      'none': '0',
      'sm': '4px',
      'base': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '20px',
      'full': '9999px',
    },

    boxShadow: {
      'light-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
      'light-md': '0 4px 12px rgba(0, 0, 0, 0.1)',
      'light-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      'light-xl': '0 12px 32px rgba(0, 0, 0, 0.15)',

      'dark-sm': '0 2px 8px rgba(0, 0, 0, 0.3)',
      'dark-md': '0 4px 12px rgba(0, 0, 0, 0.4)',
      'dark-lg': '0 8px 24px rgba(255, 255, 255, 0.05)',
      'dark-xl': '0 12px 32px rgba(255, 255, 255, 0.08)',
    },

    animation: {
      'fade-in': 'fadeIn 300ms ease-in-out',
      'slide-up': 'slideUp 400ms ease-out',
      'pulse-subtle': 'pulseSutle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },

    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(10px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      pulseSutle: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.8' },
      },
    },

    transitionTimingFunction: {
      'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    ringColor: {
      'primary': '#DA1F50',
      'primary-dark': '#FF4B6E',
      'secondary': '#0052CC',
      'secondary-dark': '#4A9EFF',
    },

    borderColor: {
      'light-primary': '#E8E8E8',
      'light-secondary': '#CCCCCC',
      'dark-primary': '#2D2D2D',
      'dark-secondary': '#1A1A1A',
    },
  },

  // Optional: Create custom utilities
  addComponents: {
    '.btn-primary-light': {
      '@apply': 'bg-taekwondo-red-500 text-white px-6 py-3 rounded-base font-semibold hover:bg-taekwondo-red-800 active:bg-taekwondo-red-900 transition-colors duration-200',
    },
    '.btn-primary-dark': {
      '@apply': 'dark:bg-taekwondo-red-dark-500 dark:text-taekwondo-red-dark-900 dark:hover:bg-taekwondo-red-dark-600',
    },
    '.card-light': {
      '@apply': 'bg-white border border-light-primary rounded-md p-6 shadow-light-sm hover:shadow-light-md transition-shadow duration-200',
    },
    '.card-dark': {
      '@apply': 'dark:bg-secondary-dark dark:border-dark-primary dark:shadow-dark-sm dark:hover:shadow-dark-lg',
    },
    '.input-light': {
      '@apply': 'w-full bg-secondary-light dark:bg-secondary-dark border-2 border-light-primary dark:border-dark-primary rounded-base px-4 py-2 text-primary-light dark:text-primary-dark placeholder-gray-500 focus:border-taekwondo-blue-500 dark:focus:border-taekwondo-blue-dark-500 focus:outline-none focus:ring-3 focus:ring-opacity-10',
    },
  },
};

/**
 * QUICK REFERENCE - Class Names
 * 
 * Light Mode:
 * - text-primary-light: Negro principal (#0D0D0D)
 * - bg-white: Blanco puro (#FFFFFF)
 * - bg-secondary-light: Gris claro (#F8F8F8)
 * - border-light-primary: Borde sutil (#E8E8E8)
 * - text-taekwondo-red: Rojo primario (#DA1F50)
 * 
 * Dark Mode:
 * - dark:text-primary-dark: Blanco claro (#F5F5F5)
 * - dark:bg-primary-dark: Negro puro (#0D0D0D)
 * - dark:bg-secondary-dark: Gris oscuro (#1A1A1A)
 * - dark:border-dark-primary: Borde oscuro (#2D2D2D)
 * - dark:text-taekwondo-red-dark: Rojo oscuro (#FF4B6E)
 * 
 * EXAMPLE USAGE:
 * <button class="bg-taekwondo-red-500 dark:bg-taekwondo-red-dark-500 
 *                text-white dark:text-neutral-dark-0 
 *                px-6 py-3 rounded-base 
 *                hover:bg-taekwondo-red-800 dark:hover:bg-taekwondo-red-dark-600
 *                transition-colors duration-200">
 *   Registrarse
 * </button>
 */

export default designSystemConfig;
