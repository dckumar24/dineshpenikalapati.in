const NavLinkWrapper:React.ElementType='div';

interface NavLinkProps{
    label:JSX.Element;
    refLink:React.RefObject<HTMLDivElement>|null
}

const NavLink=({label,refLink}:NavLinkProps):JSX.Element=>{
    return <NavLinkWrapper className="p-4">
       <div onClick={()=>refLink?.current?.scrollIntoView({behavior:'smooth'})}>{label}</div>
    </NavLinkWrapper>
}
export default NavLink