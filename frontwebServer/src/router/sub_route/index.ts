import index from "@/components/index.vue";
export const index_routes = {
    index:{
        path: "/index",
        name: "index",
        component: index,
        meta: { requiresAuth: true }
    },
    home:{
        path: "/",
        name: "home",
        redirect:'/index',
        meta: { requiresAuth: true }
    },
    dashboard:{
        path: "/",
        name: "dashboard",
        redirect:'/index',
        meta: { requiresAuth: true }
    }
}

