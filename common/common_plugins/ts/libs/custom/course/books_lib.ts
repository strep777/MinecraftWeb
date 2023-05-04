import { App } from 'vue';
import { request, GraphQLClient,gql } from 'graphql-request'
import { NumberStringInt } from '../../common_lib';

/**
* Create a new BookPointTree
*/
export const BookPointTreeMake = async (book:Book):Promise<Array<ElTreeNode>>=>{
    return new Promise((resolve, reject) => {
        let point_tree:Array<ElTreeNode> = book.pages.reduce((pre:Array<ElTreeNode>, page,index) => {
            let { first, second, third } = page.point;
            let { first_id,second_id,third_id } = PointsFormat(page)

            if(pre.some(point_1 => point_1.id == first_id)){
                if(pre.some(point_1 => point_1.children?.some(point_2 => point_2.id == second_id))){
                    pre.find(point_1 => point_1.id == first_id)?.children?.find(point_2 => point_2.id == second_id)?.children?.push({
                        id: third_id,
                        label: third.title
                    });
                }else{
                    pre.find(point_1 => point_1.id == first_id)?.children?.push({
                        id: second_id,
                        label: second.title,
                        children: [
                            {
                                id: third_id,
                                label: third.title
                            }
                        ]
                    });
                }
            }else{
                pre.push({
                    id: first_id,
                    label: first.title,
                    children: [
                        {
                        id: second_id,
                        label: second.title,
                        children: [
                            {
                            id: third_id,
                            label: third.title
                            }
                        ]
                        }
                    ]
                });
            }
            

            return pre
        }, []);
        resolve(point_tree)
    });

    
}
export const BookPointTreeKeys = async (tree_node:Array<ElTreeNode>):Promise<Array<number>>=>{

    const return_key = (tree_node:Array<ElTreeNode>,tree_node_keys:Array<number>)=>{
        tree_node.map((node:ElTreeNode)=>{
            tree_node_keys.push(node.id)
            if(node.children?.length){
                return_key(node.children,tree_node_keys)
            }
        })
    }

    return new Promise((resolve, reject) => {
        let tree_node_keys:Array<number> = []
        return_key(tree_node,tree_node_keys)
        resolve(tree_node_keys)
    });

}

export const PointsFormat = (points:any)=>{
    let {first,second,third} = points.point

    let first_id = first.point
    let second_id = NumberStringInt(first.point,second.point)
    let third_id = NumberStringInt(NumberStringInt(first.point,second.point),third.point)

    return {
        first_id,
        second_id,
        third_id
    }
}
export const book_point_tree_default_props = {
    children: 'children',
    label: 'label',
}