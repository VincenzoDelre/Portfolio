import React from "react"
import ReactDOM from "react-dom";

import { css } from "@emotion/react"
import styled from "@emotion/styled"


import Layout from "../components/layout"
import ImagenHero from "../components/imagenHero"
import ContenidoInicio from "../components/inicio"

import useProyecto from "../hooks/useProyecto"
import ProyectoPreview from "../components/proyectoPreview"
import useLogo from "../hooks/useLogo"
import { Services } from "../components/Services"

import "swiper/css/bundle";
import LogoPreview from "../components/logoPreview"

import { graphql, useStaticQuery } from 'gatsby'; 
import Contacto from "../components/Contacto";

import useHerramientas from "../hooks/useHerramientas";
import { HerramientaPreview } from "../components/HerramientaPreview";

// import StyledBackgroundSection from "../components/Background";




const ListadoProyectos = styled.ul`
  max-width: 1200px;
  height: 100%;
  width: 95%;
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows: 1fr;
    gap: 3rem;
    align-items: flex-start;
  }

`;

const ListadoHerramientas = styled.ul`
  
  height: 100%;
  width: 95%;
  margin: 4rem auto 0 auto;
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
  transform: skewY(-6deg);
  
  @media(min-width:768px){
    padding: 2rem;
  }
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0a0a09+0,000000+100 */
  background: rgb(10,10,9); /* Old browsers */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,828282+100 */
  background: rgb(255,255,255); /* Old browsers */
  background: -moz-linear-gradient(-45deg,  rgba(255,255,255,1) 0%, rgba(130,130,130,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg,  rgba(255,255,255,1) 0%,rgba(130,130,130,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#828282',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  

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
  margin: 4rem auto;
  padding: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IndexPage = () => {

  const proyectos = useProyecto();
  const logos = useLogo();
  const herramientas = useHerramientas();

  console.log(herramientas);
  
  const resultado = useStaticQuery( graphql`
    query{
        allDatoCmsPagina(filter: {slug: {eq: "about"}}) {
          nodes {
            titulo
            contenido
            imagen {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      `);

    
  return (
    <>
    

    <ImagenHero />
    
    
    <Layout>

      

      <DiagonalBox>
        {/* <StyledBackgroundSection> */}
          <Content>
            <ContenidoInicio/>
          </Content>
        {/* </StyledBackgroundSection> */}
      </DiagonalBox> 

      
      
      {/* SERVICIOS */}
      
      <h2 
        id='servicios'
        css={css`
        font-size: 3.5rem;
        margin: 5rem auto;
        text-align: center;
        
        @media (min-width: 768px) {
          font-size: 5rem;
        }

      `}>
        Servic<span css={css`color:red`}>es</span>
      </h2>
      

      <DiagonalBox>
        <Content>
          <Services/>
        </Content>
      </DiagonalBox>
      


      {/* PROYECTOS */}
      <h2 
        id='proyectos'
        css={css`
        font-size: 3.5rem;
        margin: 5rem auto;
        text-align: center;
        @media (min-width: 768px) {
          font-size: 5rem;
        }
        `}>
        Proyec<span css={css`color:red`}>ts</span>
      </h2>
      <DiagonalBox >
        <Content>

          <ListadoProyectos css={css`
            width: 80vw;
            display: flex;
            align-items: center;
            justify-content: center;
            margin:8rem;
          `}>
            { proyectos.map( proyecto =>(
              <ProyectoPreview 

                key={ proyecto.id }
                proyecto={proyecto} 
              />
            )) }
          </ListadoProyectos>
            
        </Content>
      </DiagonalBox>


      {/* LOGOS */}
      <h2 
        id='logos'
        css={css`
        font-size: 3.5rem;
        margin: 5rem auto;
        text-align: center;
        @media (min-width: 768px) {
          font-size: 5rem;
        }
      `}>
        Log<span css={css`color:red`}>os</span>
      </h2>

      <DiagonalBox>
        
          <Content>
          
          <ListadoProyectos css={css`
            width: 80vw;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8rem;
          `}>
          
            { logos.map( logo =>(
              <LogoPreview
                key={ logo.id }
                logo={logo}
              />
              ))}
          </ListadoProyectos> 

        </Content>
        
    </DiagonalBox>

    
          
    <h2 
       
       css={css`
       font-size: 3.5rem;
       margin: 5rem auto;
       text-align: center;
       @media (min-width: 768px) {
         font-size: 5rem;
       }
     `}>
       Too<span css={css`color:red`}>ls</span>
     </h2>
     <DiagonalBox>
       <Content>
         
         <ListadoHerramientas css={css`
           width: 80vw;
           
           margin: 8rem;
         `}>
         
           { herramientas.map( herramienta =>(
             <HerramientaPreview
                key={ herramienta.slug }
                herramienta={herramienta}
             />
             ))}
         </ListadoHerramientas> 
      </Content>
    </DiagonalBox>
    
    {/* CONTACTO */}
    <h2 
        id='contacto'
        css={css`
        font-size: 3.5rem;
        margin: 5rem auto;
        text-align: center;
        @media (min-width: 768px) {
          font-size: 5rem;
        }
      `}>
        Conta<span css={css`color:red`}>ct</span>
    </h2>


    <DiagonalBox>
      <Content>
        <Contacto/>
      </Content>
    </DiagonalBox>
    
    </Layout>

    
    
    </>
  )
}

export default IndexPage
