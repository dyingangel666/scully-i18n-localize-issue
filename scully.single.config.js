exports.config = {
  projectRoot: "./src",
  projectName: "marketplace-frontend",
  routes: {
    '/products/:productId': {
      type: 'json',
      productId: {
        url: 'http://localhost:1668/assets/products.json',
        property: 'id'
      }
    }
  },
  reloadPort: 4200,
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
};
