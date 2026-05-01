export interface Product {
    sku: string;
    name: string;
    category: string;
    stock: number;
    price: number;
    status: 'in-stock' | 'low' | 'out';
}
export declare const products: Product[];
