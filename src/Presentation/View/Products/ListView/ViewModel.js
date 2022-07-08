import React, {useState} from "react";
import getProduct from "../../../../Domain/UseCase/Product/ViewProduct";
import cartDataSource from '../../../../Domain/UseCase/Product/CartProduct';

const ViewModel = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
       const prods = getProduct.getState();
       const selectedProds = prods.find(element => element.selected);
       setProducts(selectedProds);
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

    const addCArt = async (prod) => {
        const adding = await cartDataSource.dispatch({type: 'buyNowCart', value: prod});
        if(adding){
            return true;
        }else{
            return false
        }
    }

    return {
        getProducts,
        increase,
        decrease,
        products,
        addCArt
    }

}

export default ViewModel