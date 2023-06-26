/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          type: "javascript/auto",
          test: /\.mjs$/,
          include: /node_modules/
        });
    
        return config;
      }
}

module.exports = nextConfig
