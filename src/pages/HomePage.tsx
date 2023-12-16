import {Catalog} from "@/components/Catalog/Catalog.tsx";

export interface IProduct {
    id: number,
    name: string
}

const products: IProduct[] = [
    {id: 0, name: "Product 1"},
    {id: 1, name: "Product 2"},
    {id: 2, name: "Product 3"},
    {id: 3, name: "Product 4"},
    {id: 4, name: "Product 5"},
    {id: 5, name: "Product 6"},
    {id: 6, name: "Product 7"},
    {id: 7, name: "Product 8"},
    {id: 8, name: "Product 9"},
]

export const HomePage = () => {
    return (
        <div>
            <Catalog products={products}/>
        </div>
    );
};