interface Alert {
    showClose?: boolean,
    message:string,
    type:EpPropMergeType<StringConstructor, "success" | "warning" | "error" | "info", unknown> | undefined,
}