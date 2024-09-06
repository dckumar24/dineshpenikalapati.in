import {motion} from 'framer-motion'
import { isMobile } from '../../../utils';

import githubLogo from '../../../assets/gitHub.svg';
import linkedInLogo from '../../../assets/linkedIn.svg';
import twitterLogo from '../../../assets/twitter.svg';
import redditLogo from '../../../assets/reddit.svg';
const AboutTitleWrapper:React.ElementType='div';
interface AboutTitleProps{
    aboutTitle:string
}

const AboutTitle=({aboutTitle}:AboutTitleProps)=>{
    return <AboutTitleWrapper className=" relative mb-4 sm:p-4 sm:mb-0 w-full">


        <div className=' flex justify-between'>
        <motion.div
        initial={{scale:1}}
    animate={{x:110}}
        transition={{duration:1,repeat:Infinity,repeatType:'reverse',
        ease: "circInOut",

        }}
        className={`absolute ${isMobile()?`top-0 -left-1`:`top-4 left-0`}  w-10 h-10  bg-orange-500 opacity-50  rounded-full z-0 `}
        >
                

        </motion.div>
            <div className='z-40 relative'> 
            <p className="text-3xl">{aboutTitle}</p>
                </div>

                <motion.div className={` flex justify-between `}>
                    <motion.div 
                    
                
                    className={`flex justify-between`}>
                         <div className="w-8 h-8 ml-4 bg-transparent   shadow-md shadow-black">
                            <img className="" src={linkedInLogo} alt=""></img>
                        </div>
                        <div className="w-8 h-8 ml-4 bg-white rounded-full shadow-md shadow-black">
                            <img src={githubLogo} alt=""></img>
                        </div>
                       
                    </motion.div>
                    <motion.div 
                
                    className="flex justify-between">
                        <div className="w-8 h-8 ml-4  rounded-full bg-transparent  shadow-md shadow-black">
                            <img src={redditLogo} alt=""></img>
                        </div>
                        <div className="w-8 h-8 ml-4 bg-transparent  rounded-full shadow-md shadow-black ">
                            <img className="rounded-full" src={twitterLogo} alt=""></img>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
    </AboutTitleWrapper>
}

export default AboutTitle