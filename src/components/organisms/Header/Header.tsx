import NavBar from "../../molecules/NavBar/NavBar";

const HeaderWrapper:React.ElementType='div';
const Header=()=>{
    return <HeaderWrapper className=" h-screen fixed left-0 flex items-start w-1/12">
        <NavBar></NavBar>
    </HeaderWrapper>
}

export default Header;