const { getLoader } = require('@craco/craco')

module.exports = {
  webpack: {
    configure: webpackConfig => {
      const { isFound, match } = getLoader(
        webpackConfig,
        rule => rule.loader && rule.loader.includes('file-loader')
      )

      if (isFound) {
        match.loader.exclude.push(/\.ya?ml$/)
      }

      webpackConfig.module.rules.push({
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      })

      return webpackConfig
    }
  }
}
