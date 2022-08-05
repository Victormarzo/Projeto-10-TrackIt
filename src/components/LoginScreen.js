import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import logo from "./img/Logo.svg"
import {useState} from "react"
import { postLogin } from "../services/trackit"
import { useParams,Link,useNavigate } from "react-router-dom";


export default function LoginScreen(){
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [disabled,setDisabled]=useState(false)
   const navigate = useNavigate();
   
   function Login(e){
        e.preventDefault();
        let body={email,password};
        setDisabled(true);
        console.log(body)
        postLogin(body)
            
            .then((answer)=>{
                const token=answer.data.token;
                const image=answer.data.image;
                const authJSON = JSON.stringify({ token: token, image: image });
                localStorage.setItem('trackit', authJSON);
                alert("DEU BOA KRL")
                navigate('/hoje');
            })
            .catch(() => {
                alert("Email e/ou senha inválidos");
                setDisabled(false);
                setPassword("");
                console.log(disabled)
            })

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
            disabled={disabled}>Entrar</Button>
            <Link to={`/cadastro`}><p>Não tem uma conta? Cadastre-se!</p></Link>
            
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