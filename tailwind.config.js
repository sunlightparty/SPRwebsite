/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'text-green-600',
    'text-green-700',
    'text-green-800',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-red-600',
    'text-red-700',
    'text-red-800',
    'text-gray-800',
    'text-zinc-600',
    'text-zinc-700',
    'text-zinc-800',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}