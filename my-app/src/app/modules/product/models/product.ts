export class Product {
    id?: number;
    title?: string;
    price?: number | null;
    description?: string;
    thumbnail?: string;

    public constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }
}
