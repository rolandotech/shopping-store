import React, { useEffect } from "react";
import { ProductCard } from "./components/ProductCard";
import ViewModel from "./ViewModel";
import './list.css';

const List = () => {
    const {getProducts, products } = ViewModel();

    useEffect(() => {
        getProducts();
    },[])

    return (
        <div className="container">
            <div className="header">
                <h1>List</h1>
            </div>
            <div className="body">
                
                {products.map((product, index) => {
                    return <ProductCard key={index} title={product.title} discription={product.discription} image={product.image} />
                })}
                
            </div>
        </div>
    )

}

export default List