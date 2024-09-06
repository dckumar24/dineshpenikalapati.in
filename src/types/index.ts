export interface Roles{
    role:string;
    duration:string;
}
 
export interface SectionTitleProps{
    sectionTitle:string,
    xValue:number
}

export interface ExpTileProps{
    orgName:string;
    roles:Roles[];
    location:string;
}

export interface ExpEduSectionProps extends SectionTitleProps{
    orgs:ExpTileProps[],
    imgLogo:string,
    alignFlag:boolean

}