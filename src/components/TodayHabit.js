import styled from "styled-components"

import Checkbox from "./Checkbox"
import Text from "./Text"

export default function TodayHabit({id,name,done,currentSequence,highestSequence}){


    return(
    <Wrapper>
        <List>
        <Text>{name}</Text>
        <p>Sequência atual:{currentSequence} dias</p>
        <p>Seu recorde:{highestSequence} dias</p>
        </List>
        <Checkbox done={done} ></Checkbox>
    </Wrapper>
    
    
    )
}
const Wrapper=styled.div`
    background: #FFFFFF;
    padding-top:10px;
    padding-bottom:15px;
    margin:0 17px 10px;
    border-radius: 5px;
    min-height: 91px;
    display: flex;
    justify-content:space-between;
    padding-right:15px;

`
const List=styled.div`
    p{
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        margin-left:17px;
        color: #666666;
        margin-top: 7px;

    }

    `