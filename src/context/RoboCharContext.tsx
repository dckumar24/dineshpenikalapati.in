import { createContext,  useState } from "react";

interface RoboChatContextType{
    title:string;
    desc:string;
    setRoboChatDetails:({title,desc}:{title:string,desc:string})=>void
}

const RoboChatContext=createContext<RoboChatContextType>({
    title:'',
    desc:'',
    setRoboChatDetails:()=>{}
});

interface RoboChatProviderProps{
    children:JSX.Element
}



const RoboChatProvider=({children}:RoboChatProviderProps)=>{

    const [title,setTile]=useState('')
    const [desc,setDesc]=useState('')

    const setRoboChatDetails=({title,desc}:{title:string,desc:string}):void=>{
        setTile(title)
        setDesc(desc)
    }



    return <RoboChatContext.Provider value={{title,desc,setRoboChatDetails}}>
        {children}
    </RoboChatContext.Provider>
}

export { RoboChatProvider,RoboChatContext}