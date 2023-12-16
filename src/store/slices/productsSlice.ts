import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '@/types/types.ts';

interface ProductState {
	products: IProduct[];
	selectedProductsId: number[];
}

const initialState: ProductState = {
	products: [
		{ id: 0, name: 'Product 1' },
		{ id: 1, name: 'Product 2' },
		{ id: 2, name: 'Product 3' },
		{ id: 3, name: 'Product 4' },
		{ id: 4, name: 'Product 5' },
		{ id: 5, name: 'Product 6' },
		{ id: 6, name: 'Product 7' },
		{ id: 7, name: 'Product 8' },
		{ id: 8, name: 'Product 9' },
	],
	selectedProductsId: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		selectProduct: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			state.selectedProductsId = [
				...state.selectedProductsId,
				productId,
			].sort();
		},
		unSelectProduct: (state, action: PayloadAction<number>) => {
			state.selectedProductsId = state.selectedProductsId.filter(
				(productId) => productId !== action.payload,
			);
		},

		selectAll: (state) => {
			state.selectedProductsId = state.products.map((product) => product.id);
		},
		deselectAll: (state) => {
			state.selectedProductsId = [];
		},

		moveToTop: (state) => {
			const selectedProducts = state.products.filter((product) =>
				state.selectedProductsId.includes(product.id),
			);
			const notSelectedProducts = state.products.filter(
				(product) => !state.selectedProductsId.includes(product.id),
			);
			state.products = [...selectedProducts, ...notSelectedProducts];
		},
		moveToBottom: (state) => {
			const selectedProducts = state.products.filter((product) =>
				state.selectedProductsId.includes(product.id),
			);
			const notSelectedProducts = state.products.filter(
				(product) => !state.selectedProductsId.includes(product.id),
			);
			state.products = [...notSelectedProducts, ...selectedProducts];
		},
	},
	selectors: {
		allProducts: (state) => state.products,
		selectedProducts: (state) => state.selectedProductsId,
	},
});
export const { allProducts, selectedProducts } = productsSlice.selectors;
export const {
	selectProduct,
	unSelectProduct,
	selectAll,
	deselectAll,
	moveToTop,
	moveToBottom,
} = productsSlice.actions;

export default productsSlice.reducer;
