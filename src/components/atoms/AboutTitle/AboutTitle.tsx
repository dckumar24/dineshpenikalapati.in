const AboutTitleWrapper:React.ElementType='div';
interface AboutTitleProps{
    aboutTitle:string
}

const AboutTitle=({aboutTitle}:AboutTitleProps)=>{
    return <AboutTitleWrapper className=" relative mb-4 sm:p-4 sm:mb-0">


        <div className='z-1000'><p className="text-3xl">{aboutTitle}</p></div>
    </AboutTitleWrapper>
}

export default AboutTitle