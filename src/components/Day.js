
import styled from "styled-components"
import {useState} from "react"

export default function Day({view,children,index,lista}){
    const [selected,setSelected]=useState(false);
    let avaliable;
     
    if(lista.includes(index)){
        
        avaliable=true;
    }
    if(view){
    return(
        <Days  lista={lista} avaliable={avaliable} >{children}</Days>
    )
}else{
    return(
        <Days  onClick={() => {
                setSelected(!selected);
            }} selected={selected}  lista={lista}  >{children}</Days>
    )
}


}

const Days=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: #DBDBDB;
    background-color:#FFFFFF;

    background-color: ${(props) => props.avaliable ||props.selected? "#CFCFCF": "#FFFFFF"};
    

    
`
