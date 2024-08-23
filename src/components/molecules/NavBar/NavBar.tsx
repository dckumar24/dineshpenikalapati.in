import { NAVLABELS } from "../../../constants";
import NavLink from "../../atoms/NavLink/NavLink";
import NavTitle from "../../atoms/NavTitle/NavTitle";

const NavBarWrapper:React.ElementType='div';
const NavLinksWrapper:React.ElementType='div';

const NavBar=()=>{
    return  <NavBarWrapper className="navbar">
        <NavTitle title={'Dinesh Penikalapati'}></NavTitle>
        <NavLinksWrapper className="nav-links">
            {NAVLABELS.map(navLink=>{
                return <NavLink label={navLink}></NavLink>
            })}
        </NavLinksWrapper>
       
    </NavBarWrapper>
}

export default NavBar