import HeroSection from '../HeroSection/HeroSection';

const BannerLogoWrapper:React.ElementType='div';

const BannerLogo=()=>{
    return <BannerLogoWrapper className='w-1/2 ml-8 flex h-3/4 items-center justify-center'>
        {/* <img src={logoImg} className=' w-1/2 h-3/4'></img> */}
        <HeroSection></HeroSection>
    </BannerLogoWrapper>
}

export default BannerLogo