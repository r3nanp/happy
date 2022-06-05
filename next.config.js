const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: !isProd,
    dest: 'public'
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', 'happy-server-r3nanp.herokuapp.com']
  }
})
