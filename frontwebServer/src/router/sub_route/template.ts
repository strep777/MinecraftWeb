import template from "@/components/common/template.vue";
export const template_routes = {
    template:{
        path: "/template",
        name: "template",
        component: template,
        meta: { requiresAuth: true }
    },
}

