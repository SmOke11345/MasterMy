export type subtitleProps = {
    text: string;
    // Что то еще, для того чтобы сделать список
};

export interface Items {
    id: string;
    category_name: string;
    img: string;
    title: string;
    subtitle: subtitleProps[];
    price: number;
}

export interface CartProp {
    items: Items[];
    totalPrice: number;
}
