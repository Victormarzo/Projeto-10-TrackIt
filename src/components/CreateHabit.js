import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"
import Day from "./Day"
import Input from "./Input"
import{createHabit} from "../services/trackit"

export default function CreateHabit ({setGetHabits,getHabits}){
    console.log("RENDERIZOU O CREATE")
    const weekDay=[
        {dia:"D",index:0},
        {dia:"S",index:1},
        {dia:"T",index:2},
        {dia:"Q",index:3},
        {dia:"Q",index:4},
        {dia:"S",index:5},
        {dia:"S",index:6},
    ]
    const [name,setName]=useState('');
    const [disabled,setDisabled]=useState(false);
    const [days,setDays]=useState([]);

    function create(e){
        e.preventDefault();
        let body={name,days};
        console.log(body)
        setDisabled('disabled');
        createHabit(body)
        setGetHabits(!getHabits)
        .then((answer)=>{
        
            alert("DEU BOA KRL");
            setDisabled('');
        })
        .catch((error) => {
            alert("deu erro");
            
            
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
            lista={''}
            view={''}
            days={days}
            setDays={setDays}
        key={value.index}>{value.dia}</Day>
   )}</Week>
        <Wrapper>
            <P >Cancelar</P>
            <Button type="submit" size="medium">Salvar</Button>


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