import BannerLogo from "../../atoms/BannerLogo/BannerLogo";
import A4Animation from "../../molecules/A4Animation/A4Animation";
const BannerWrapper:React.ElementType='div';



const Banner=():JSX.Element=>{
    return <BannerWrapper className="flex items-center justify-between h-screen ">
       <A4Animation></A4Animation>
       <BannerLogo></BannerLogo>
    </BannerWrapper>
}

export default Banner