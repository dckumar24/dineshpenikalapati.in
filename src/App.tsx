import { useContext } from "react";
import VariantA from "./components/templates/VariantA/VariantA"
import { ThemeContext } from "./context/ThemeContext";

const AppWrapper:React.ElementType='div';

function App() {

  const {theme}=useContext(ThemeContext)

  return (
    
    <AppWrapper className={theme==='dark'?'bg-black text-white':'bg-white text-black'}>
   <VariantA></VariantA>
    </AppWrapper>
 
  )
}

export default App
