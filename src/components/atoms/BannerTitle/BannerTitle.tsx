import {motion} from 'framer-motion'

const BannerTitleWrapper:React.ElementType='div';


interface BannerTitleProps{
    title:string,
}
const BannerTitle=({title}:BannerTitleProps):JSX.Element=>{
    return <BannerTitleWrapper className="w-full">
        
       { title.split('').map((letter,i)=>{
        return <motion.span className="text-5xl" 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1, repeat: Infinity, repeatType: "reverse",delay:i*0.01}}
        >{letter}</motion.span>
       })}
    </BannerTitleWrapper>
}

export default BannerTitle