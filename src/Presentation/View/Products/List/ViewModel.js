import React, {useState} from "react";
import getProductsUseCase from "../../../../Domain/UseCase/Product/GetProducts";

const ViewModel = () => {

    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
       setError(error)
       setProducts(getProductsUseCase)
    }

    return {
        getProducts,
        products
    }

}

export default ViewModel