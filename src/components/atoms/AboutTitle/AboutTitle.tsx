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
                          <a href='https://www.linkedin.com/in/penikalapatidineshkumar/' target='_blank'><img className="" src={linkedInLogo} alt="linkedin logo" ></img></a>  
                        </div>
                        <div className="w-8 h-8 ml-4 bg-white rounded-full shadow-md shadow-black">
                            <a href='https://github.com/dckumar24' target='_blank'><img src={githubLogo} alt="github logo"></img></a>
                        </div>
                       
                    </motion.div>
                    <motion.div 
                
                    className="flex justify-between">
                        <div className="w-8 h-8 ml-4  rounded-full bg-transparent  shadow-md shadow-black">
                           <a href='https://www.reddit.com/user/dc0439/' target='_blank'> <img src={redditLogo} alt="reddit logo"></img></a>
                        </div>
                        <div className="w-8 h-8 ml-4 bg-transparent  rounded-full shadow-md shadow-black ">
                            <a href='https://x.com/90sSapien' target='_blank'><img className="rounded-full" src={twitterLogo} alt="twitter logo"></img></a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
    </AboutTitleWrapper>
}

export default AboutTitle