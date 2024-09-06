import About from "../../organisms/About/About";
import Banner from "../../organisms/Banner/Banner";
import ExpEduSection from "../../organisms/ExpEduSection/ExpEduSection";
import SkillsSection from "../../organisms/SkillsSection/SkillsSection";
import workLogo from '../../../assets/coding-bro.svg'
import studyLogo from '../../../assets/study-bro.svg'
import { companies, educations } from "../../../data";
import { RoboChatProvider } from "../../../context/RoboCharContext";
import { isMobile } from "../../../utils";

const HomeWrapper:React.ElementType='div';
const Home=():JSX.Element=>{
    return <HomeWrapper className="w-full sm:w-full sm:p-4">
        <Banner/>
        <About/>
        <RoboChatProvider>
            <SkillsSection></SkillsSection>
        </RoboChatProvider>
        
        <ExpEduSection sectionTitle="Work Experience" orgs={companies} imgLogo={workLogo} alignFlag={false} xValue={isMobile() ? 180:180}></ExpEduSection>
        <ExpEduSection sectionTitle="Education" orgs={educations} alignFlag={true} imgLogo={studyLogo} xValue={isMobile() ? 100:100}></ExpEduSection>
    </HomeWrapper>
}

export default Home;