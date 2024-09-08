import FooterDetails from "../../atoms/FooterDetails/FooterDetails";
import { profileData } from "../../../../__mock__/profileData";
const FooterWrapper:React.ElementType='div';

const Footer=():JSX.Element=>{
  return <FooterWrapper className=" flex justify-center items-center w-full p-4">
    <FooterDetails content={profileData.footerNote} year={profileData.footerYear}></FooterDetails>
  </FooterWrapper>  

}

export default Footer