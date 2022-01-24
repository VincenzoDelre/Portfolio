import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import "../css/services.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
    EffectCube,Navigation,Pagination
  } from 'swiper';
import { Dado2 } from './dados/Dado2';
import { Dado3 } from './dados/Dado3';
import { Dado4 } from './dados/Dado4';
  
  // install Swiper modules
  SwiperCore.use([EffectCube,Pagination,Navigation]);

const ImageBackground = styled(BackgroundImage)`
    height:100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    
`;

// const SwiperCubeShadow = styled.div`
//   &:before{
//   background: green;
//   }
// `;

export const Services = () => {
  
  const { image } = useStaticQuery( graphql`
      query {
          image: file(relativePath: { eq:"dadonew copia.png"}) {
              sharp:childImageSharp{
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
  `)



    return (
      <>
      
        <div css={css`
                position: relative;
                height: 60vh;
                
                
                
                `}>

        
        <Swiper
            
            effect={'cube'} 
            grabCursor={true} 
            cubeEffect={{
                  "shadow": true,
                  "slideShadows": true,
                  "shadowOffset": 20,
                  "shadowScale": 0.99,
                  
                }} 
            pagination={{"clickable": true}}
            // cubeShadow:before={{"background":white}}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            
            css={css`
                --swiper-pagination-color:white;
                --swiper-navigation-color:white;
                --swiper-pagination-bullet-inactive-color:red;
                --swiper-pagination-bullet-inactive-opacity: 0.6;
                
                
                width: 300px;
                height: 300px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -150px;
                margin-top: -150px;
                
                
                @media (min-width: 768px) {
                    width: 600px;
                    height: 600px;
                    margin-left: -300px;
                    margin-top: -300px;
                    padding:4rem;
                }
                
              
                
            `}>
          
        <SwiperSlide>
          
          <ImageBackground
                tag='section'  
                alt='hero' 
                fluid={image.sharp.fluid} 
                fadeIn="soft"
                >
          </ImageBackground> 
        </SwiperSlide> 
        <SwiperSlide>
          <Dado2/>
        </SwiperSlide>
        <SwiperSlide>
          
          <Dado3/>
        </SwiperSlide>
        <SwiperSlide>
          <Dado4/>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}
