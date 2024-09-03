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
        setRoboChatDetails({title:'Note',desc:'Hover or Tap on any skill to get more details'})
    },[])


 
    return <RoboChatWrapper className=" relative sm:relative  w-full flex flex-col p-4 sm:p-0 sm:w-4/12 sm:flex sm:flex-col sm:items-end sm:justify-start">
        <div className={`'w-full min-w-[300px] h-full ${title!==''&& desc!==''&&'min-h-[180px] h-full'} sm:min-h-[150px] sm:min-w-[400px] flex items-end justify-start'`}>
        {title!==''&& desc!==''&&<motion.div 
        initial={{opacity:0,y:100,scale:0.5}}
        animate={{opacity:1,y:0,scale:1 }}
        transition={{duration:0.5}}

        className={` w-full h-full min-h-[150px] rounded-2xl p-4 ${theme==='dark'?'bg-black text-white shadow-lg shadow-black':'bg-black text-white shadow-lg shadow-slate-600'}`}>
        <p className='text-lg sm:text-2xl font-bold mb-4 underline text-orange-500'>{title}</p>
        <p className='text-sm text-justify'>{desc}</p>
    </motion.div>}
        </div>
   

        <div className={`w-11/12 h-3/4 ${title!==''&& desc!==''&&'absolute  -bottom-20'} flex item-end sm:relative sm:bottom-0 justify-end sm:w-3/4 sm:h-3/4 sm:flex sm:items-start sm:justify-start`}>
          <img src={roboBro} className="w-1/2 h-full" ></img>
        </div>
    </RoboChatWrapper>
}

export default RoboChat
