import styled from "styled-components";
import Delete from "./img/Delete.svg";
import Day from "./Day";
import Text from "./Text";
import { deleteHabit } from "../services/trackit";


export default function Habit({id,name,days,setGetHabits,getHabits}){
    const weekDay=[
        {dia:"D",index:0},
        {dia:"S",index:1},
        {dia:"T",index:2},
        {dia:"Q",index:3},
        {dia:"Q",index:4},
        {dia:"S",index:5},
        {dia:"S",index:6},
    ]

    function deleteIt(){
        let confirmation=window.confirm("quer deletar?")
        console.log(id)
        if(confirmation){
            deleteHabit(id)
                .then(() => {
                setGetHabits(!getHabits);
            });
        }}
    return(
    
    <Wrapper>
    <Text>{name}</Text>
    
    
    <img onClick={() => {
                deleteIt()
            }} src={Delete}/>
    <Week> {weekDay.map((value)=>
        <Day 
        index={value.index} 
        lista={days}
        view={"s"}
        key={value.index}>{value.dia}</Day>
   )}
   </Week>
   </Wrapper>
   )

    
}
const Week=styled.div`
    display: flex;
    margin-left:17px;

`
const Wrapper=styled.div`
    background: #FFFFFF;
    padding-top:10px;
    padding-bottom:15px;
    margin:0 17px 10px;
    border-radius: 5px;
    min-height: 91px;
    position:relative;
    img{
        position:absolute;
        top:10px;
        right: 10px;

    }
`