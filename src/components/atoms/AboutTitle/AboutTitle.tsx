const AboutTitleWrapper:React.ElementType='div';
interface AboutTitleProps{
    aboutTitle:string
}

const AboutTitle=({aboutTitle}:AboutTitleProps)=>{
    return <AboutTitleWrapper className="mb-4 sm:p-4 sm:mb-0">
        <p className="text-3xl">{aboutTitle}</p>
    </AboutTitleWrapper>
}

export default AboutTitle