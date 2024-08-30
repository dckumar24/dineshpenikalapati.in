import roboBro from '../../../assets/chatRobo.svg'
import { RoboChatContext } from '../../../context/RoboCharContext';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

import {motion} from 'framer-motion'
const RoboChatWrapper:React.ElementType='div';
const RoboChat=()=>{

    const {title,desc,setRoboChatDetails}=useContext(RoboChatContext)
    const {theme} =useContext(ThemeContext)

    useEffect(  ()=>{
        setRoboChatDetails({title:'Note',desc:'Hover on each skill to get more details'})
    },[])


 
    return <RoboChatWrapper className="w-4/12 flex flex-col items-end justify-start">
        <div className='w-full h-full min-h-[150px] flex items-end justify-start'>
        {title!==''&& desc!==''&&<motion.div 
        initial={{opacity:0,y:100,scale:0.5}}
        animate={{opacity:1,y:0,scale:1 }}
        transition={{duration:0.5}}

        className={` w-full h-full min-h-[150px] border-4 rounded-2xl border-slate-700 p-4 ${theme==='dark'?'bg-black text-white shadow-lg shadow-yellow-100':'bg-black text-white shadow-lg shadow-slate-600'}`}>
        <p className='text-2xl font-bold mb-4 underline text-orange-500'>{title}</p>
        <p className='text-sm'>{desc}</p>
    </motion.div>}
        </div>
   

        <div className="w-3/4 h-6/12 flex items-start justify-start">
          <img src={roboBro} className="w-full h-full" ></img>
        </div>
    </RoboChatWrapper>
}

export default RoboChat
