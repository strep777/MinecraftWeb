import { App } from 'vue';
import { request, GraphQLClient,gql } from 'graphql-request'

export const QdbInfoGQL = ():string =>{
    return gql`
    query oneQuestionDbInfo($id:ID!){
        oneQuestionDb(id:$id) {
          ...question_collection
        }
      }
      ${question_collection_fragment}
    `
}
export const question_collection_fragment:string = gql`
    fragment question_collection on QuestionCollection {
        id
        questionDbName
        questions{
            questionId
            questionCollectionName
        }
    }
`
