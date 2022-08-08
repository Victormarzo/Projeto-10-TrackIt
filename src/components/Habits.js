import styled from "styled-components";
import Button from "./Button";
import Text from "./Text"
import Delete from "./img/Delete.svg"
import Title from "./Title"
import{createHabit,listHabit} from "../services/trackit"
import { useEffect, useState } from "react";
import Habit from "./Habit ";
import Input from "./Input";
import Day from "./Day";
import CreateHabit from "./CreateHabit";




export default function Habits(){
    
    const [habitList,setHabitList]=useState(null);
    const [newHabit,setNewHabit]=useState(false);
    const [getHabits,setGetHabits]=useState(false);
          
    useEffect(()=>{
        listHabit()
            .catch((error)=>{
                alert(error)
            })
            .then((answer)=>{
                setHabitList(answer.data)
                
            })
    },[getHabits])  
    
    return(

    <>
    <Space>
        <Title>Meus hábitos</Title>   
        <Button onClick={() => {
                setNewHabit(!newHabit)
                
                
            
            }} size="tiny">+</Button>
    </Space>
   
   {newHabit?(<CreateHabit 
    setGetHabits={setGetHabits} 
    getHabits={getHabits} 
    setNewHabit={setNewHabit}
    newHabit={newHabit}
    
     ></CreateHabit>):(<></>)}
   
    
    {habitList? (habitList.length!=0?(<div>{habitList.map((value)=>
        <Habit id={value.id}
        key={value.id}
           setGetHabits={setGetHabits} 
            getHabits={getHabits}
            days={value.days}
            name={value.name}
        ></Habit>
        
        
        )}</div>):
        (<Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text> ))
    :(<></>)
    }

</>
    );
}
const Space=styled.div`
    margin-bottom:18px;
    display: flex;
    justify-content: space-between;
    padding-right:18px ;
`
