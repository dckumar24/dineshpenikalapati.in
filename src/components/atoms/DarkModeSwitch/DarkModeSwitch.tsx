import { useContext } from 'react';
import day from '../../../assets/day.svg';
import night from '../../../assets/night.svg'
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeSwitchWrapper:React.ElementType='div';

const DarkModeSwitch=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    return <DarkModeSwitchWrapper className="fixed right-4 cursor-pointer z-50" onClick={toggleTheme}>
        
                <img src={theme=='dark'?night:day} className="w-12 h-12 m-4"></img>
            
    </DarkModeSwitchWrapper>
}

export default DarkModeSwitch;