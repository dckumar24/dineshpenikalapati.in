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
    <motion.div id="home" ref={homeRef} className="flex w-1/2 max-w-xl select-none items-center justify-center ">
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className={`flex  flex-col rounded-2xl p-2  border-4 border-slate-700 shadow-xl ${theme==="light"?"shadow-slate-400 bg-slate-700 text-black":"shadow-yellow-300 bg-white-700 text-white-700"}`}
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2"
        >
          {/* <DocumentTextIcon className="h-8 w-8 text-indigo-700" /> */}
          <span className="text-white flex justify-between items-center"><motion.img initial={{opacity: 1, rotate:0}} animate={{rotate:[0,90,180,270,360,0]}} transition={{duration: 3,repeat: Infinity,repeatType: "loop"}} className="w-7 h-7 mr-1" src={reactLogo} alt="dinesh.tsx react"></motion.img><b className="text-green-400">DineshDetails.tsx</b></span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <div className="mt-2 flex space-x-4 rounded-full bg-slate-100 px-8 text-slate-700">
            <strong>B</strong>
            <span className="font-italic">I</span>
            <span className="underline">U</span>
            <strong className="underline">A</strong>
          </div>
        </motion.div>
        <motion.span
          variants={itemVariants}
          className="inline h-full w-full p-8 text-lg text-white"
        >
          <AnimText delay={1} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
