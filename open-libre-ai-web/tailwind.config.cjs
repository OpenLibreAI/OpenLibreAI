/** @type {import('tailwindcss').Config}*/
const config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		),
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    extend: {}
  },

  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
    require('flowbite/plugin')
  ]
};

module.exports = config;