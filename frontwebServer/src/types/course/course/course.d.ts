interface CourseSetting{
    id:string,
    name:string,
    books?: Array<Book>,
    qdb: Qdbs,
    synopsis: string,
    createDate: string,
    status: number,
    archiveDate: string,
    coverImg?:string | any,
    describe?:string,
}
