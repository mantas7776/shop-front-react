export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
}

export interface CartProduct extends Product {
    amount: number;
}