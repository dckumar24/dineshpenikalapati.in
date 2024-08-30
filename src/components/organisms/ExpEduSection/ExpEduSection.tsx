import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import ExpTile from "../../molecules/ExpTile/ExpTile";
import { ExpEduSectionProps } from "../../../types";
import { useContext, useEffect } from "react";
import { RefsContext } from "../../../context/RefsContext";

const ExpEduSectionWrapper:React.ElementType='div';

const boxVariant = {
    visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y:100}
  };


const ExpEduSection=({sectionTitle,orgs,imgLogo,alignFlag}:ExpEduSectionProps)=>{


    const {experienceRef,educationRef}=useContext(RefsContext)
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
    ><ExpEduSectionWrapper id={!alignFlag?'experience':'education'} ref={!alignFlag?experienceRef:educationRef} className={`h-full flex flex-col items-stretch justify-center my-10`}>
        
        <div className={`flex justify-between ${alignFlag?'flex-row-reverse':''}`}>
            <div className="w-5/12 flex items-center justify-center">
              <img src={imgLogo} className="w-3/4 h-full"></img>
            </div>
            <div className="w-7/12 flex  flex-col items-stretch justify-center">
            <SectionTitle sectionTitle={sectionTitle}></SectionTitle>
            {
                orgs.map((org,index)=><ExpTile orgName={org.orgName} roles={org.roles} location={org.location} key={`exp-${org.orgName}-${index}`} ></ExpTile>)
            }
            </div>
        </div>
    </ExpEduSectionWrapper>
    </motion.div>
}

export default ExpEduSection