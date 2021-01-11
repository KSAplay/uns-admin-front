export interface MenuNode {
    data: any;
    children: MenuNode[];
    leaf: boolean;
    expanded: boolean;
}
