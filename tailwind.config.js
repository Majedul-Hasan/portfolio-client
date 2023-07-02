const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
});
