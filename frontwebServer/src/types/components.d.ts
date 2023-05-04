declare module '*.vue' {
    import { ComponentOptions } from "vue";
    const ComponentOptions:ComponentOptions
    export default ComponentOptions
}
declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component : ReturnType<typeof defineComponent>;
    export default Component;
}