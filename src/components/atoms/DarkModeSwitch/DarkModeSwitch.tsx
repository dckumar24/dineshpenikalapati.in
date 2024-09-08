import { useContext } from 'react';
import day from '../../../assets/day.svg';
import night from '../../../assets/night.svg'
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeSwitchWrapper:React.ElementType='div';

const DarkModeSwitch=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    return <DarkModeSwitchWrapper className="flex justify-end absolute top-3 right-3 sm:fixed sm:right-4 sm:cursor-pointer sm:z-50" onClick={toggleTheme}>
        
                <img src={theme=='dark'?night:day} className="w-7 h-7 sm:w-12 sm:h-12 sm:m-4"></img>
            
    </DarkModeSwitchWrapper>
}

export default DarkModeSwitch;