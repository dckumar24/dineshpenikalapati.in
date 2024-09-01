import {motion} from 'framer-motion'
import { ThemeContext } from '../../../context/ThemeContext';
import { useContext } from 'react';
const ConfettiWrapper:React.ElementType='div';

//function to convert number to binary
function toBinary(num:number){
    return num.toString(2)
}


const Confetti=()=>{

    const {theme}=useContext(ThemeContext)
    return <ConfettiWrapper className={` fixed grid grid-cols-10 h-screen w-screen z-10 ${ theme==='dark'?'bg-black text-white':'bg-white text-black'}`}>

        {
            //create list of number from one to 100
            Array.from(Array(100).keys()).map((item,index)=>{
                return <motion.div
                key={`confetti-${index}`}
                // initial={{opacity:0, scale:0}}
                // animate={{opacity:1, scale:1}}
                // transition={{duration:1, repeat:Infinity, repeatType:'reverse'}}
                className=' '
                >
                  <motion.div
                  className={`opacity-40`}
                  initial={{ x:index}}
                  animate={{ scale:1, x:index+50}}
                  transition={{duration:1, repeat:Infinity, repeatType:'loop', delay:index*0.2}}
                  >
                    {toBinary(index)}
                  </motion.div>
                </motion.div>
            })

        }


    </ConfettiWrapper>
}

export default Confetti
