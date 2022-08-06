import styled from "styled-components";

export default function Title({children}){
    return(
    <Titles>{children}</Titles>
    )
}
const Titles=styled.div `
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    
    margin-left:17px
`
