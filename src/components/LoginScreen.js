import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Day from "./Day"
export default function LoginScreen(){
    const lista=[1,4];
    const weekDay=[
        {dia:"S",index:1},
        {dia:"T",index:2},
        {dia:"Q",index:3},
        {dia:"Q",index:4},
        {dia:"S",index:5},
        {dia:"S",index:6},
        {dia:"D",index:7},
    ]
    return(
        <>
        <Button>Entrar</Button>
        <Button size="tiny">+</Button>
        <Input placeholder="Nome"  ></Input>
        <Week> {weekDay.map((value)=>
            <Day 
            index={value.index} 
            lista={lista}
            view={"s"}
            key={value.index}>{value.dia}</Day>
       )}
       </Week>
       <Week> {weekDay.map((value)=>
            <Day 
            index={value.index} 
            lista={''}
            view={''}
            key={value.index}>{value.dia}</Day>
       )}
       </Week>
        </>
    )
}

const Week=styled.div`
    display: flex;

`
