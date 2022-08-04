import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import logo from "./img/Logo.svg"
import {useState} from "react"
import { ThreeDots  } from  'react-loader-spinner'

export default function LoginScreen(){
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [disabled,setDisabled]=useState('')
   const [buttonInside,setButtonInside]=useState("Entrar")
   function Login(e){
        e.preventDefault();
        let body={email,password};
        setDisabled('disabled');
        console.log(body)
        setButtonInside(<ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#FFFFFF" 
             />)


   }
    return(
        <Screen onSubmit={Login}>
            <img src={logo}></img>
            <Input placeholder="email"
            required type="email" 
            value={email}
            disabled={disabled}
            onChange={e => setEmail(e.target.value)}>
            </Input>
            <Input placeholder="senha"
            required type="password" 
            value={password}
            disabled={disabled}
            onChange={e => setPassword(e.target.value)}>
            </Input>
            <Button
            disabled={disabled}>{buttonInside}</Button>
            <p>Não tem uma conta? Cadastre-se!</p>
            
        </Screen>
        
    )
}

const Week=styled.div`
    display: flex;

`
const Screen=styled.form`
    
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input{
    margin-bottom:6px;
 }
 img{
    
    width: 180px;
    height: 178.38px;
    margin-top:68px;
    margin-bottom:32px;
 }
button{
    margin-bottom:20px;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF; 
}
`