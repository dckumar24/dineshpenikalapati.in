const BannerDescWrapper:React.ElementType='div';
interface BanenrDescProps{
    desc:string;
}

const BannerDesc=({desc}:BanenrDescProps):JSX.Element=>{
    return <BannerDescWrapper className="w-full">
        <p className=" text-xl">{desc}</p>
    </BannerDescWrapper>
}

export default BannerDesc