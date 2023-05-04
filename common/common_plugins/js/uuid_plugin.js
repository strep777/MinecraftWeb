//npm install uuid
//npm install nanoid
import {v4 as uuidv4} from 'uuid'
import {nanoid} from 'nanoid'
export default {
    install: (app, options) => {
        app.config.globalProperties.$uuid = () => {
            return uuidv4();
        }
        app.config.globalProperties.$nanoid = () => {
            return nanoid();
        }

      app.provide('uuid_options', options)
    }
}