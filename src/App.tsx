import { useContext } from "react";
import VariantA from "./components/templates/VariantA/VariantA"
import { ThemeContext } from "./context/ThemeContext";
// import blackHole from './assets/blackhole.webp'
import Confetti from "./components/atoms/Confetti/Confetti";


const AppWrapper:React.ElementType='div';

function App() {

  const {theme}=useContext(ThemeContext)


  return (
    
    <AppWrapper className={theme==='dark'?' text-white':' text-black'}>

      <Confetti></Confetti>
        <VariantA ></VariantA> 
        
    </AppWrapper>
 
  )
}

export default App
