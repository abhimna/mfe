export declare const monthlySales: {
    month: string;
    eu: number;
    na: number;
    apac: number;
}[];
export declare const recentOrders: {
    id: string;
    customer: string;
    product: string;
    amount: number;
    date: string;
    status: string;
}[];
export type OrderStatus = 'processing' | 'shipped' | 'delivered';
