module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
        viewportWidth: 750,
        exclude: [/src\/pc/, /node_modules\/element-ui/],
    }
  },
};
