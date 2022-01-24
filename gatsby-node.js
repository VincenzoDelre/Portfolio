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
}

