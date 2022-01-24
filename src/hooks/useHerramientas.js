import { graphql, useStaticQuery } from "gatsby";

const useHerramientas = () => {
    const data = useStaticQuery( graphql `
    query {
        allDatoCmsTool {
          nodes {
            titulo
            slug
            imagen {
              gatsbyImageData(width: 50, height: 50)
            }
          }
        }
      }

      `)
      
      return data.allDatoCmsTool.nodes.map(tool => ({
        id: tool.id,
        titulo: tool.titulo,
        slug: tool.slug,
        imagen: tool.imagen
    }))
    
}
 
export default useHerramientas;