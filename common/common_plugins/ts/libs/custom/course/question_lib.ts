import { App } from 'vue';
import { request, GraphQLClient,gql } from 'graphql-request'
export const QuestionsFromBookIdGQL = ():string =>{
    return gql`
        query questionsFromBookId($courseId:ID!,$bookId:ID!){
            questionsFromBookId(courseId:$courseId,bookId: $bookId) {
            completionQuestions{
                ...completion_questions
            }
            multiChoiceQuestions{
                ...multichoice_questions
            }
            operationQuestions{
                ...operation_questions
            }
            readingQuestions{
                ...reading_questions
            }
            shortAnswerQuestions{
                ...shortanswer_questions
            }
            singleChoiceQuestions{
                ...singlechoice_questions
            }
            torFQuestions{
                ...torF_questions
            }
            }
        }
        ${completion_questions_fragment}
        ${multichoice_questions_fragment}
        ${operation_questions_fragment}
        ${reading_questions_fragment}
        ${shortanswer_questions_fragment}
        ${singlechoice_questions_fragment}
        ${torF_questions_fragment}
    `
}
export const AllQuestionGQL = ():string =>{
    return gql`
        query allQuestion($id:ID!){
            questionCompilation(id:$id) {
                completionQuestions{
                    ...completion_questions
                }
                multiChoiceQuestions{
                    ...multichoice_questions
                }
                operationQuestions{
                    ...operation_questions
                }
                readingQuestions{
                    ...reading_questions
                }
                shortAnswerQuestions{
                    ...shortanswer_questions
                }
                singleChoiceQuestions{
                    ...singlechoice_questions
                }
                torFQuestions{
                    ...torF_questions
                }
            }
        }
        ${completion_questions_fragment}
        ${multichoice_questions_fragment}
        ${operation_questions_fragment}
        ${reading_questions_fragment}
        ${shortanswer_questions_fragment}
        ${singlechoice_questions_fragment}
        ${torF_questions_fragment}
    `
}
export const CompletionQuestionGQL = ():string =>{
    return gql`
        query completionQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                completionQuestions{
                  ...completion_questions
                }
            }
        }
        ${completion_questions_fragment}
    `
}

export const MultiChoiceQuestionGQL = ():string =>{
    return gql`
        query multiChoiceQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                multiChoiceQuestions{
                  ...multichoice_questions
                }
            }
        }
        ${multichoice_questions_fragment}
    `
}
export const OperationQuestionGQL = ():string =>{
    return gql`
        query operationQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                operationQuestions{
                  ...operation_questions
                }
            }
        }
        ${operation_questions_fragment}
    `
}
export const ReadingQuestionGQL = ():string =>{
    return gql`
        query readingQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                readingQuestions{
                  ...reading_questions
                }
            }
        }
        ${reading_questions_fragment}
    `
}
export const ShortAnswerQuestionGQL = ():string =>{
    return gql`
        query multiChoiceQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                shortAnswerQuestions{
                  ...shortanswer_questions
                }
            }
        }
        ${shortanswer_questions_fragment}
    `
}
export const SingleChoiceQuestionGQL = ():string =>{
    return gql`
        query multiChoiceQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                singleChoiceQuestions{
                  ...singlechoice_questions
                }
            }
        }
        ${singlechoice_questions_fragment}
    `
}
export const TorFQuestionGQL = ():string =>{
    return gql`
        query multiChoiceQuestionGQL($id:ID!){
            questionCompilation(id:$id) {
                torFQuestions{
                  ...torF_questions
                }
            }
        }
        ${torF_questions_fragment}
    `
}
export const completion_questions_fragment:string = gql`
    fragment completion_questions on CompletionQuestion{
        difficulty
        evaluation
        function
        hasher
        id
        isPractise
        oneValue
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        totalBlank
        type
        weights
    }
`
export const multichoice_questions_fragment:string = gql`
    fragment multichoice_questions on MultiChoiceQuestion{
        candidates
        difficulty
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        type
    }
`
export const operation_questions_fragment:string = gql`
    fragment operation_questions on OperationQuestion{
        difficulty
        download 
        evaluation
        files
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        type
    }
`
export const reading_questions_fragment:string = gql`
    fragment reading_questions on ReadingQuestion{
        content
        difficulty 
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        type
        video
    }
`
export const shortanswer_questions_fragment:string = gql`
    fragment shortanswer_questions on ShortAnswerQuestion{
        difficulty 
        evaluation
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        type
    }
`
export const singlechoice_questions_fragment:string = gql`
    fragment singlechoice_questions on SingleChoiceQuestion{
        candidates
        difficulty 
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        type
    }
`
export const torF_questions_fragment:string = gql`
    fragment torF_questions on TorFQuestion{
        candidates
        difficulty 
        function
        hasher
        id
        isPractise
        point {
            first {
                point
                title
            }
            second {
                point
                title
            }
            third {
                point
                title
            }
        }
        scoreValue
        stem
        theAnswer
        type
    }
`

export const FormatQuestionType = (type_string:number):string=>{
    if(type_string==1){
        return '单选题'
    }
    if(type_string==2){
        return '多选题'
    }
    if(type_string==3){
        return '填空题'
    }
    if(type_string==4){
        return '判断题'
    }
    if(type_string==5){
        return '简答题'
    }
    if(type_string==6){
        return '阅读题'
    }
    if(type_string==8){
        return '操作题'
    }
    
    return '未知类型'
}

export const FormatQuestionFunction = (question_function:number):string=>{
    if(question_function==0){
        return '考试'
    }
    if(question_function==1){
        return '练习'
    }
    if(question_function==2){
        return '课后习题'
    }
    
    return '未知'
}

