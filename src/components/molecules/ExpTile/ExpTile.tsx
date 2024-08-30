import ExpDuration from "../../atoms/ExpDuration/ExpDuration";
import ExpLocation from "../../atoms/ExpLocation/ExpLocation";
import ExpRole from "../../atoms/ExpRole/ExpRole";
import ExpTitle from "../../atoms/ExpTitle/ExpTitle";
import { ExpTileProps } from "../../../types";
const ExpTileWrapper:React.ElementType='div';



const ExpTile=({orgName,roles,location}:ExpTileProps)=>{
    return <ExpTileWrapper className="m-4" key={`exp-${orgName}`}>
        <div className="flex items-center justify-between">
            <ExpTitle orgName={orgName}></ExpTitle>
            <ExpLocation location={location}></ExpLocation>
        </div>
        <div>
        {
            roles.map(({role,duration},index)=>{
               return <div className="flex items-center justify-between" key={`role-${index}`}>
                    <ExpRole role={role}></ExpRole>
                    <ExpDuration duration={duration}></ExpDuration>
                </div>
            })
        }
        </div>
        
        
        
    </ExpTileWrapper>
}

export default ExpTile