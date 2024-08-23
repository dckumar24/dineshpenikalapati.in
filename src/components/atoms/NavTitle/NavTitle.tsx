interface NavTitleProps{
    title:string;

}

const NavTitle=({title=''}:NavTitleProps)=>{
    return <p>{title}</p>
}

export default NavTitle;