import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImg from "../../atoms/AboutImg/AboutImg";
import AboutProfileDetails from "../../molecules/AboutProfileDetails/AboutProfileDetails";
import { useEffect } from "react";

const AboutWrapper:React.ElementType='div';

const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y:100}
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
    ><AboutWrapper className="flex justify-between h-3/5 mb-10" >
       
        <AboutImg ></AboutImg>
        <AboutProfileDetails></AboutProfileDetails>
    </AboutWrapper>
    </motion.div>
}
export default About