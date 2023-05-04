import { App } from 'vue';
import { request, GraphQLClient,gql } from 'graphql-request'

export const CourseInitGQL = ():string =>{
    return gql`
        query {
            allCourseSettings: allCourseSettings {
                ...course_setting
            }
            allQuestionDb{
                id
                questionDbName
            }
        }
        ${course_setting_fragment}
    `
}

export const CreateCourseGQLM =():string=>{
    return gql`
        mutation createCourse($name:String!,$coverImg:String!,$describe:String!,$qdb:ID!){
            createCourse(name:$name,coverImg:$coverImg,describe:$describe,qdb:$qdb){
                status
                action
                courseSettings{
                ...course_setting
                }
            }
            
    }
    
    ${course_setting_fragment}
    `
}

export const UpdateCourseGQLM =():string=>{
    return gql`
        mutation updateCourse($courseSetting:CourseSettingInput!){
            updateCourse(courseSetting: $courseSetting){
                status
                action
                courseSettings{
                ...course_setting
                }
            }
        }
  
    ${course_setting_fragment}
    `
}

export const DeleteCourseGQLM = ():string=>{
    return gql`
      mutation deleteCourse($id:ID!){
          deleteCourse(id:$id){
              status
              action
              courseSettings{
              ...course_setting
              }
          }
      }
      ${course_setting_fragment}
    `
}

export const course_setting_fragment:string = gql`
fragment course_setting on CourseSetting {
            id
            name
            books {
                bookId
                    pages{
                        point{
                            first{
                                point
                                title
                            }
                            second{
                                point
                                title
                            }
                            third{
                                point
                                title
                            }
                        }
                        questions{
                            questionCollectionName
                            questionId
                        }
                    }
                status
                title
            }
            qdb
            synopsis
            createDate
            status
            archiveDate
            coverImg
            describe
        }
`
