import TableData from "../TableData/TableData";

const AboutProfileTableWrapper:React.ElementType='div';

const AboutProfileTableLeftWrapper:React.ElementType='div';

const AboutProfileTableRightWrapper:React.ElementType='div';


const AboutProfileTable=()=>{
    return <AboutProfileTableWrapper className="flex">
        <AboutProfileTableLeftWrapper>
            <TableData label="Name" value="Dinesh Kumar Penikalapati"></TableData>
            <TableData label="Birthday" value="24th May 1996"></TableData>
            <TableData label="Age" value="28 years"></TableData>
        </AboutProfileTableLeftWrapper>
        <AboutProfileTableRightWrapper className="ml-8">
            <TableData label="Phone" value="+91 8790351056"></TableData>
            <TableData label="Email" value="24th May 1996"></TableData>
            <TableData label="Address" value="Hyderabad, Telangana, India"></TableData>
        </AboutProfileTableRightWrapper>
    </AboutProfileTableWrapper>
}

export default AboutProfileTable
