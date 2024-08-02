import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const AppContext = createContext();

export const AppProvider = ({children})=>{

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )

    const [loggedIn, setLoggedIn] = useState(currentUser!==null);

    const logout = async ()=>{
        console.log('logging out');
        await sessionStorage.removeItem("user");
        navigate('/login');
        enqueueSnackbar('Logged out successfully',{variant:'success'})
        setLoggedIn(!loggedIn);
    }

    return <AppContext.Provider value={{currentUser,setCurrentUser,loggedIn,setLoggedIn,logout}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = ()=> useContext(AppContext);
export default useAppContext;