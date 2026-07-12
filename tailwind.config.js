/** @type {import('tailwindcss').Config}
 *  Charte TAS — bleu → cyan (logo) + navy. Palette sobre, soft, lisible.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bleu de marque
        blue: {
          50: '#EFF5FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
          400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8', 800: '#1E40AF', 900: '#1E3A8A',
        },
        // Cyan / ciel (extrémité claire du dégradé du logo)
        cyan: { 100: '#CFFAFE', 200: '#A5F3FC', 300: '#67E8F9', 400: '#22D3EE', 500: '#06B6D4', 600: '#0891B2' },
        sky: { 300: '#7DD3FC', 400: '#38BDF8', 500: '#0EA5E9' },
        // Navy du mot « TAS »
        navy: { 700: '#13245A', 800: '#0E1A40', 900: '#0B1437', 950: '#070D24' },
        // Fond bleuté très doux
        mist: '#F4F8FF',
        slate: {
          50: '#F8FAFC', 100: '#F1F5F9', 200: '#E2E8F0', 300: '#CBD5E1',
          400: '#94A3B8', 500: '#64748B', 600: '#475569', 700: '#334155', 800: '#1E293B', 900: '#0F172A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Sora"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(11,20,55,0.06)',
        'medium': '0 14px 44px rgba(11,20,55,0.10)',
        'strong': '0 28px 70px rgba(11,20,55,0.14)',
        'card': '0 1px 2px rgba(11,20,55,0.04), 0 12px 32px rgba(11,20,55,0.06)',
        'glow': '0 18px 45px -14px rgba(37,99,235,0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand': 'linear-gradient(120deg, #1D4ED8 0%, #2563EB 45%, #0EA5E9 100%)',
        'grid': 'radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)',
      },
      backgroundSize: { 'grid': '32px 32px' },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'float': 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s ease-out infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(22px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseRing: { '0%': { transform: 'scale(1)', opacity: '0.7' }, '100%': { transform: 'scale(1.7)', opacity: '0' } },
      },
    },
  },
  plugins: [],
}
