import type { Config } from 'tailwindcss'

export default <Config>{
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        xp: {
          blue: '#0a246a',
          light: '#3a68c7',
          gray: '#d4d0c8',
          taskbar: '#003399',
          start: '#4f8a10',
        },
      },
      boxShadow: {
        xp: '0 0 3px rgba(0,0,0,0.8)',
      },
      /* puedes borrar fontFamily.xp si ya no lo usarás */
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
