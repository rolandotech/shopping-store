import React, {useState} from "react";
import getProductsUseCase from "../../../../Domain/UseCase/Product/GetProducts";
import viewProduct from "../../../../Domain/UseCase/Product/ViewProduct";

const ViewModel = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
       setProducts(getProductsUseCase)
    }

    const setViewProduct = async (id) => {
        viewProduct.dispatch({type: 'view/product', value: id});
        
    }

    return {
        getProducts,
        setViewProduct,
        products
    }

}

export default ViewModel