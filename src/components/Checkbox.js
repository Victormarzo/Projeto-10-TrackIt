import styled from "styled-components"
import Tik from "./img/Tik.svg"
export default function Checkbox({done}){
    return (

        <Box done={done}>
            <img src={Tik}></img>
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