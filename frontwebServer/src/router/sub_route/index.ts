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
        component: index,
        meta: { requiresAuth: true }
    },
    dashboard:{
        path: "/",
        name: "dashboard",
        component: index,
        meta: { requiresAuth: true }
    }
}

