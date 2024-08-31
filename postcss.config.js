module.exports = {
  plugins: [
    require('postcss-import'), // Pour résoudre les @import
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
