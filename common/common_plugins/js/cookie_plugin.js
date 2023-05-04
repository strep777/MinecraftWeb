export default {
    install: (app, options) => {
        //自定义cookie
        app.config.globalProperties.$set_cookie =(cname,cvalue,exdays=1) =>{
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        app.config.globalProperties.$get_cookie =(cname) =>{
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        app.config.globalProperties.$clear_cookie =(cname) =>{
            let d = new Date();
            d.setTime(-1);
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=''; " + expires;
        },

        app.provide('cookie_options', options)
    }
}