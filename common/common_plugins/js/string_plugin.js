export default {
    install: (app, options) => {
        
        app.config.globalProperties.$string_isnull = (str) => {
            if(str==null||str.toString().length==0||str.toString()==""||typeof value === 'undefined'){
                return true;
            }else{
                return false;
            }
        }
        app.config.globalProperties.$string_trim = (str) => {
            let nextstr = str.trim();
            nextstr = nextstr.replaceAll(';','');
            nextstr = nextstr.replaceAll(';','');
            nextstr = nextstr.replaceAll('"','');
            nextstr = nextstr.replaceAll('/','');
            nextstr = nextstr.replaceAll('\\','');
            nextstr = nextstr.replaceAll('+','');
            nextstr = nextstr.replaceAll('=','');
            nextstr = nextstr.replaceAll('.','');
            nextstr = nextstr.replaceAll('(','');
            nextstr = nextstr.replaceAll(')','');
            nextstr = nextstr.replaceAll('{','');
            nextstr = nextstr.replaceAll('}','');
            nextstr = nextstr.replaceAll('[','');
            nextstr = nextstr.replaceAll(']','');
            nextstr = nextstr.replaceAll('@','');
            nextstr = nextstr.replaceAll('#','');
            nextstr = nextstr.replaceAll('$','');
            nextstr = nextstr.replaceAll('%','');
            nextstr = nextstr.replaceAll('^','');
            nextstr = nextstr.replaceAll('&','');
            nextstr = nextstr.replaceAll('*','');
            nextstr = nextstr.replaceAll('-','');
            nextstr = nextstr.replaceAll('_','');
            nextstr = nextstr.replaceAll('`','');
            nextstr = nextstr.replaceAll('~','');
            nextstr = nextstr.replaceAll('!','');
            nextstr = nextstr.replaceAll('|','');
            nextstr = nextstr.replaceAll(':','');
            nextstr = nextstr.replaceAll('>','');
            nextstr = nextstr.replaceAll('<','');
            nextstr = nextstr.replaceAll(',','');
            nextstr = nextstr.replaceAll('》','');
            nextstr = nextstr.replaceAll('《','');
            nextstr = nextstr.replaceAll('—','');
            nextstr = nextstr.replaceAll('?','');
            nextstr = nextstr.replaceAll('【','');
            nextstr = nextstr.replaceAll('】','');
            nextstr = nextstr.replaceAll('？','');
            nextstr = nextstr.replaceAll('￥','');
            nextstr = nextstr.replaceAll('，','');
            nextstr = nextstr.replaceAll('。','');
            nextstr = nextstr.replaceAll('“','');
            nextstr = nextstr.replaceAll('”','');
            nextstr = nextstr.replaceAll('‘','');
            nextstr = nextstr.replaceAll('’','');
            nextstr = nextstr.replaceAll('、','');
            nextstr = nextstr.replaceAll('·','');
            nextstr = nextstr.replaceAll('）','');
            nextstr = nextstr.replaceAll('（','');
            nextstr = nextstr.replaceAll('…','');
            nextstr = nextstr.replaceAll('；','');
            nextstr = nextstr.replaceAll('：','');
            return nextstr;
        }

      app.provide('string_options', options)
    }
}