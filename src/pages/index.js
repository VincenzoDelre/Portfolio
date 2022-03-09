import React from "react"


import { css } from "@emotion/react"
import styled from "@emotion/styled"


import Layout from "../components/layout"

import ContenidoInicio from "../components/inicio"

import useProyecto from "../hooks/useProyecto"
import ProyectoPreview from "../components/proyectoPreview"
import useLogo from "../hooks/useLogo"
import { Services } from "../components/Services"

import "swiper/css/bundle";
import LogoPreview from "../components/logoPreview"

import Contacto from "../components/Contacto";

import useHerramientas from "../hooks/useHerramientas";
import { HerramientaPreview } from "../components/HerramientaPreview";
import BackgroundHero from "../components/Background";
import Back from "../components/BackgroundBox"
import ImagenHero from "../components/imagenHero"






const ListadoProyectos = styled.ul`

  width: 95%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: 1fr;
    gap: 4rem;
    align-items: flex-start;
  }

`;

const H2 = styled.h2`

            
            font-size: 3.5rem;
            margin: 3.5rem auto;
            
            text-align: center;

            @media (min-width: 768px) {
              font-size: 5rem;
              margin: 5rem auto;
              
            }
          
`;

const ListadoHerramientas = styled.ul`
  
  height: 100%;
  width: 95%;
  margin: auto;
  display: grid;
  grid-template-columns:repeat(3,1fr);
  grid-template-rows: 1fr;
  gap: 0.5rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-width: 1200px;
    display: grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: flex-start;
  }

`;

const DiagonalBox = styled.div`

  position: relative;
  transform: skewY(-5deg);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(min-width:768px){
    
  }

  &:before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  

`;


const Content = styled.div`

  position: relative;
  transform: skewY(6deg);
  max-width: 1200px;
  /* margin: 4rem auto;
  padding: 4rem auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  @media(min-width:767px){
    margin: 10rem auto;
  }
`; 

const IndexPage = () => {

  const proyectos = useProyecto();
  const logos = useLogo();
  const herramientas = useHerramientas();

  // console.log(herramientas);
  
  // const resultado = useStaticQuery( graphql`
  //   query{
  //       allDatoCmsPagina(filter: {slug: {eq: "about"}}) {
  //         nodes {
  //           titulo
  //           contenido
  //           imagen {
  //             gatsbyImageData(layout: CONSTRAINED)
  //           }
  //         }
  //       }
  //     }
  //     `);


      
  return (
    <>
    
    {/* <Back /> */}
    <ImagenHero/>
    
    <Layout>

      <H2 
        css={css`
          @media(min-width:768px){
          margin-top:-3vh;}
          `}>
            Hi! I'm Vin
      </H2> 

              

      <DiagonalBox>
      
        <BackgroundHero>
          
          <Content>
            <ContenidoInicio/>
          </Content>
          </BackgroundHero>
          
      </DiagonalBox> 
      

     

      {/* SERVICIOS */}
      <H2 
            id='servicios'  
          >
            Services
      </H2> 
      
      
      

      <DiagonalBox>
        <BackgroundHero>
          <Content>
            <Services/>
          </Content>
          </BackgroundHero>
      </DiagonalBox>
      


      {/* PROYECTOS */}
      
             
          <H2
            id='proyectos'
            >
            Proyects
          </H2>
          
      
      <DiagonalBox>
        <BackgroundHero css={css`
            @media(min-width:768px){
              height:100vh;
            }
          `}>
          <Content css={css`
            max-width: 100%;
            `}>
            <ListadoProyectos>

            { proyectos.map( proyecto =>(
              <ProyectoPreview 

                key={ proyecto.id }
                proyecto={proyecto}
                
              />
            )) }
          </ListadoProyectos> 
          </Content>
        </BackgroundHero>
      </DiagonalBox> 

      
            {/* LOGOS */}
            <H2
                id='logos'
                >
                  Logos
            </H2>
          


      <DiagonalBox>
        <BackgroundHero css={css`
            @media(min-width:768px){
              height:100vh;
            }
          `}>
          <Content>
          

          
          <ListadoProyectos css={css`
            width: 95%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction:column;
            
            @media(min-width:767px){
              gap:25rem;
              flex-direction: row;
            }
          `}>
          
            { logos.map( logo =>(
              <LogoPreview
                key={ logo.id }
                logo={logo}
              />
              ))}
          </ListadoProyectos> 

          </Content>
        </BackgroundHero>
      </DiagonalBox> 

      <H2 
          id='tools'
          >  
            Tools
        </H2>
        <DiagonalBox>
        <BackgroundHero>
          <Content>
          <ListadoHerramientas css={css`
          width: 80vw;
          @media(min-width:767px){

            margin: 8rem;
          }
         `}>
         
           { herramientas.map( herramienta =>(
             <HerramientaPreview
                key={ herramienta.slug }
                herramienta={herramienta}
             />
             ))}
         </ListadoHerramientas> 
         </Content>
        </BackgroundHero>
      </DiagonalBox> 
    
    
            {/* CONTACTO */}
        <H2 
            id='contacto'
            >
            Contact
        </H2>

      <DiagonalBox>
        <BackgroundHero>
          <Content>
            <Contacto/>
          </Content>
        </BackgroundHero>
      </DiagonalBox> 

    </Layout>
    
    </>
  )
}

export default IndexPage
