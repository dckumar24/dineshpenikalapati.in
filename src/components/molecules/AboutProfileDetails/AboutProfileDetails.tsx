import { useContext } from "react";
import AboutDesc from "../../atoms/AboutDesc/AboutDesc";
import AboutProfileTable from "../../atoms/AboutProfileTable/AboutProfileTable";
import AboutTitle from "../../atoms/AboutTitle/AboutTitle";
import {motion} from   "framer-motion"
import { ThemeContext } from "../../../context/ThemeContext";
import { isMobile } from "../../../utils";

const AboutProfileDetailsWrapper:React.ElementType='div';



const AboutProfileDetails=()=>{

    const {theme}=useContext(ThemeContext)
    return<AboutProfileDetailsWrapper className={`${isMobile()?`mt-10`:``} relative w-full p-4 flex flex-col items-start justify-center sm:w-10/12 sm:flex sm:flex-col sm:items-start sm:justify-center z-40 ${theme==="light"?`bg-yellow-300 rounded-2xl shadow-lg shadow-stone-500`:`bg-purple-900 shadow-xl rounded-2xl shadow-black`}`} >
          <motion.div
        initial={{scale:1}}
    animate={{x:110}}
        transition={{duration:1,repeat:Infinity,repeatType:'reverse',
        ease: "circInOut",

        }}
        className={`absolute ${isMobile()?`top-4 left-1`:`top-11 left-5`}  w-10 h-10  bg-orange-500 opacity-50  rounded-full `}
        >
                

        </motion.div>
        <AboutTitle aboutTitle="Biography"/>
        <AboutDesc aboutDesc="I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences."/>
        <AboutProfileTable></AboutProfileTable>

    </AboutProfileDetailsWrapper>
   
}
export default AboutProfileDetails