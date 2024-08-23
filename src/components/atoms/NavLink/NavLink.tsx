const NavLinkWrapper:React.ElementType='div';

interface NavLinkProps{
    label:string;
}

const NavLink=({label}:NavLinkProps):JSX.Element=>{
    return <NavLinkWrapper>
        <p>{label}</p>
    </NavLinkWrapper>
}
export default NavLink