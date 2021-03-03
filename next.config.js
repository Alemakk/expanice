const withImages = require('next-images')
module.exports = withImages({
  async redirects() {
    return [
      { source: '/', destination: '/home', permanent: true }
    ]
  },
  webpack(config, options) {
    return config
  }
})