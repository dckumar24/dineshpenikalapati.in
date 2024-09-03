import { useContext } from "react";
import VariantA from "./components/templates/VariantA/VariantA"
import { ThemeContext } from "./context/ThemeContext";

const AppWrapper:React.ElementType='div';

function App() {

  const {theme}=useContext(ThemeContext)


  return (
    
    <AppWrapper className={theme==='dark'?' bg-[#1e1e1e] text-white':' text-black bg-slate-100'}>

        <VariantA ></VariantA> 
        
    </AppWrapper>
 
  )
}

export default App
