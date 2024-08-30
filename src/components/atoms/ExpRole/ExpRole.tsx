const ExpRoleWrapper:React.ElementType='div';

interface ExpRoleProps{
  role:string;
}

const ExpRole=({role}:ExpRoleProps)=>{
    return <ExpRoleWrapper className="font-light">
        <p>{role}</p>
    </ExpRoleWrapper>
}

export default ExpRole