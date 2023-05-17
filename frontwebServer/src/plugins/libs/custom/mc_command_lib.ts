import { App } from 'vue'
import * as base from 'js-base64'
import { MentionOption } from 'naive-ui'

export const McCommands = ():MentionOption[]=>{
  return [
    {
      label: 'op ',
      value: 'op '
    },
    {
      label: 'weather ',
      value: 'weather '
    },
    {
      label: 'help ',
      value: 'help '
    },
    {
      label: 'say ',
      value: 'say '
    },
  ]
}