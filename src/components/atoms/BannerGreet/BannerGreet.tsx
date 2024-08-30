const BannerGreetWrapper:React.ElementType='div';

interface BannerGreetProps{
    greet:string,
}
const BannerGreet=({greet}:BannerGreetProps):JSX.Element=>{
    return <BannerGreetWrapper className="w-full">
        <p className="text-xl text-left" >{greet}</p>
    </BannerGreetWrapper>
}

export default BannerGreet