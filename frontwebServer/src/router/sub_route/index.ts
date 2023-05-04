import index from "@/components/common/template.vue";
export const index_routes = {
    index:{
        path: "/index",
        name: "index",
        component: index,
        meta: { requiresAuth: true }
    },
}

