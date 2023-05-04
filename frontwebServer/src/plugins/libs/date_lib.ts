//npm install dayjs
import { App } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

export const GetDate = ()=>{
    return dayjs();
};
export const GetDateUnix = ()=>{
    return Date.parse(new Date().toString());
};
export const TimestampToDate = (unix:number | string) => {
    if(typeof unix !='number'){
        unix = parseInt(unix)
    }
    let date:Date = new Date(unix*1000);
    return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
}
export const TimestampToDateYMD = (unix:number | string) => {
    if(typeof unix !='number'){
        unix = parseInt(unix)
    }
    let date:Date = new Date(unix*1000);
    return `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`;
}
export const DatelesstimeFormatToText = (date:number | string) => {
    if(typeof date !='number'){
        date = parseInt(date)
    }
    let now:number = new Date().getTime();
    let time:Dayjs = dayjs(now-date)

    let hour:number = dayjs(time).hour()-8;
    let minute:number = dayjs(time).minute();
    let second:number = dayjs(time).second();
    let format_time:string = `${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`

    return format_time;
}

export const TimeFormatToText = (time:number | string) => {
    if(typeof time !='number'){
        time = parseInt(time)
    }

    time=time*1000;

    let hour:number = dayjs(time).hour()-8;
    let minute:number = dayjs(time).minute();
    let second:number = dayjs(time).second();
    let format_time:string = `${hour<10?'0'+hour:hour}:${minute<10?'0'+minute:minute}:${second<10?'0'+second:second}`
    return format_time;
}

export const DateTimeToUnix = (date_time_str:string):number=>{
    let date:Dayjs = dayjs(date_time_str);
    let unix:number = date.unix();
    return unix
}