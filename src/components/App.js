import LoginScreen from "./LoginScreen"
import SignUp from "./SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "./PrivatePage";
import History from "./History";
import GlobalStyle from "../styles/globalStyles";
import Habits from "./Habits";
import { useState } from "react";
import UserContext from "../contexts/UserContext"
import { weekDay } from "./Weekday";
import Today from "./Today";

export default function App(){
    const [name,setName]=useState('');
    const [days,setDays]=useState([]);
    return(
        <BrowserRouter>
         <GlobalStyle />
            <UserContext.Provider value={{name,setDays,days,setName}}>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
                <Route path="/historico" element={<PrivatePage><History/></PrivatePage>}/>
                <Route path="/habitos" element={<PrivatePage><Habits /></PrivatePage>}/>
                <Route path="/hoje" element={<PrivatePage><Today /></PrivatePage>}/>
            </Routes>
            </UserContext.Provider>
        
        </BrowserRouter>
        
    )
}
//<Route path="/cadastro" element={<SignUp/>}/>