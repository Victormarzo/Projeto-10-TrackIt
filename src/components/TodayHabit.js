import styled from "styled-components"
import { checkHabit, uncheckHabit } from "../services/trackit"
import Checkbox from "./Checkbox"
import Text from "./Text"

export default function TodayHabit({id,name,done,currentSequence,highestSequence,refresh,setRefresh}){
    let color='';
    let colorh=''

    if (done==true){
        color="#8FC549"
    }
    if (currentSequence==highestSequence&&highestSequence!=0){
        colorh="#8FC549"
    }

    return(
    <Wrapper>
        <List>
        <Text>{name}</Text>
        <Text color={color} small="s">Sequência atual:{currentSequence} dias</Text >
        <Text color={colorh} small="s">Seu recorde:{highestSequence} dias</Text>
        </List>
        <Checkbox id={id} done={done} refresh={refresh} setRefresh={setRefresh} ></Checkbox>
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