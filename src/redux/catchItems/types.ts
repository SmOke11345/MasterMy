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
    currentPage: string;
    search: string;
};
