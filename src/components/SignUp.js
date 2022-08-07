import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import logo from "./img/Logo.svg"
import {useState} from "react"
import { postSignUp } from "../services/trackit"
import { useParams,Link,useNavigate } from "react-router-dom";


export default function SignUp(){
   const [disabled,setDisabled]=useState('')
   const [name,setName]=useState('')
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [image,setImage]=useState('')
   const navigate = useNavigate();
    
   function signIn(e){
        e.preventDefault();
        let body={email,password,image,name};
        setDisabled('disabled');
        
        postSignUp(body)
        .then((answer)=>{
            const token=answer.data.token;
            const image=answer.data.image;
            const authJSON = JSON.stringify({ token: token, image: image });
            localStorage.setItem('trackit', authJSON);
            
            navigate('/');
        })
        .catch((error) => {
            alert("Email e/ou senha inválidos");
            setDisabled('');
            setPassword("");
        })
        


   }
    return(
        <Screen onSubmit={signIn}>
            <img src={logo}></img>
            
            <Input disabled={disabled}
                required type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email">   
             </Input>
            <Input disabled={disabled} 
                required type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="senha">
            </Input>
            <Input disabled={disabled} 
                required placeholder="nome"
                value={name}
                onChange={e => setName(e.target.value)}>
            </Input>
            <Input disabled={disabled} 
                required placeholder="foto"
                value={image}
                onChange={e => setImage(e.target.value)}>
            </Input>
            <Button type="submit">Cadastrar</Button>
            
            <Link to={`/`}><p>Já tem uma conta? Faça login!</p></Link>
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