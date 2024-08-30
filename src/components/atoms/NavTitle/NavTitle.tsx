import { useContext } from 'react'
import signLogo from '../../../assets/Sign.svg'
import signBlack from '../../../assets/sign-black.svg'
import { ThemeContext } from '../../../context/ThemeContext'

const NavTitle=()=>{

    const {theme}=useContext(ThemeContext)
    return <img src={theme=='light'?signBlack:signLogo} className={`font-serif font-bold pt-4 text-xl relative top-0 left-7 ${theme=='light'?"w-10/12":"w-full"}`}></img>
}

export default NavTitle;