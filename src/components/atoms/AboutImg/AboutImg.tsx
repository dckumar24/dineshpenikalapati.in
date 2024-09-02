import {motion} from "framer-motion"
import logoBg from '../../../assets/logoBg.png'
import './AboutImg.css'

const AboutImg=()=>{
    return <motion.div 
    
    className=" relative w-full flex items-center justify-center sm:w-2/6 sm:ml-4 sm:flex sm:items-center sm:justify-center">
        <motion.div
    //     initial={{rotate:0,x:0,y:0, scaleX:0}}
    // animate={{scaleX:[0.3,0.9,0.4]}}
    //     transition={{duration:1,repeat:Infinity,repeatType:'reverse'}}
        className="absolute top-0 w-full h-full flex items-center justify-center sm:flex sm:items-center sm:justify-center bg-orange-400 rounded-full  z-10"
        >
                

        </motion.div>
        <img src={logoBg} className='w-3/6 flex items-center justify-center sm:w-4/6 z-40'></img>

        
    </motion.div>
}
export default AboutImg