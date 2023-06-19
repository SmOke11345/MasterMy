import { Items } from '../cart/types.ts';

export const enum StatusName {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface CatchProp {
    items: Items[];
    status: StatusName;
}

export type ArgsFetchProducts = {
    category: string;
    currentPage: string;
    search: string;
    sort: string;
    growth: string;
};
