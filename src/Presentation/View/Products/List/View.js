import React, { useEffect } from "react";
import { ProductCard } from "./components/ProductCard";
import ViewModel from "./ViewModel";
import './list.css';
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";

const List = () => {
    const {getProducts, setViewProduct, products } = ViewModel();
    let navigate = useNavigate();

    useEffect(() => {
        getProducts();
    },[])

    const selected = (id) => {
        setViewProduct(id)
        navigate('/viewProduct')
    }

    return (
        <div className="container">
            <div className="header">
                <h1>List</h1>
            </div>
            <div className="body">
                
                {products.map((product, index) => {
                    return <ProductCard key={index} product={product} selected={selected}/>;
                })}
                
            </div>
        </div>
    )

}

export default List