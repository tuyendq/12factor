module.exports.connection = {
  mongo: {
    adapter: 'sails-mongo',
    url: process.env.MONGO_URL
  }
};