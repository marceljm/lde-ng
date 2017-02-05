import { ProductItems } from './productItems';

export class Page {
    items: number;
    page: number;
    productItems: ProductItems;
    query: string;
    total: number;
}