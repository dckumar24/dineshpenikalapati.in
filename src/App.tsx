import { useContext } from "react";
import VariantA from "./components/templates/VariantA/VariantA"
import { ThemeContext } from "./context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

const AppWrapper:React.ElementType='div';

function App() {

  const {theme}=useContext(ThemeContext)


  return (
    
    <AppWrapper className={theme==='dark'?' bg-[#1e1e1e] text-white':' text-black bg-slate-100'}>
<SpeedInsights></SpeedInsights>
<Analytics></Analytics>

        <VariantA ></VariantA> 
        
    </AppWrapper>
 
  )
}

export default App
