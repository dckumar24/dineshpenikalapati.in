const BannerCaptionWrapper:React.ElementType='div';

interface BannerCaptionProps{
    caption:string,
}
const BannerCaption=({caption}:BannerCaptionProps):JSX.Element=>{
    return <BannerCaptionWrapper className="w-full">
        <p className="text-2xl" >{caption}</p>
    </BannerCaptionWrapper>
}

export default BannerCaption