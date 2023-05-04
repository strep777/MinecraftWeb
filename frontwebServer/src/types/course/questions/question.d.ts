interface Question{
    difficulty:number,
    function:number,
    hasher:string,
    id:string,
    isPractise:number,
    point:KnowledgeStruct,
    scoreValue:number,
    stem:string,
    theAnswer:Array<number> | Array<string> | string | number | boolean,
    type:number,
    //可选
    oneValue?:number,
    candidates?:Array<string>,
    totalBlank?:number,
    weights?:Array<number>,
    download?:string,
    files?:Array<string>,
    evaluation?:Array<string>,
    content?:string,
    video?:Array<string>,
}