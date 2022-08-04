import styled from "styled-components"

export default function Input({...otherProps}){
    return(
        <Inputs {...otherProps}></Inputs>
    )
}
const Inputs=styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    
`