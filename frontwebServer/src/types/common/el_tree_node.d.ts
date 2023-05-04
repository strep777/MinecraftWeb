interface ElTreeNode {
    id: number
    label: string
    isPenultimate?: boolean
    children?: Array<ElTreeNode>
    disabled?: 'disabled',
    leaf?: boolean
}