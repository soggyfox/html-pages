export default (config, env, helpers) => {
    if (env.production) {
      config.output.publicPath = '/my-preact-app/';
    }
  };