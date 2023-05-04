import {index_routes} from './sub_route/index.ts'
import {minecraft_routes} from './sub_route/minecraft.ts'
import {RouteRecordRaw} from 'vue-router'


export const routers:Array<RouteRecordRaw> = [
    //主页
    index_routes.index,
    //子页
    minecraft_routes.minecraft_filemanager,
]