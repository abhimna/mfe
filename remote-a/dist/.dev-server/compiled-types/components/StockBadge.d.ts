type Status = 'in-stock' | 'low' | 'out';
interface Props {
    status: Status;
    stock: number;
}
export default function StockBadge({ status, stock }: Props): import("react/jsx-runtime").JSX.Element;
export {};
