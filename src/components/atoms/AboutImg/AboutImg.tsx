
import logoBg from '../../../assets/logoBg.png'


const AboutImgWrapper:React.ElementType='div';



const AboutImg=()=>{
    return <AboutImgWrapper className='w-full flex items-center justify-center sm:w-2/6 sm:ml-4 sm:flex sm:items-center sm:justify-center'>
        
        <img src={logoBg} className='w-3/6 flex items-center justify-center sm:w-4/6'></img>

        
    </AboutImgWrapper>
}
export default AboutImg