import { useAppSelector } from '../redux/hooks.ts';

const TotalCountAll = () => {
    const { items } = useAppSelector((state) => state.cart);
    return items.reduce((sum, item) => sum + item.count, 0);
};
export default TotalCountAll;
