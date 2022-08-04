import styled from "styled-components"

export default function Button({children,size,...otherProps}){

    return(
        <Botao {...otherProps} size={size}>{children}</Botao>
    )
}
const Botao=styled.button`
width: 303px;
height: 45px;
background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
border:0;

${(props) => {
    if (props.size === 'medium') {
      return `
            height: 20px;
            width: 50px;
            font-size: 15.976px;
        `;
    }
    if (props.size === 'tiny') {
      return `
            width: 40px;
            height: 35px;
            font-size: 26.976px;
        `;
    }
  }}
`