/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './blog.html', './article.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7C3AED',
          purpleLight: '#A78BFA',
          blue: '#2563EB',
          blueLight: '#60A5FA',
          dark: '#0D0D1A',
          card: '#13132B',
          border: '#1E1E3F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 60% 0%, rgba(124,58,237,0.25) 0%, rgba(37,99,235,0.10) 50%, transparent 80%)',
        'card-gradient': 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(37,99,235,0.08) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)',
      }
    }
  },
  plugins: [],
}
