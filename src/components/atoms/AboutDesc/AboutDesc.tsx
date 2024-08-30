const AboutDescWrapper:React.ElementType='div'

interface AboutDescProps{
    aboutDesc:string;
}

const AboutDesc=({aboutDesc}:AboutDescProps)=>{
    return <AboutDescWrapper className="pl-4">
        <p className="text-sm">{aboutDesc}</p>
    </AboutDescWrapper>
}

export default AboutDesc
