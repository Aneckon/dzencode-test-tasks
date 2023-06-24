module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/assets/**',
      },
    ],
  },
  eventName: 'NEXT_VERSION',
  payload: {
    version: '9.0.5-canary.2',
    isDevelopment: false,
  },
};
