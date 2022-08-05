import styled from "styled-components"

export default function Text({color,children}){

    return(

        <P color={color}>{children}</P>

    )
}
const P=styled.div`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${(props) => props.color ? props.color :" #666666"};
    margin-left:17px;
    padding-right:15px;
`
    
