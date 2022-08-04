import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import logo from "./img/Logo.svg"
export default function SignUp(){
   
    return(
        <Screen>
            <img src={logo}></img>
            <Input placeholder="email"></Input>
            <Input placeholder="senha"></Input>
            <Input placeholder="nome"></Input>
            <Input placeholder="foto"></Input>
            <Button>Cadastrar</Button>
            <p>Já tem uma conta? Faça login!</p>
        </Screen>
        
    )
}

const Week=styled.div`
    display: flex;

`
const Screen=styled.div`
    
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