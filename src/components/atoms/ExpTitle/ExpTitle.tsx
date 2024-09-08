const ExpTitleWrapper:React.ElementType='div';

interface ExpTitleProps{
    orgName:string;
}

const ExpTitle=({orgName}:ExpTitleProps)=>{
    return <ExpTitleWrapper className="text-xl font-bold" key={orgName}>
        <p>{orgName}</p>
    </ExpTitleWrapper>
}

export default ExpTitle