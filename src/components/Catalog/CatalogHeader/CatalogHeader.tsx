import React from 'react';
import styles from './CatalogHeader.module.scss';
import { useSelectProducts } from '@/components/Catalog/CatalogHeader/useSelectProducts.ts';
import { useMoveProduct } from '@/components/Catalog/CatalogHeader/useMoveProduct.ts';
import { useAppSelector } from '@/store/hooks.ts';
import { selectedProducts } from '@/store/slices/productsSlice.ts';

export const CatalogHeader: React.FC = () => {
	const selectedProductsId = useAppSelector(selectedProducts);
	const { selectAllHandler, deSelectAllHandler } = useSelectProducts();
	const { moveToTopHandler, moveToBottomHandler } = useMoveProduct();

	return (
		<div className={'container'}>
			<div className={`${styles['catalog-header']}`}>
				<div className={`${styles['menu']}`}>
					<div className={`${styles['selected-counter']}`}>
						{selectedProductsId.length} selected
					</div>
					<div>|</div>
					<ul className={`${styles['list']}`}>
						<li className={`${styles['list-item']}`}>
							<button
								onClick={selectAllHandler}
								className={`${styles['header-btn']}`}
							>
								Select All
							</button>
						</li>
						<li className={`${styles['list-item']}`}>
							<button
								onClick={deSelectAllHandler}
								className={`${styles['header-btn']}`}
							>
								Deselect All
							</button>
						</li>
						<li className={`${styles['list-item']}`}>
							<button onClick={() => {}} className={`${styles['header-btn']}`}>
								Delete
							</button>
						</li>
						<li className={`${styles['list-item']}`}>
							<button
								onClick={moveToTopHandler}
								className={`${styles['header-btn']}`}
							>
								Move to top
							</button>
						</li>
						<li className={`${styles['list-item']}`}>
							<button
								onClick={moveToBottomHandler}
								className={`${styles['header-btn']}`}
							>
								Move to bottom
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
