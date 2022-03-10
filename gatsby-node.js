exports.createPages = async ({ actions, graphql, reporter }) => {

    const resultado = await graphql(`
    
    query{
      allDatoCmsLogo {
        nodes {
          slug
        }
      }
      allDatoCmsProyecto {
              nodes {
                slug
              }
            }
    }
    `)

    

    // console.log(resultado.data.allDatoCmsProyecto.nodes)
    if(resultado.errors)
    
    {
        reporter.panic('No hubo resultado', resultado.errors);
    }

    //Si hay paginas crear los archivos
    const proyectos = resultado.data.allDatoCmsProyecto.nodes;
    const logos = resultado.data.allDatoCmsLogo.nodes;

    proyectos.forEach(proyecto => {
        actions.createPage({
            path: proyecto.slug,
            component: require.resolve('./src/components/proyectos.js'),
            context: {
                slug:proyecto.slug
            }

        })
    });

    logos.forEach(logo => {
      actions.createPage({
          path: logo.slug,
          component: require.resolve('./src/components/logos.js'),
          context: {
              slug:logo.slug
          }

      })
  });
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-water-wave/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-mouse-particles/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-awesome-button/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-router-dom/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /swiper/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-dom/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  };
  exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
  
    config.module.rules = [
      // Omit the default rule where test === '\.jsx?$'
      ...config.module.rules.filter(
        rule => String(rule.test) !== String(/\.jsx?$/)
      ),
  
      // Recreate it with custom exclude filter
      {
        // Called without any arguments, `loaders.js()` will return an
        // object like:
        // {
        //   options: undefined,
        //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
        // }
        // Unless you're replacing Babel with a different transpiler, you probably
        // want this so that Gatsby will apply its required Babel
        // presets/plugins.  This will also merge in your configuration from
        // `babel.config.js`.
        ...loaders.js(),
  
        test: /\.jsx?$/,
  
        // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
        exclude: modulePath =>
          /node_modules/.test(modulePath) &&
          !/node_modules\/(swiper|dom7)/.test(modulePath),
      },
    ]
  
    // This will completely replace the webpack config with the modified object.
    actions.replaceWebpackConfig(config)
  }
}

