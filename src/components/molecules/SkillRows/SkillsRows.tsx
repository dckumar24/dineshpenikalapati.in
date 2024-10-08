import SkillLogo from "../../atoms/SkillLogo/SkillLogo";
import { 
  reactLogo,
  reduxLogo,
  javaScript,
  typeScript,
  python,
  tailwindCss,
  sassLogo,
  htmlLogo,
  cssLogo,
  jestLogo,
  reactTL,
  webpackLogo,
  npmLogo,
  gitLogo,
  postman,
  eslint,
  vscode,
  copilot
} from "../../../assets/skilllogos";
import { skillsInfo } from '../../../../__mock__/skillsData'
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import { RefsContext } from "../../../context/RefsContext";
import { useContext } from "react";
import { isMobile } from "../../../utils";

const SkillRowsWrapper:React.ElementType='div';


const SkillRows=()=>{

  const {skillsRef}=useContext(RefsContext)
    return <SkillRowsWrapper className=" sm:w-8/12 sm:h-auto">

      <SkillRowsWrapper ref={skillsRef} className="relative">
    
        <SectionTitle sectionTitle="Technologies and Tools" xValue={isMobile() ? 260:270}></SectionTitle>
        <SkillRowsWrapper className=" flex items-center justify-between p-4 sm:flex sm:items-center sm:justify-between sm:p-4">
            <SkillLogo skillLogo={reactLogo} {...skillsInfo.react} ></SkillLogo>
            <SkillLogo skillLogo={reduxLogo} {...skillsInfo.redux}></SkillLogo>
            <SkillLogo skillLogo={javaScript} {...skillsInfo.javascript}></SkillLogo>
            <SkillLogo skillLogo={typeScript} {...skillsInfo.typescript}></SkillLogo>
            <SkillLogo skillLogo={python} {...skillsInfo.python}></SkillLogo>
            <SkillLogo skillLogo={tailwindCss} {...skillsInfo.tailwind}></SkillLogo>

        </SkillRowsWrapper>
        <SkillRowsWrapper className=" flex items-center justify-between p-4 sm:flex sm:items-center sm:justify-between sm:p-4">
            
            <SkillLogo skillLogo={sassLogo} {...skillsInfo.sass}></SkillLogo>
            <SkillLogo skillLogo={htmlLogo} {...skillsInfo.html}></SkillLogo>
            <SkillLogo skillLogo={cssLogo} {...skillsInfo.css}></SkillLogo>
            <SkillLogo skillLogo={jestLogo} {...skillsInfo.jest}></SkillLogo>
            <SkillLogo skillLogo={reactTL}  {...skillsInfo.reactTestingLibrary}></SkillLogo>
            <SkillLogo skillLogo={webpackLogo} {...skillsInfo.webpack}></SkillLogo>
        </SkillRowsWrapper>
        <SkillRowsWrapper className="flex items-center justify-between p-4 sm:flex sm:items-center sm:justify-between sm:p-4">
            <SkillLogo skillLogo={npmLogo} {...skillsInfo.npm}></SkillLogo>
            <SkillLogo skillLogo={gitLogo} {...skillsInfo.git}></SkillLogo>
            <SkillLogo skillLogo={postman} {...skillsInfo.postman}></SkillLogo>
            <SkillLogo skillLogo={eslint} {...skillsInfo.eslint}></SkillLogo>
            <SkillLogo skillLogo={vscode} {...skillsInfo.vscode}></SkillLogo>
            <SkillLogo skillLogo={copilot} {...skillsInfo.copilot}></SkillLogo>
        </SkillRowsWrapper>
      </SkillRowsWrapper>

     
      
    </SkillRowsWrapper>
}

export default SkillRows;