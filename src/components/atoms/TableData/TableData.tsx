const TableDataWrapper:React.ElementType='div';

interface TableDataProps{
    label:string;
    value:string;
}
const TableData=({label,value}:TableDataProps)=>{
    return <TableDataWrapper className="flex m-4">
        <p className="font-bold">{label}:</p><p className="ml-2">{value}</p>
    </TableDataWrapper>
}
export default TableData