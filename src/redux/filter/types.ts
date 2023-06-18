export interface FilterState {
    category: number;
    currentPage: number;
    sort: SortProp;
    search: string;
}

export const enum SortType {
    PRICE = 'price-asc',
    PRICE_DESC = 'price-desc',
    NAME = 'title',
    DEFAULT = '',
}

export interface SortProp {
    name: string;
    value: SortType;
}
