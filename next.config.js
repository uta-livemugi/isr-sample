module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/test1',
        destination: 'https://acme.com/blog',
      },
    ]
  },

}

