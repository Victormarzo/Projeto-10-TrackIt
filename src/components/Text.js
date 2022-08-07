import styled from "styled-components"

export default function Text({color,children,...otherProps}){

    return(

        <P color={color} {...otherProps}>{children}</P>

    )
}
const P=styled.div`
    font-weight: 400;
    
    font-size: ${(props)=> props.small ? "12.976px;" :"17.976px"};
    line-height: ${(props)=> props.small ? "16px;" :"22px"};
    color: ${(props)=> props.color ? props.color :" #666666"};
    margin-left:17px;
    padding-right:15px;
`
    
