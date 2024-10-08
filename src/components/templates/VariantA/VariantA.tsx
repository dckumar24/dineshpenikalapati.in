import Home from "../../pages/Home/Home";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import DarkModeSwitch from "../../atoms/DarkModeSwitch/DarkModeSwitch";
const TemplateAWrapper:React.ElementType='div';
const TemplateLayoutWrapper:React.ElementType='div';
const TempalteMainComponentWrapper:React.ElementType='div'



const VariantA=()=>{

    return <TemplateAWrapper  className="app"> 

        <TemplateLayoutWrapper className="flex flex-col sm:flex sm:flex-row">
            <Header></Header>
            <DarkModeSwitch></DarkModeSwitch>
            <TempalteMainComponentWrapper  className="w-full sm:w-full sm:m-0 sm:ml-14 lg:ml-24 xl:ml-28 2xl:ml-32">
                <Home ></Home>
            </TempalteMainComponentWrapper>
            
        </TemplateLayoutWrapper>
        <Footer></Footer>
    </TemplateAWrapper>
}

export default VariantA