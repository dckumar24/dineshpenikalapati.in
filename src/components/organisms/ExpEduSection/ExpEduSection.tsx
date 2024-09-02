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
    ><ExpEduSectionWrapper id={!alignFlag?'experience':'education'} ref={!alignFlag?experienceRef:educationRef} className={`p-4 h-full flex items-stretch justify-center sm:h-full sm:flex sm:flex-col sm:items-stretch sm:justify-center sm:p-0 sm:my-10 `}>
        
        <div className={`sm:flex w-full sm:m-0 sm:justify-between ${alignFlag?'sm:flex-row-reverse':''}`}>
            <div className="m-4 sm:m-4 sm:w-5/12 sm:flex sm:items-center sm:justify-center">
              <img src={imgLogo} className="sm:w-3/4 sm:h-full"></img>
            </div>
            <div className="sm:w-7/12 sm:flex  sm:flex-col sm:items-stretch sm:justify-center">
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