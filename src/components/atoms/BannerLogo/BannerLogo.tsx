import HeroSection from '../HeroSection/HeroSection';

const BannerLogoWrapper:React.ElementType='div';

const BannerLogo=()=>{
    return <BannerLogoWrapper className='w-full h-fullflex justify-center sm:w-1/2 sm:ml-8 sm:flex sm:h-3/4 sm:items-center sm:justify-center'>
        <HeroSection></HeroSection>
    </BannerLogoWrapper>
}

export default BannerLogo