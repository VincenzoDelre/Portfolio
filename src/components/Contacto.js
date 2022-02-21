import React, { useState } from 'react';
import axios from 'axios';
import { css } from "@emotion/react"
import styled from "@emotion/styled"


const Campo = styled.div`
    display: flex;
    flex-direction: column;

`;

const CampoLabel = styled.label`
    flex: 0 0 2rem;
    text-align: left;
`;
const CampoField = styled.input`
    flex: 1;
    border:0.1px solid rgb(235, 235, 235);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 2rem;
    &:focus { 
        outline-color: rgb(173, 173, 173);
    }
`;

const CampoTextarea = styled.textarea`
    flex: 1;
    border:0.1px solid rgb(235, 235, 235);
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 2rem;
    &:focus { 
        outline-color: rgb(173, 173, 173);
    }
`;



export const Contacto = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [bool, setBool] = useState(false);
  
  // handle inputs
  const handleName = (e)=>{
      setName(e.target.value) 
  }
  
  const handleEmail = (e)=>{
      setEmail(e.target.value)
  }
  
  const handleMessage = (e)=>{
      setMessage(e.target.value)
  }
  
  
  const formSubmit= async (e)=>{
  e.preventDefault();
  
  try {
      
  let data = {
      name,
      email,
      message
  }
  
  setBool(true);
  
  const res = await axios.post(`/api/contact`, data);
  
  if(name.length===0 || email.length===0 || message.length===0){

    setBool(false);
  
  }
  
  
  else if(res.status===200){
    setBool(false);
    setName('');
    setEmail('');
    setMessage('')
  
  }
  
  } catch (err) {
     console.log(err); 
  }
  
  }    
    return (
      <>
      
      
      
      <div css={css`
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:3rem auto;
        width: 90%;
        `}>
        
        
          
          
            <form  onSubmit={formSubmit} >
                <div css={css`

                  display: flex;
                  margin-bottom: 3rem;
                  flex-direction: column;

                  h2{
                      text-align: left;
                  }
                `}>
                  <p>Si quieres realizar una consulta, puedes hacerlo completando este formulario</p>
                </div>
                <Campo>

                  <CampoLabel>Nombre</CampoLabel>
                  <CampoField 
                    type="text" 

                    onChange={handleName}
                    value={name}


                    />
                </Campo>
            
                <Campo>
                    <CampoLabel>Email</CampoLabel>
                    <CampoField 

                    type="email" 
                    onChange={handleEmail}
                    value={email}
                  
                  />
                </Campo>
                <Campo>
                    <CampoLabel>Mensaje</CampoLabel>
                  <CampoTextarea

                    rows="7"
                    type="text" 
                    onChange={handleMessage}
                    value={message}
                  
                    name="message"
                  />
                </Campo>

              <div className="send-btn">
                <button 
                  type="submit"
                  css={css`
                    background-color:#ccc;
                    color:#fff;
                    border-radius:1rem;
                    border:1px solid #aaa;
                    &:hover{
                      background-color: #bbb;
                      border:1px solid #000;
                    }`}>Enviar </button>
              </div>

          </form>
          
        
      </div>
      
      
      </>
  )
}

export default Contacto
