import { useAppDispatch } from '@/store/hooks.ts';
import { deselectAll, selectAll } from '@/store/slices/productsSlice.ts';

export const useSelectProducts = () => {
	const dispatch = useAppDispatch();
	const selectAllHandler = () => {
		dispatch(selectAll());
	};
	const deSelectAllHandler = () => {
		dispatch(deselectAll());
	};
	return { selectAllHandler, deSelectAllHandler };
};
