import LoginScreen from "./LoginScreen"
import SignUp from "./SignUp"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>}/>
                <Route path="/cadastro" element={<SignUp/>}/>


            </Routes>
        
        
        </BrowserRouter>
        
    )
}
//<SignUp/>