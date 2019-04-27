import App from './index.svelte';
// TODO: Import reset and standard css
// Setup postcss in rollup

const app = new App({
  target: document.getElementById('app'),
});

export default app;
