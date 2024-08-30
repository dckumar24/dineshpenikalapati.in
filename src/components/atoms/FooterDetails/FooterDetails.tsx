
const FooterDetailsWrapper:React.ElementType='div';

interface FooterDetailsProps{
    content:string;
    year:number;
}

const FooterDetails=({content,year}:FooterDetailsProps):JSX.Element=>{
    return <FooterDetailsWrapper className="font-bold font-mono flex items-center justify-center">
        <p>{content} @{year}</p>
    </FooterDetailsWrapper>
}
export default FooterDetails