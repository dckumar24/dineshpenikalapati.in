import { createContext,  useState } from "react";

interface ThemeContextType{
    theme:string;
    toggleTheme:()=>void;
}

const ThemeContext=createContext<ThemeContextType>({
    theme:'light',
    toggleTheme:()=>{}
});

interface ThemeProviderProps{
    children:JSX.Element
}



const ThemeProvider=({children}:ThemeProviderProps)=>{

    const [theme,setTheme]=useState('light')

    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==='dark'?'light':'dark'))
    }



    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeProvider,ThemeContext}