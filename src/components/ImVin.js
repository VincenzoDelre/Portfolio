import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'


const typewriter = keyframes`
from { width: 0 },
to { width: 45% }
`

const blinkCursor = keyframes`
from, to { border-color: transparent},
50% { border-color: white; }  
` 
export const ImVin = () => {

    
    return (
        <h1>
            Hi, I'm Vin            
        </h1>
    )
}


const ImVinTitle = styled(ImVin)`

    color:#000;
          margin: 3.5rem auto;
          text-align: center;
      @media(min-width:768px){
          color:#000;
          overflow: hidden;
          white-space: nowrap;
          font-size: 5rem;
          margin: 0rem auto 6rem auto;
          border-right: .12em solid white;
          letter-spacing: .0.7em;
          text-align: center;
          animation:
              ${typewriter} 3s steps(40, end),
              ${blinkCursor} .65s step-end infinite;                        
      }
`


export default ImVinTitle
