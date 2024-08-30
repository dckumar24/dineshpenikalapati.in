import AboutDesc from "../../atoms/AboutDesc/AboutDesc";
import AboutProfileTable from "../../atoms/AboutProfileTable/AboutProfileTable";
import AboutTitle from "../../atoms/AboutTitle/AboutTitle";

const AboutProfileDetailsWrapper:React.ElementType='div';



const AboutProfileDetails=()=>{
    return<AboutProfileDetailsWrapper className="w-10/12 flex flex-col items-start justify-center" >
        <AboutTitle aboutTitle="Biography"/>
        <AboutDesc aboutDesc="I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences."/>
        <AboutProfileTable></AboutProfileTable>

    </AboutProfileDetailsWrapper>
   
}
export default AboutProfileDetails