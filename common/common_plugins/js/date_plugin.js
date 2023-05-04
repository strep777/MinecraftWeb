//npm install dayjs
import * as dayjs from 'dayjs'
export default {
    install: (app, options) => {
       
        app.config.globalProperties.$get_date = ()=>{
            return dayjs();
        };
        app.config.globalProperties.$get_date_unix = ()=>{
            return Date.parse(new Date());
        };
        app.config.globalProperties.$timestamp_to_date = (unix) => {
            let date = new Date(unix*1000);
            return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
        }
        
        app.config.globalProperties.$timestamp_to_date_YMD = (unix) => {
            let date = new Date(unix*1000);
            return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`;
        }

        app.config.globalProperties.$datelesstime_format_to_text = (date) => {
            let now = new Date().getTime();
            let time = dayjs(now-date)

            let hour = dayjs(time).hour()-8;
            let minute = dayjs(time).minute();
            let second = dayjs(time).second();
            let format_time = `${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`

            return format_time;
        }
        app.config.globalProperties.$time_format_to_text = (time) => {
            time=time*1000;

            let hour = dayjs(time).hour()-8;
            let minute = dayjs(time).minute();
            let second = dayjs(time).second();
            let format_time = `${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`
            return format_time;
        }
        app.provide('date_options', options)
    }
}