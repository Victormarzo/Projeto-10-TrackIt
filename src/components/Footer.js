import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../contexts/UserContext"

export default function Footer(){
    const {percentage}=useContext(UserContext);
    return(

        <Menu>
            <Link to={`/habitos`}><p>Hábitos</p></Link>
            <Round>
            <Link to={`/hoje`}><CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                        })}
                    /></Link>
            </Round>
            <Link to={`/historico`}><p>Histórico</p></Link>



        </Menu>
    )
}
const Menu=styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #ffffff;
    p{
        font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    
    color: #52B6FF;
    
    
    }
`
const Round=styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 40px;

`