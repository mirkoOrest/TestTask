export const config = {

  PORT: process.env.PORT || 3000,
  HOST: process.env.PORT || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5000',

  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4000;http://localhost:3000',

  serverRateLimits: {
    period: 15 * 60 * 1000, // 15 minutes
    maxRequests: 1000
  },

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/cinema'

};
