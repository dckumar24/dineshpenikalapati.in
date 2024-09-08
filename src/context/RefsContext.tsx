import { createContext,useRef } from "react";

interface RefsContextType{
    homeRef:React.RefObject<HTMLDivElement>|null,
    skillsRef:React.RefObject<HTMLDivElement> | null,
    experienceRef:React.RefObject<HTMLDivElement> | null,
    educationRef:React.RefObject<HTMLDivElement> | null,
}

const RefsContext=createContext<RefsContextType>({
  homeRef:null,
  skillsRef:null,
  experienceRef:null,
  educationRef:null

});

interface RefsProviderProps{
    children:JSX.Element
}



const RefsProvider=({children}:RefsProviderProps)=>{

   const homeRef=useRef<HTMLDivElement>(null)

   const skillsRef=useRef<HTMLDivElement>(null)

   const experienceRef=useRef<HTMLDivElement>(null)

   const educationRef=useRef<HTMLDivElement>(null)

 



    return <RefsContext.Provider value={{ homeRef,skillsRef,experienceRef,educationRef}}>
        {children}
    </RefsContext.Provider>
}

export { RefsProvider,RefsContext}