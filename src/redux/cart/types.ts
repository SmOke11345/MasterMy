export interface Items {
    id: string;
    category_name: string;
    img: string;
    title: string;
    subtitle: string;
    price: number;
    count: number;
    favorite: boolean;
}

export interface CartProp {
    items: Items[];
    totalPrice: number;
}
