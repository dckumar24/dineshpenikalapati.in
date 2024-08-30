import { SectionTitleProps } from "../../../types";
const SectionsTitleWrapper:React.ElementType='div';


const SectionTitle=({sectionTitle}:SectionTitleProps)=>{
    return <SectionsTitleWrapper className="m-4 flex items-center justify-center">
        <p className='text-3xl'>{sectionTitle}</p>
    </SectionsTitleWrapper>
}

export default SectionTitle