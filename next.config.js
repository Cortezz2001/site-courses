const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ik.imagekit.io'],
      },
};
 
module.exports = withNextIntl(nextConfig);