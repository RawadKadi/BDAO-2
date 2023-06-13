module.exports = {
    images: {
      domains: ['www.linkedin.com', 'twitter.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.glb$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      });
      config.optimizeFonts = false; // Disable font optimization

      return config;
    },
  };
  