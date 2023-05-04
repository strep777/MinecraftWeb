export default {
    install: (app, options) => {
        app.config.globalProperties.$page_refresh = ()=>{
            location.reload();
        }
        app.config.globalProperties.$message_box = (title,text)=>{
            ElMessageBox.alert(text, title, {
                confirmButtonText: '确认',
            })
        }
        app.config.globalProperties.$get_percent = (numerator_number,denominator_number) => {
            numerator_number = parseInt(numerator_number);
            denominator_number = parseInt(denominator_number);
            denominator_number = Math.ceil(denominator_number);
            numerator_number = Math.ceil(numerator_number);
            let end_number = 0;
            end_number =  (numerator_number/denominator_number)*100;//数量除以总数(数量/总数)
            let end_percent = end_number.toFixed(2);
            return parseFloat(end_percent);
        }
        app.config.globalProperties.$ToUtf8 = (str) => {
            let out, i, len, c;
            out = "";
            len = str.length;
            for(i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                }
            }
            return out;
        }
        app.config.globalProperties.$checkMail = (mailstr)=>{
            let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            return regEmail.test(mailstr);
        }
        app.config.globalProperties.$checkPhone = (phonestr)=>{
            let regPhone = /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
            return regPhone.test(phonestr);
        }
        app.config.globalProperties.$checkReg = (reg,str)=>{
            let regexpobj = new RegExp(reg);
            return regexpobj.test(str);
        }
        app.config.globalProperties.$button_blur = (event)=>{
            event.target.blur();
        }
        app.provide('common_options', options)
    }
}