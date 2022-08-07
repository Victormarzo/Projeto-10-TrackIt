import styled from "styled-components"
import Tik from "./img/Tik.svg"
import { checkHabit, uncheckHabit } from "../services/trackit"
export default function Checkbox({done,id,setRefresh,refresh}){
    function check(){
        
        if(done==true){
            
            uncheckHabit(id)
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                setRefresh(!refresh);
            });
        }else{
            checkHabit(id)
            .then(() => {
                setRefresh(!refresh);
            })
            .catch((error) => {
                console.log(error);
            })
            
        }



    }
    return (

        <Box done={done}>
            <img onClick={() => check()} src={Tik}></img>
        </Box>
    )
}

const Box=styled.div`
    background-color: ${(props)=> props.done? "#8FC549": "#EBEBEB"};
    width: 69px;
    height: 69px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        position:absolute;
    }
`