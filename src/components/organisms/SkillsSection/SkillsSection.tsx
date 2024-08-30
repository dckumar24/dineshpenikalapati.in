import SkillRows from "../../molecules/SkillRows/SkillsRows";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import RoboChat from "../../atoms/RoboChat/RoboChat";
import { useEffect } from "react";
const SkillsSectionWrapper:React.ElementType='div';
const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y:100}
  };

const SkillsSection=()=>{

    const control = useAnimation()
   
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);
    
    return <motion.div
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
       <SkillsSectionWrapper  className="h-1/2 flex justify-between">
        <SkillRows></SkillRows>
       <RoboChat></RoboChat>
    </SkillsSectionWrapper>
    </motion.div>
}

export default SkillsSection