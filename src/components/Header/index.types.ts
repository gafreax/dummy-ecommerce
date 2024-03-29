export type CartItem = {
    id: number,
    title: string,
}

export interface HeaderProps {
    link?: string,
    linkTitle?: string,
    linkType?: "primary" | "secondary" | "info" ,
    setSearchText?: Function,
    showSearch?: boolean
}