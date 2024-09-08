const ExpDurationWrapper:React.ElementType='div';

interface ExpDurationProps{
    duration:string
}

const ExpDuration=({duration}:ExpDurationProps)=>{
    return <ExpDurationWrapper className="font-light">
        <p>{duration}</p>
    </ExpDurationWrapper>
}

export default ExpDuration