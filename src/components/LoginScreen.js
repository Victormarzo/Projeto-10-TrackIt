import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import logo from "./img/Logo.svg"
import {useState} from "react"
import { postLogin} from "../services/trackit"
import { Link,useNavigate } from "react-router-dom";


export default function LoginScreen(){
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [disabled,setDisabled]=useState(false)
   const navigate = useNavigate();
   
   function login(e){
        e.preventDefault();
        let body={email,password};
        setDisabled(true);
        
        postLogin(body)
            
            .then((answer)=>{
                const token=answer.data.token;
                const image=answer.data.image;
                const authJSON = JSON.stringify({ token: token, image: image });
                localStorage.setItem('trackit', authJSON);
                
                navigate('/hoje');
            })
            .catch(() => {
                alert("Email e/ou senha inválidos");
                setDisabled(false);
                setPassword("");
                
            })

   }
    return(
        <Screen onSubmit={login}>
            <img src={logo} alt="logos"></img>
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
            disabled={disabled}>Entrar</Button>
            <Link to={`/cadastro`}><p>Não tem uma conta? Cadastre-se!</p></Link>
            
        </Screen>
        
    )
}

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