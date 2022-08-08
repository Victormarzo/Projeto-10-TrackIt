import { useContext, useState } from "react"
import styled from "styled-components"
import Button from "./Button"
import Day from "./Day"
import Input from "./Input"
import{createHabit} from "../services/trackit"
import UserContext from "../contexts/UserContext"
export default function CreateHabit ({setGetHabits,getHabits,newHabit,setNewHabit}){
    
    
    const weekDay=[
        {dia:"D",index:0},
        {dia:"S",index:1},
        {dia:"T",index:2},
        {dia:"Q",index:3},
        {dia:"Q",index:4},
        {dia:"S",index:5},
        {dia:"S",index:6},
    ]
    const {name,setName}=useContext(UserContext);
    const [disabled,setDisabled]=useState(false);
    const {days,setDays}=useContext(UserContext);
    const[view,setView]=useState("")
    function create(e){
        e.preventDefault();
        let body={name,days};
        console.log(body)
        setDisabled(!disabled);
        setView("s");
        createHabit(body)
        .then((answer)=>{
            setDisabled(!disabled);
            
            setDays([]);
            setName('');
            setNewHabit(!newHabit)
            setGetHabits(!getHabits);
            
        })
        .catch((error) => {
            alert("Deu erro");    
            setDisabled(!disabled);     
        })
    }
        
    return(
        <Create onSubmit={create}>
        <Week>
        <Input disabled={disabled} 
            required placeholder="nome do hábito"
            value={name}
            onChange={e => setName(e.target.value)}>
        </Input>
        </Week>
            <Week>{weekDay.map((value)=>
        <Day 
            index={value.index} 
            lista={days}
            view={view}
            days={days}
            setDays={setDays}
        key={value.index}>{value.dia}</Day>
   )}</Week>
        <Wrapper>
            <P onClick={() => {
                setNewHabit(!newHabit);
                
            
            }}>Cancelar</P>
            <Button disabled={disabled} type="submit" size="medium">Salvar</Button>
        </Wrapper>
        </Create>
    )

}
const Wrapper=styled.div`
    display: flex;
    align-items: center ;
    justify-content: end  ;
    margin-right: 16px;
    margin-top:29px;

`

const Week=styled.div`
    display: flex;
    margin-left:18px;

`
const P=styled.p`
margin-right: 23px;
`
const Create=styled.form`
background: #FFFFFF;
    padding-top:18px;
    padding-bottom:15px;
    margin:0 17px 10px;
    border-radius: 5px;
`