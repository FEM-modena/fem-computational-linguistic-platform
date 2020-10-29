console.log(process.env.MATOMO_HOST);
module.exports = {
    host: process.env.MATOMO_HOST,
    siteId: process.env.MATOMO_SITE_ID,
  };