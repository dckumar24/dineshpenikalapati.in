
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
    
    const clearRoboChat=()=>{
        setRoboChatDetails({title:'',desc:''})
    }


    return <SkillLogoWrapper className={`${!skillLogo?'w-20 h-20':''}`}>
   {   skillLogo&&<motion.img 
   onMouseEnter={setRoboChat}
   onMouseLeave={clearRoboChat}
    initial={{scale:1}}
    whileHover={{scale:1.2}}
   src={skillLogo} className="w-20 h-20 "></motion.img>}
    </SkillLogoWrapper>
}

export default SkillLogo