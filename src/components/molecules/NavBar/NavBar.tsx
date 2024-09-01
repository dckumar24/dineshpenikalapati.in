
import { useContext } from "react";
import { RefsContext } from "../../../context/RefsContext";
import NavLink from "../../atoms/NavLink/NavLink";
import NavTitle from "../../atoms/NavTitle/NavTitle";
import { FaLaptopCode ,FaHouseChimney,FaBriefcase,FaGraduationCap  } from "react-icons/fa6";
const NavBarWrapper:React.ElementType='div';
const NavLinksWrapper:React.ElementType='div';

const NavBar=()=>{

    const {homeRef,skillsRef,experienceRef,educationRef}=useContext(RefsContext)
    return  <NavBarWrapper className="flex flex-row items-center sm:flex sm:flex-col  sm:w-screen   sm:items-center sm:justify-center sm:h-screen">
        <NavTitle></NavTitle>
        <NavLinksWrapper className="flex w-full h-full justify-start m-2 item-center sm:flex-col sm:items-center sm:justify-evenly sm:w-full sm:h-screen">
            <NavLink label={<FaHouseChimney className="size-6 "></FaHouseChimney>} refLink={ homeRef} ></NavLink>
            <NavLink label={<FaLaptopCode className="size-6 "></FaLaptopCode>} refLink={skillsRef} ></NavLink>
            <NavLink label={<FaBriefcase className="size-6 "></FaBriefcase>} refLink={experienceRef} ></NavLink>
            <NavLink label={<FaGraduationCap className="size-6 "></FaGraduationCap>} refLink={educationRef} ></NavLink>
         
        </NavLinksWrapper>
       
    </NavBarWrapper>
}

export default NavBar