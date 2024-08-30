
import { motion } from "framer-motion";
const TextCursorWrapper:React.ElementType='span';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};


const TextCursor=():JSX.Element=>{
    return <TextCursorWrapper className="text-cursor">
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
            />

    </TextCursorWrapper>
}

export default TextCursor
