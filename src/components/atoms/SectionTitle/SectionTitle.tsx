import {motion} from 'framer-motion'
import { SectionTitleProps } from "../../../types";
import { isMobile } from "../../../utils";
const SectionsTitleWrapper:React.ElementType='div';


const SectionTitle=({sectionTitle,xValue}:SectionTitleProps)=>{
    return <SectionsTitleWrapper className="m-4  flex items-center justify-center z-30">


        <div className="z-40 relative">
        <motion.div
        initial={{x:0}}
    animate={{x:xValue}}
        transition={{duration:1,repeat:Infinity,repeatType:'reverse',
        ease: "backInOut",

        }}
        className={`absolute ${isMobile()?`top-0 left-0`:`top-0 left-0 `} w-10 h-10 z-0  bg-orange-500 opacity-50  rounded-full `}
        >
                

        </motion.div>
        <p className='text-3xl relative z-40'>{sectionTitle}</p> 
        </div>
    </SectionsTitleWrapper>
}

export default SectionTitle