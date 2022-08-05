import Footer from "./Footer";
import Header from "./Header";
import { Navigate } from "react-router-dom";



export default function PrivatePage({children}){
    const auth = JSON.parse(localStorage.getItem("trackit"));
    if (auth) {
        return (
            <>
                <Header profile={auth.image} />
                    {children}
                <Footer />
            </>
        )
    } else {
        return <Navigate to="/" />
    }


    
}