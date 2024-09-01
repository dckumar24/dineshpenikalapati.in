const AboutDescWrapper:React.ElementType='div'

interface AboutDescProps{
    aboutDesc:string;
}

const AboutDesc=({aboutDesc}:AboutDescProps)=>{
    return <AboutDescWrapper className="text-justify text-sm sm:text-lg sm:pl-4">
        <p >{aboutDesc}</p>
    </AboutDescWrapper>
}

export default AboutDesc
