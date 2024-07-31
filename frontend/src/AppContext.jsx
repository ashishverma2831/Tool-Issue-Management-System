import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children})=>{

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )

    const [loggedIn, setLoggedIn] = useState(currentUser!==null)

    const logout = ()=>{
        sessionStorage.removeItem("user");
        navigate('/login');
        enqueueSnackbar('Logged out successfully',{variant:'success'})
        setLoggedIn(false);
    }

    return <AppContext.Provider value={{currentUser,setCurrentUser,loggedIn,setLoggedIn,logout}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=> useContext(AppContext);
export default useAppContext;