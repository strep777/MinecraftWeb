import { App } from 'vue'

export const template = {
  install: (app: App<any>) => {
    // 插件的实现逻辑
    app.config.globalProperties.template = (str:string) => {
       return str
    }
  }
}
