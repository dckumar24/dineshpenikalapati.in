"use client";
import { motion } from "framer-motion";
import AnimText from "../../atoms/TextAnimation/TextAnimation";
import { reactLogo } from "../../../assets/skilllogos";
import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import { RefsContext } from "../../../context/RefsContext";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function A4Animation() {

    //get theme from context
    const {theme}=useContext(ThemeContext)
    const {homeRef} =useContext(RefsContext)



  return (
    <motion.div id="home" ref={homeRef} className=" flex w-10/12 min-w-80 select-none items-center justify-center sm:flex sm:w-1/2 sm:max-w-xl sm:select-none sm:items-center sm:justify-center ">
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className={` flex flex-col w-10/12 min-w-80 sm:min-w-full p-2  rounded-2xl  shadow-xl sm:flex  sm:flex-col sm:rounded-2xl sm:p-2   sm:shadow-xl ${theme==="light"?"shadow-slate-900 bg-stone-950 text-black sm:shadow-slate-600 sm:bg-black sm:text-black":"shadow-black bg-[#000000] text-white-700 sm:shadow-black sm:bg-[#000000]  sm:text-white-700"}`}
      >
        <motion.div
          variants={itemVariants}
          className="flex item space-x-2 sm:flex sm:items-center sm:space-x-2"
        >
          {/* <DocumentTextIcon className="h-8 w-8 text-indigo-700" /> */}
          <span className="text-white flex justify-between items-center sm:text-white sm:flex sm:justify-between sm:items-center"><motion.img initial={{opacity: 1, rotate:0}} animate={{rotate:[0,90,180,270,360,0]}} transition={{duration: 3,repeat: Infinity,repeatType: "loop"}} className="w-7 h-7 mr-1 sm:w-7 sm:h-7 sm:mr-1" src={reactLogo} alt="dinesh.tsx react"></motion.img><b className="text-green-400 sm:text-green-400">DineshDetails.tsx</b></span>
        </motion.div>
      
        <motion.span
          variants={itemVariants}
          className={`inline h-full w-full p-2 text-lg text-white sm:inline sm:h-full sm:w-full sm:p-8 sm:text-lg sm:text-white `}
        >
          <AnimText delay={1} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
