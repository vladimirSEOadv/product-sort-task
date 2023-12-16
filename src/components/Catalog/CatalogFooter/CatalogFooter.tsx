import React from "react";
import styles from "./CatalogFooter.module.scss"
import {useAppSelector} from "@/store/hooks.ts";
import {allProducts} from "@/store/slices/productsSlice.ts";


export const CatalogFooter: React.FC = () => {
    const products = useAppSelector(allProducts);
    const handleClickSave = () => {
        console.log("save", products)
    }

    return (
        <div className={`${styles["catalog-footer"]}`}>
            <button className={`${styles["catalog-footer_btn"]} `}>Back</button>
            <button onClick={handleClickSave} className={`${styles["catalog-footer_btn"]} ${styles["save-btn"]}`}>Save</button>
        </div>
    )
}