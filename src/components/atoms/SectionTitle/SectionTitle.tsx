import { SectionTitleProps } from "../../../types";
const SectionsTitleWrapper:React.ElementType='div';


const SectionTitle=({sectionTitle}:SectionTitleProps)=>{
    return <SectionsTitleWrapper className="m-4 flex items-center justify-center z-30">
        <p className='text-3xl z-40'>{sectionTitle}</p>
    </SectionsTitleWrapper>
}

export default SectionTitle