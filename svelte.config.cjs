const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: require('@sveltejs/adapter-static')(),
    target: '#svelte',
  },
};
