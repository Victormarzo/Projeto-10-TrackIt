import Title from "./Title"
import Text from "./Text"
import TodayHabit from "./TodayHabit"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { listHabitToday } from "../services/trackit"
import dayjs from "dayjs";
import { weekDay } from "./Weekday"
import UserContext from "../contexts/UserContext"


export default function Today(){
    const [today,setToday]=useState("")
    const {percentage,setPercentage}=useContext(UserContext);
    const [subtitle,setSubtitle]=useState('')
    const [refresh,setRefresh]=useState(false)
    let finished;
    let percentageFinished;
    
    

    useEffect(()=>{
        listHabitToday()
            .catch((error)=>{
                alert(error)
            })
            .then((answer)=>{
                setToday(answer.data)
                finished = answer.data.filter(habit => habit.done);
                percentageFinished = Math.round(100*(finished.length / answer.data.length));
                setPercentage(percentageFinished);
                if(percentageFinished>0){
                    setSubtitle(<Text color={color}>{percentage}% dos hábitos concluídos</Text>);
                }else{
                    setSubtitle(<Text>Nenhum hábito concluído ainda</Text>);
                }
                
            })
            
    },[percentage,refresh])  
    
    let color="#8FC549"
    const dayNumber = dayjs().day();
    
    return(
    <>
    <Title>{weekDay[dayNumber].nome}, {dayjs().format('DD/MM')}</Title>
   
   {subtitle}
    
    
    <Wrapper>
    {today?(today.length==0?(<></>):(today.map((value)=>
        <TodayHabit 
            id={value.id}
            done={value.done}
            currentSequence={value.currentSequence}
            highestSequence={value.highestSequence}
            name={value.name}
            refresh={refresh}
            setRefresh={setRefresh}
        ></TodayHabit>
        
        
        ))):(<></>)}
    
    </Wrapper>
    </>
    )
}
const Wrapper=styled.div`
    margin-top:28px`