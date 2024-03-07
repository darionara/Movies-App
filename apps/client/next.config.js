module.exports = {
  reactStrictMode: true,
  transpilePackages: ['api-client'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: ''
      }
    ],
  }
};
