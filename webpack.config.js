const path = require('path');

module.exports = {
  entry: './src/app.ts',             // adjust this path if your main file lives elsewhere
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    open: true,
  },
  mode: 'development',               // switch to 'production' later
};
