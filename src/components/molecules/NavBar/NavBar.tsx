
import { useContext } from "react";
import { RefsContext } from "../../../context/RefsContext";
import NavLink from "../../atoms/NavLink/NavLink";
import NavTitle from "../../atoms/NavTitle/NavTitle";
import { FaLaptopCode ,FaHouseChimney,FaBriefcase,FaGraduationCap  } from "react-icons/fa6";
const NavBarWrapper:React.ElementType='div';
const NavLinksWrapper:React.ElementType='div';

const NavBar=()=>{

    const {homeRef,skillsRef,experienceRef,educationRef}=useContext(RefsContext)
    return  <NavBarWrapper className="flex flex-col items-center justify-center h-screen w-full">
        <NavTitle></NavTitle>
        <NavLinksWrapper className="flex flex-col items-center justify-evenly w-full h-screen ">
            <NavLink label={<FaHouseChimney className="size-6 "></FaHouseChimney>} refLink={ homeRef} ></NavLink>
            <NavLink label={<FaLaptopCode className="size-6 "></FaLaptopCode>} refLink={skillsRef} ></NavLink>
            <NavLink label={<FaBriefcase className="size-6 "></FaBriefcase>} refLink={experienceRef} ></NavLink>
            <NavLink label={<FaGraduationCap className="size-6 "></FaGraduationCap>} refLink={educationRef} ></NavLink>
         
        </NavLinksWrapper>
       
    </NavBarWrapper>
}

export default NavBar