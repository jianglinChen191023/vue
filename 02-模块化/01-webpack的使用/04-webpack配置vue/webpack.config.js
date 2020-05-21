const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // path: './dist',
    // 动态的获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // file-loader补充路径
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css-loader 加载css文件
        // style-loader 将样式添加到DOM中
        // 使用多个loader时是从右向左的
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // 当加载的图片, 小于limit(单位B)时, 会将图片编译成base64的字符串形式
            // 当加载的图片, 小于limit时, 需要使用file-loader模块进行加载
            loader: 'url-loader',
            options: {
              limit: 8192, // 8kb
              // 图片命名规范
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // include 包含
        // exclude 排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // 选项
          options: {
            // babel-preset-es2015@6.24.1
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

