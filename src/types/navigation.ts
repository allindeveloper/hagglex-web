export  type navigation =  {
    id: string,
    title: string,
    type:string,
    icon: string,
    url: string,
    show?:boolean,
    children?: navigationChildren[],
}

export type navigationChildren = {
    id: string,
    title: string,
    type: string,
    url: string,
    classes:string,
    icon: string,
}