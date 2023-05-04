import minecraft_controller from "@/components/minecraft/minecraft_controller.vue";
import minecraft_filemanager from "@/components/minecraft/minecraft_filemanager.vue";
export const minecraft_routes = {
    minecraft_controller:{
        path: "/minecraft_controller",
        name: "minecraft_controller",
        component: minecraft_controller,
        meta: { requiresAuth: true }
    },
    minecraft_filemanager:{
        path: "/minecraft_filemanager",
        name: "minecraft_filemanager",
        component: minecraft_filemanager,
        meta: { requiresAuth: true }
    },
}

