const FooterDetailsWrapper:React.ElementType='div';

interface FooterDetailsProps{
    content:string;
    year:number;
}

const FooterDetails=({content,year}:FooterDetailsProps):JSX.Element=>{
    return <FooterDetailsWrapper>
        <p>{content} @{year}</p>
    </FooterDetailsWrapper>
}
export default FooterDetails