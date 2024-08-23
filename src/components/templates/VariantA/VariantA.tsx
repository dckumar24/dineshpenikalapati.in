import Home from "../../pages/Home/Home";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
const TemplateAWrapper:React.ElementType='div';
const VariantA=()=>{
    return <TemplateAWrapper>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
    </TemplateAWrapper>
}

export default VariantA