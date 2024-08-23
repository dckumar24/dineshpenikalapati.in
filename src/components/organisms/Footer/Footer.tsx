import FooterDetails from "../../atoms/FooterDetails/FooterDetails";
const FooterWrapper:React.ElementType='div';

const Footer=():JSX.Element=>{
  return <FooterWrapper>
    <FooterDetails content="Developed by DC with ❤️ and ⌨️" year={2024}></FooterDetails>
  </FooterWrapper>  

}

export default Footer