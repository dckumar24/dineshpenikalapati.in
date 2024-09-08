import BannerTitle from "../../atoms/BannerTitle/BannerTitle.tsx";
import {profileData} from '../../../../__mock__/profileData.ts';
import BannerDesc from "../../atoms/BannerDesc/BannerDesc.tsx";
import BannerGreet from "../../atoms/BannerGreet/BannerGreet.tsx";
import BannerCaption from "../../atoms/BannerCaption/BannerCaption.tsx";

const BannerInfoWrapper:React.ElementType='div';


const BannerInfo=():JSX.Element=>{
    return <BannerInfoWrapper className="xl:w-6/12 sm:w-6/12 sm:ml-0 flex items-center justify-start flex-col p-4 pl-1  font-bold font-mono text-left w-1/2 2xl:w-1/2 ">
            <BannerGreet greet={profileData.bannerGreet}></BannerGreet>
            <BannerTitle title={profileData.bannerTitle}/>
            <BannerCaption caption={profileData.bannerCaption}></BannerCaption>
            <BannerDesc desc={profileData.bannerDesc}></BannerDesc>
            
        </BannerInfoWrapper>
}

export default BannerInfo