const BannerSkillsWrapper:React.ElementType='div';

interface BannerSkillsProps{
    skills:string,
}
const BannerSkills=({skills}:BannerSkillsProps):JSX.Element=>{
    return <BannerSkillsWrapper className="w-full">
        <p className="text-xl text-left" >{skills}</p>
    </BannerSkillsWrapper>
}

export default BannerSkills