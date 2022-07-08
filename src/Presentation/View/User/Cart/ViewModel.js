import React, {useState} from 'react';
import cartDataSource from '../../../../Domain/UseCase/Product/CartProduct';

const ViewModel = () => {
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState([]);

    const getCartList = async () => {
        const data = cartDataSource.getState();
        setCartList(data);
        sumTotal();
    }

    const quantTotal = (e, id) => {
        const value = e.target.value;
        cartDataSource.dispatch({type: 'getTotalCart', value: value, item_id: id});
        const data = cartDataSource.getState();
        setTotal(data);
        sumTotal();
    }

    const deleteCart = (index) => {
        cartDataSource.dispatch({type: 'deleteCartItem', index: index});
        const data = cartDataSource.getState();
        setCartList(data)
        sumTotal();
    }

    const sumTotal = () => {
        let arr = []
        const data = cartDataSource.getState();
        data.forEach(element => {
            const sum = element.price * element.quantity;
            arr.push(sum)
        });
        const sumtotal = arr.reduce((a, b) => a + b, 0);
        setTotal(sumtotal)
    }

    return{
        getCartList,
        cartList,
        total,
        quantTotal,
        deleteCart
    };

}

export default ViewModel;