export interface FilterState {
    category: string;
    currentPage: number;
    sort: SortProp;
    search: string;
}

export const enum SortType {
    PRICE = 'price',
    PRICE_DESC = '-price',
    NAME = 'title',
    DEFAULT = '',
}

export interface SortProp {
    name: string;
    value: SortType;
}
