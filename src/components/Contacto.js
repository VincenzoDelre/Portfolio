import React, { useRef, useState } from 'react';
// import axios from 'axios';
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import emailjs from '@emailjs/browser';

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
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnv2toq', 'template_8ox59g9', form.current, 'user_CZKqbheYaEZ7hbLtCgmdP')
      .then((result) => {
          alert('Message sent correctly');
          
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
    }
  // const formSubmit= async (e)=>{
  // e.preventDefault();
  
  // try {
      
  // let data = {
  //     name,
  //     email,
  //     message
  // }
  
  // setBool(true);
  
  // const res = await axios.post(`/api/contact`, data);
  
  // if(name.length===0 || email.length===0 || message.length===0){

  //   setBool(false);
  
  // }
  
  
  // else if(res.status===200){
  //   setBool(false);
  //   setName('');
  //   setEmail('');
  //   setMessage('')
  
  // }
  
  // } catch (err) {
  //    console.log(err); 
  // }
  
  // }    
    return (
      <>
      
      
      
      <div css={css`
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:3rem auto;
        width: 90%;
        color: #fff;
        `}>
        
        
          
          
            <form ref={form} onSubmit={sendEmail}>
                <div css={css`

                  display: flex;
                  margin-bottom: 3rem;
                  flex-direction: column;
                  

                  h2{
                      text-align: left;
                  }
                `}>
                  <p>Get in touch! I'll be happy to reply</p>
                </div>
                <Campo>

                  <CampoLabel>Name</CampoLabel>
                  <CampoField 
                    type="text" 

                    onChange={handleName}
                    value={name}
                    name='name'

                    />
                </Campo>
            
                <Campo>
                    <CampoLabel>Email</CampoLabel>
                    <CampoField 

                    type="email" 
                    onChange={handleEmail}
                    value={email}
                    name='email'
                  
                  />
                </Campo>
                <Campo>
                    <CampoLabel>Message</CampoLabel>
                  <CampoTextarea

                    rows="7"
                    type="text" 
                    onChange={handleMessage}
                    value={message}
                    name='message'
                    
                  />
                </Campo>

              <div className="send-btn">
                <button 
                  type="submit"
                  value="Send"
                  css={css`
                    background-color:#ccc;
                    color:#000;
                    border-radius:1rem;
                    border:1px solid #aaa;
                    padding-top: 0.5rem;
                    &:hover{
                      background-color: #bbb;
                      border:1px solid #000;
                    }`}>Send </button>
              </div>

          </form>
          
        
      </div>
      
      
      </>
  )
}

export default Contacto
