export default ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    server: {
      // Configure local dev server for DDEV
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
    },
  }
});
