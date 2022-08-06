import LoginScreen from "./LoginScreen"
import SignUp from "./SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "./PrivatePage";
import History from "./History";
import GlobalStyle from "../styles/globalStyles";
import Habits from "./Habits";


export default function App(){

    return(
        <BrowserRouter>
         <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>
                <Route path="/historico" element={<PrivatePage><History/></PrivatePage>}/>
                <Route path="/habitos" element={<PrivatePage><Habits/></PrivatePage>}/>
            </Routes>
        
        
        </BrowserRouter>
        
    )
}
//<Route path="/cadastro" element={<SignUp/>}/>