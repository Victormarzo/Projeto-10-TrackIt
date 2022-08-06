import Footer from "./Footer";
import Header from "./Header";
import { Navigate } from "react-router-dom";
import styled from "styled-components";



export default function PrivatePage({children}){
    const auth = JSON.parse(localStorage.getItem("trackit"));
    if (auth) {
        return (
            <Wrapper>
                
                <Header profile={auth.image} />
                   <Center></Center>
                    {children}
                    <Center></Center>
                <Footer />
            </Wrapper>
        )
    } else {
        return <Navigate to="/" />
    }


    
}
const Wrapper=styled.div`
background-color:#E5E5E5 ;
min-height: 100vh;

`
const Center=styled.div`
background-color:#E5E5E5 ;
height: 100px;
`