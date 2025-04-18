import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '17': 'repeat(17, minmax(0,1fr))',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-150-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      alignContent: {
        'space-around': 'space-around',
      },
      animation: {
        boundUpDown: 'boundUpDown 0.5s ease-in-out',
      },
      keyframes: {
        boundUpDown: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-3px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      colors: {
        background: 'rgba(var(--background))',
        backgroundOne: 'rgba(var(--backgroundOne))',
        backgroundTwo: 'rgba(var(--backgroundTwo))',
        ['backgroundTap-1']: 'rgba(var(--backgroundTap-1))',
        btnHoverBackground: 'rgba(var(--btnHoverBackground))',
        fontColor: 'rgba(var(--fontColor))',
        gnbBackground: 'rgba(var(--gnbBackground))',
        borderColor: 'rgba(var(--borderColor))',
        borderColorOne: 'rgba(var(--borderColorOne))',
        toggleBackground: 'rgba(var(--toggleBackground))',
        deleteFontColor: 'rgba(var(--deleteFontColor))',
        selectedOrHoverColor: 'rgba(var(--selectedOrHoverColor))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      translate: {
        '-1/2': '-50%',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
