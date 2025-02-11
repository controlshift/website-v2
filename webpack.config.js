export default async (env, argv) => {
  const config = await import(`./config/webpack.${argv.mode}.js`);
  return config.default;
};
