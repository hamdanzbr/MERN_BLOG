module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // Add this line to include Flowbite-React's files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin') // Add this line to include Flowbite plugin
  ],
  daisyui: {
    themes: ["light"], // Set light as the first theme, making it the default
  },
}
