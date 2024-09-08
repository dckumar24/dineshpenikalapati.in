
import {motion} from 'framer-motion'
import { RoboChatContext } from '../../../context/RoboCharContext';
import { useContext } from 'react';
const SkillLogoWrapper:React.ElementType='div';

interface SkillLogoProps{
    skillLogo: string|null;
    title:string,
    desc:string
}

const SkillLogo=({skillLogo,title,desc}:SkillLogoProps)=>{

    const {setRoboChatDetails}=useContext(RoboChatContext)

    const setRoboChat=()=>{ 
        setRoboChatDetails({title,desc})
    }
    
    

    //return true if device is of mobile resolutions
    const isMobile=()=>window.innerWidth<=768

    const clearRoboChat=()=>{
        if(!isMobile())
        setRoboChatDetails({title:'',desc:''})
        else{
            setRoboChatDetails({title:'Note',desc:'Hover or Tap on any skill to get more details'})
        }
    }




    return <SkillLogoWrapper className={`${!skillLogo?'w-10 h-10 sm:w-20 sm:h-20':''}`}>
   {   skillLogo&&<motion.img 
   onMouseEnter={setRoboChat}
   onMouseLeave={clearRoboChat}
    initial={{scale:1}}
    whileHover={{scale:1.2}}
   src={skillLogo} className=" w-10 h-10 sm:w-20 sm:h-20 "></motion.img>}
    </SkillLogoWrapper>
}

export default SkillLogo