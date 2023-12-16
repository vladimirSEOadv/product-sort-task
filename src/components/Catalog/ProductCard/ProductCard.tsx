import React from 'react';
import { IProduct } from '@/types/types.ts';
import { useAppDispatch } from '@/store/hooks.ts';
import {
	selectProduct,
	unSelectProduct,
} from '@/store/slices/productsSlice.ts';
import productImage from '../../../assets/react-logo.png';
import styles from './ProductCard.module.scss';

interface IProductCard {
	productData: IProduct;
	selectedStatus: boolean;
}

export const ProductCard: React.FC<IProductCard> = ({
	productData,
	selectedStatus,
}) => {
	const dispatch = useAppDispatch();

	const statusChangeHandler = () => {
		selectedStatus
			? dispatch(unSelectProduct(productData.id))
			: dispatch(selectProduct(productData.id));
	};

	return (
		<div onClick={statusChangeHandler} className={`${styles['product-card']}`}>
			<div
				className={`
					${styles['product-card-image']} 
					${selectedStatus && styles['bordered']}
				`}
			>
				<div className={styles['image-header']}>
					<input
						className={styles['status-checkbox']}
						checked={selectedStatus}
						onChange={statusChangeHandler}
						type="checkbox"
					/>
					<div>ID: {productData.id}</div>
				</div>
				<img className={`${styles['img']}`} src={productImage} alt="" />
			</div>
			<div className={styles['product-title']}>{productData.name}</div>
		</div>
	);
};
