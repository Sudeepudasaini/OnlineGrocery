import { createContext } from "react";
export const AppContext=createContext();
export const AppContextProvider=([children])=>{
    const navigate=useNavigate();
    const[user,setuser]=useState(null)
    const[isSeller,setIsSeller]=useState(false)
    const value = {navigate,user,setUser,setIsSeller,isSeller}
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}