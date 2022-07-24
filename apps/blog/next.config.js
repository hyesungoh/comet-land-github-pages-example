const withTM = require('next-transpile-modules')(['core']);
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

module.exports = withTM({
  webpack(config) {
    const plugins = [...config.plugins, new CompressionPlugin()];
    return { ...config, plugins };
  },
  ...nextConfig,
});
