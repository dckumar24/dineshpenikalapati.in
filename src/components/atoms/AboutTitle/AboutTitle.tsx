const AboutTitleWrapper:React.ElementType='div';
interface AboutTitleProps{
    aboutTitle:string
}

const AboutTitle=({aboutTitle}:AboutTitleProps)=>{
    return <AboutTitleWrapper className="p-4">
        <p className="text-3xl">{aboutTitle}</p>
    </AboutTitleWrapper>
}

export default AboutTitle