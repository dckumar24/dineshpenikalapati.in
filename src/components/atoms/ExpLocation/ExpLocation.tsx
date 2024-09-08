const ExpLocationWrapper:React.ElementType='div';

interface ExpLocationProps{
  location:string;
}

const ExpLocation=({location}:ExpLocationProps)=>{
    return <ExpLocationWrapper className="text-md font-bold">
        <p>{location}</p>
    </ExpLocationWrapper>
}

export default ExpLocation