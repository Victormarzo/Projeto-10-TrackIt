import styled from "styled-components"
import logo from "./img/Logos.svg"

export default function Header({profile}){
 return(
    <Menu>
        
        <img src={logo}></img>
        <ProfileImg>
        <img src={profile}></img>
        </ProfileImg>
    </Menu>
    )
}
const Menu=styled.div`
    width: 100vw;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    padding-left: 18px;
    padding-right: 18px;
`

const ProfileImg=styled.div`
height: 51px;
img{
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
}
`