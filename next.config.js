/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': '.',
      },
      extensionAlias: {
        '.js': ['.js', '.ts', '.tsx']
      }
    };
    return config;
  },
};

module.exports = nextConfig;
