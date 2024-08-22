module.exports = {
  async rewrites() {
    return [
      {
        source: '/test1',
        destination: '/test2',
      },
    ]
  },
}
