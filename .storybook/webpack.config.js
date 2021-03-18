// webpack.config.js
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const updateWebpackConfig = require('storybook-readme/vue/updateWebpackConfig')

module.exports = async ({ config, mode }) => {
  updateWebpackConfig(config)

  config.resolve.extensions.push(
    '.ts',
    '.tsx',
    '.vue',
    '.css',
    '.less',
    '.scss',
    '.sass',
    '.html'
  )

  config.module.rules.push({
    resourceQuery: /blockType=docs/,
    use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader']
  })

  config.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true // used with ForkTsCheckerWebpackPlugin
        }
      }
    ]
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer')
          ]
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())
  return config
}
