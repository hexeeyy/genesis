// tailwind.config.ts
import type { Config } from 'tailwindcss';
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        // Keep legacy font names for existing components
        poppins: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary-navy))',
          navy: 'hsl(var(--primary-navy))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-blue))',
          blue: 'hsl(var(--secondary-blue))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-blue))',
          blue: 'hsl(var(--accent-blue))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        highlight: {
          DEFAULT: 'hsl(var(--highlight-yellow))',
          yellow: 'hsl(var(--highlight-yellow))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Updated palette colors
        'deep-navy': 'hsl(var(--deep-navy))',
        'rich-blue': 'hsl(var(--rich-blue))',
        'sky-blue': 'hsl(var(--sky-blue))',
        'warm-cream': 'hsl(var(--warm-cream))',
        'antique-gold': 'hsl(var(--antique-gold))',
        'pearl-white': 'hsl(var(--pearl-white))',
        // Legacy color mappings for existing components
        ocean: 'hsl(var(--ocean))',
        sage: 'hsl(var(--sage))',
        'soft-blue': 'hsl(var(--soft-blue))',
        cream: 'hsl(var(--cream))',
        'victorian-gold': 'hsl(var(--victorian-gold))',
        'victorian-navy': 'hsl(var(--victorian-navy))',
        'victorian-cream': 'hsl(var(--victorian-cream))',
        'victorian-dusty-blue': 'hsl(var(--victorian-dusty-blue))',
      },
      boxShadow: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        victorian: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)', // Added from components
        strong: '0 10px 20px rgba(0, 0, 0, 0.5)', // Added from components
        soft: '0 2px 10px rgba(0, 0, 0, 0.2)', // Added from components
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        organic: '60% 40% 30% 70% / 60% 30% 70% 40%',
        'organic-2': '30% 70% 70% 30% / 30% 30% 70% 70%'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-left': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(1deg)' },
          '50%': { transform: 'translateY(-4px) rotate(0deg)' },
          '75%': { transform: 'translateY(-12px) rotate(-1deg)' }
        },
        'drift': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -10px) rotate(2deg)' },
          '66%': { transform: 'translate(-5px, 5px) rotate(-1deg)' }
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(88, 160, 200, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(88, 160, 200, 0.6)' }
        },
        // Added animations from components
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' }
        },
        'soft-drift': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(5px, 5px) rotate(-2deg)' }
        },
        'subtle-breathe': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' }
        },
        'victorian-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-left': 'slide-left 0.8s ease-out',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        // Added animations from components
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'soft-drift': 'drift 8s ease-in-out infinite',
        'subtle-breathe': 'breathe 5s ease-in-out infinite',
        'victorian-shimmer': 'shimmer 3s linear infinite',
      },
	  transitionDuration: {
		'600': '600ms',
		'800': '800ms',
		},
		transitionTimingFunction: {
		'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		'in-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
		}
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
