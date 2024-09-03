import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImg from "../../atoms/AboutImg/AboutImg";
import AboutProfileDetails from "../../molecules/AboutProfileDetails/AboutProfileDetails";
import { useEffect } from "react";
import { isMobile } from "../../../utils";

const AboutWrapper:React.ElementType='div';

const boxVariant = {
    visible: { opacity: 1, y:isMobile() ? -200:-50, x:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y:100,x:-100}
  };
const About=():JSX.Element=>{

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
    ><AboutWrapper className="relative flex flex-col sm:flex-row justify-between h-3/5 mb-10 sm:flex sm:justify-between sm:h-3/5 sm:mb-10" >
     
       
        <AboutImg ></AboutImg>
        <AboutProfileDetails></AboutProfileDetails>
    </AboutWrapper>
    </motion.div>
}
export default About