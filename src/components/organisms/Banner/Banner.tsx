import BannerLogo from "../../atoms/BannerLogo/BannerLogo";
import A4Animation from "../../molecules/A4Animation/A4Animation";
const BannerWrapper:React.ElementType='div';



const Banner=():JSX.Element=>{
    return <BannerWrapper className="z-80 flex items-center flex-col-reverse justify-end mt-5 sm:flex-row h-full mb-4 min-h-[800px] sm:mb-0 sm:min-h-screen sm:flex sm:items-center sm:justify-between sm:h-screen ">
       <A4Animation></A4Animation>
       <BannerLogo></BannerLogo>
    </BannerWrapper>
}

export default Banner