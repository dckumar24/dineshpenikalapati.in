import {motion} from "framer-motion"
import logoBg from '../../../assets/logoBg.png'

import './AboutImg.css'

const AboutImg=()=>{

    return <motion.div 
   
    
    className=" relative w-full flex items-center justify-center sm:w-2/6 sm:ml-4 sm:flex sm:items-center sm:justify-center">

       
       
        <img src={logoBg} className='w-3/6 flex items-center justify-center sm:w-4/6 z-40'></img>

        
    </motion.div>
}
export default AboutImg