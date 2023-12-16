import { useAppDispatch } from '@/store/hooks.ts';
import { moveToBottom, moveToTop } from '@/store/slices/productsSlice.ts';

export const useMoveProduct = () => {
	const dispatch = useAppDispatch();
	const moveToTopHandler = () => {
		dispatch(moveToTop());
	};
	const moveToBottomHandler = () => {
		dispatch(moveToBottom());
	};

	return { moveToTopHandler, moveToBottomHandler };
};
