import React from "react"
import Footer from "./footer"

import { Global, css  } from "@emotion/react"
import { Helmet } from "react-helmet"
import useSeo from "../hooks/useSeo"



const Layout = (props) => {

    const seo = useSeo();
    const { siteName, fallbackSeo: {description, title } } = seo; 
    

    return ( 
        <>
        <Global
            styles={css`
                html{
                    font-size:62.5%;
                    box-sizing: border-box;
                }
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                
                body {
                    color: #fff;
                    font-family: 'Raleway', sans-serif;
                    
                    display: flex;
                    justify-content: center;
                    align-items: space-around;
                    flex-direction: column;
                    
          
        
                    @media(max-width:767px){
                        font-size:15px;
                        font-size:1.5rem;
                        line-height:1.2;
                    }
                    @media(min-width:768px){
                        font-size:18px;
                        font-size:2.3rem;
                        line-height:1.5;
                    }
                    
                    
                }
                h1, h2, h3 {
                    margin: 0;
                    line-height:2;
                }
                h1, h2{
                    font-family: 'Montserrat', cursive;
                    color: #000;
                }
                h3 {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 700;
                }
                ul{
                    list-style: none;
                    margin: 0%;
                    padding:0%;
                }
                

                
            `} 
        />
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Arizonia&family=Codystar&family=Montserrat&family=Poiret+One&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200;300;500;700&family=Raleway:wght@200;400;600&display=swap" rel="stylesheet"/>
            <script src="https://kit.fontawesome.com/424ad1444b.js" crossorigin="anonymous"></script>
            
        </Helmet>

        
        
            {props.children}
        <Footer 
            title={title}
            
            
        />
        </>
     );
}
 
export default Layout;