import NavBar from "../../molecules/NavBar/NavBar";

const HeaderWrapper:React.ElementType='div';
const Header=()=>{
    return <HeaderWrapper className="w-screen sm:h-screen sm:fixed sm:left-0 sm:flex sm:items-start sm:w-1/12 z-90">
        <NavBar></NavBar>
    </HeaderWrapper>
}

export default Header;