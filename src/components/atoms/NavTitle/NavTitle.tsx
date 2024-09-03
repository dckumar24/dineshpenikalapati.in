import { useContext } from 'react'
import signLogo from '../../../assets/Sign.svg'
import signBlack from '../../../assets/sign-black.svg'
import { ThemeContext } from '../../../context/ThemeContext'
const NavTitleWrapper:React.ElementType='div';

const NavTitle=()=>{

    const {theme}=useContext(ThemeContext)
    return <NavTitleWrapper className='w-1/5 h-full m-2 sm:w-auto sm:h-auto sm:m-0'>
        <img src={theme=='light'?signBlack:signLogo} className={`font-serif font-bold h-full w-full sm:pt-4 sm:text-xl sm:ml-4 sm:left-7 ${theme=='light'?"sm:w-10/12":"sm:w-full"}`}></img>
        </NavTitleWrapper>
}

export default NavTitle;