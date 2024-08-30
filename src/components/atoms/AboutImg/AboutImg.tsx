
import logoBg from '../../../assets/logoBg.png'


const AboutImgWrapper:React.ElementType='div';



const AboutImg=()=>{
    return <AboutImgWrapper className='w-2/6 ml-4 flex items-center justify-center'>
        
        <img src={logoBg} className='w-4/6'></img>

        
    </AboutImgWrapper>
}
export default AboutImg