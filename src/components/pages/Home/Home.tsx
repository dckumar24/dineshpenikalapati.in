import About from "../../organisms/About/About";
import Banner from "../../organisms/Banner/Banner";
import ExpEduSection from "../../organisms/ExpEduSection/ExpEduSection";
import SkillsSection from "../../organisms/SkillsSection/SkillsSection";
import workLogo from '../../../assets/coding-bro.svg'
import studyLogo from '../../../assets/study-bro.svg'
import { companies, educations } from "../../../data";
import { RoboChatProvider } from "../../../context/RoboCharContext";

const HomeWrapper:React.ElementType='div';
const Home=():JSX.Element=>{
    return <HomeWrapper className="w-full p-4">
        <Banner/>
        <About/>
        <RoboChatProvider>
            <SkillsSection></SkillsSection>
        </RoboChatProvider>
        
        <ExpEduSection sectionTitle="Work Experience" orgs={companies} imgLogo={workLogo} alignFlag={false}></ExpEduSection>
        <ExpEduSection sectionTitle="Education" orgs={educations} alignFlag={true} imgLogo={studyLogo}></ExpEduSection>
    </HomeWrapper>
}

export default Home;