module.exports = (env, argv) => {
  return require(`./config/webpack.${argv.mode}.js`)
}
