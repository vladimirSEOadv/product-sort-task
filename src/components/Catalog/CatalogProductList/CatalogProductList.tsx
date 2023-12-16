import React from 'react';
import styles from './CatalogProductList.module.scss';
import { ProductCard } from '@/components/Catalog/ProductCard/ProductCard.tsx';
import { useAppSelector } from '@/store/hooks.ts';
import { allProducts, selectedProducts } from '@/store/slices/productsSlice.ts';

export const CatalogProductList: React.FC = () => {
	const selectedProductsId = useAppSelector(selectedProducts);
	const products = useAppSelector(allProducts);
	return (
		<div className="container">
			<div className={`${styles['product-list']}`}>
				{products?.length &&
					products.map((product) => {
						return (
							<ProductCard
								selectedStatus={selectedProductsId.includes(product.id)}
								key={product.id}
								productData={product}
							/>
						);
					})}
			</div>
		</div>
	);
};
