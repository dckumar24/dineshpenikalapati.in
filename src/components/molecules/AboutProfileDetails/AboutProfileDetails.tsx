import { useContext } from "react";
import AboutDesc from "../../atoms/AboutDesc/AboutDesc";
import AboutProfileTable from "../../atoms/AboutProfileTable/AboutProfileTable";
import AboutTitle from "../../atoms/AboutTitle/AboutTitle";
import { ThemeContext } from "../../../context/ThemeContext";
import { isMobile } from "../../../utils";

const AboutProfileDetailsWrapper:React.ElementType='div';



const AboutProfileDetails=()=>{

    const {theme}=useContext(ThemeContext)
    return<AboutProfileDetailsWrapper className={`${isMobile()?`mt-10`:``} w-full p-4 flex flex-col items-start justify-center sm:w-10/12 sm:flex sm:flex-col sm:items-start sm:justify-center z-40 ${theme==="light"?`bg-yellow-300 rounded-2xl shadow-lg shadow-stone-500`:`bg-purple-900 shadow-xl rounded-2xl shadow-black`}`} >
        
        <AboutTitle aboutTitle="Biography"/>
        <AboutDesc aboutDesc="I’m Dinesh Kumar Penikalapati, an experienced Frontend Developer with 5 years of expertise in building dynamic and high-performance web applications. My primary focus is on leveraging technologies such as React.js, Redux, JavaScript, TypeScript, SASS, and more to craft responsive and scalable user interfaces."/>
        <AboutProfileTable></AboutProfileTable>

    </AboutProfileDetailsWrapper>
   
}
export default AboutProfileDetails