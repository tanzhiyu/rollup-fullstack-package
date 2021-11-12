interface TreeNode {
    content: number;
    children?: TreeNode[];
}
declare const root: TreeNode;
declare function travel(node: TreeNode): number;
interface TravelStack {
    continuation: number;
    node: TreeNode;
    i: number;
    sum: number;
}
declare function travel2(node: TreeNode): number;
