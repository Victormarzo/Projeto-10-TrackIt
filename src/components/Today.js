import Title from "./Title"
import Text from "./Text"
import TodayHabit from "./TodayHabit"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { listHabitToday } from "../services/trackit"


export default function Today(){
    const [today,setToday]=useState("")
    
    useEffect(()=>{
        listHabitToday()
            .catch((error)=>{
                alert(error)
            })
            .then((answer)=>{
                setToday(answer.data)
                
            })
    },[])  
    
    let color="#8FC549"

    return(
    <>
    <Title>Segunda, 17/05</Title>
    <Text color={color}>67% dos hábitos concluídos</Text>
    
    <Wrapper>
    {today?(today.length==0?(<></>):(today.map((value)=>
        <TodayHabit 
            id={value.id}
            done={value.done}
            currentSequence={value.currentSequence}
            highestSequence={value.highestSequence}
            name={value.name}
        ></TodayHabit>
        
        
        ))):(<></>)}
    
    </Wrapper>
    </>
    )
}
const Wrapper=styled.div`
    margin-top:28px`