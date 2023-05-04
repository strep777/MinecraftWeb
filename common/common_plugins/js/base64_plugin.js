//npm install --save js-base64
import * as base from 'js-base64'
export default {
    install: (app, options) => {
        app.config.globalProperties.$base64_decode = (data) => {
            return base.decode(data);
        }
        app.config.globalProperties.$base64_encode = (data) => {
            return base.encode(data);
        }

        app.provide('base64_options', options)
    }
}