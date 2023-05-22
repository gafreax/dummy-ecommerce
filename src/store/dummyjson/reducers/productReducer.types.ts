
export type ProductItem = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images: string[],
}

export type ProductState = {
    error?: string | null,
    loading: boolean,
    items: ProductItem[],
    skip: 0,
    loaded: 0,
    total: 0,
};