import React from 'react';
import styles from './Catalog.module.scss';
import { CatalogHeader } from '@/components/Catalog/CatalogHeader/CatalogHeader.tsx';
import { CatalogProductList } from '@/components/Catalog/CatalogProductList/CatalogProductList.tsx';
import { CatalogFooter } from '@/components/Catalog/CatalogFooter/CatalogFooter.tsx';

export const Catalog: React.FC = () => {
	return (
		<div className={`${styles['catalog']}`}>
			<CatalogHeader />
			<CatalogProductList />
			<CatalogFooter />
		</div>
	);
};
