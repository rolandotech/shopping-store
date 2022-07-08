import React, {useState} from "react";
import getProduct from "../../../../Domain/UseCase/Product/ViewProduct";
import cartDataSource from '../../../../Domain/UseCase/Product/CartProduct';

const ViewModel = () => {

    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
       setError(error)
       const prods = getProduct.getState();
       const selectedProds = prods.find(element => element.selected)
       setProducts(selectedProds)
    }

    const increase = () => {
        getProduct.dispatch({type: "increase/qty"});
        const prods = getProduct.getState();
        const selectedProds = prods.find(element => element.selected);
        setProducts(selectedProds);
    }

    const decrease = () => {
        getProduct.dispatch({type: "decrease/qty"});
        const prods = getProduct.getState();
        const selectedProds = prods.find(element => element.selected);
        const newProd = {...products};
        newProd.cartQTY = selectedProds.cartQTY;
        setProducts(newProd);
    }

    c

    return {
        getProducts,
        increase,
        decrease,
        products
    }

}

export default ViewModel