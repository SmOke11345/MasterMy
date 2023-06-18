export interface Items {
    id: string;
    category_name: string;
    img: string;
    title: string;
    subtitle: string;
    price: number;
}

export interface CartProp {
    items: Items[];
    totalPrice: number;
}
