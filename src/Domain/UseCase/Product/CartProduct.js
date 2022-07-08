import { createStore } from 'redux';
import cartDataSource from '../../../Data/DataSource/CartDataSource';

function cartReducer(state = cartDataSource, action) {
    switch (action.type) {
        case 'getTotalCart':
            return state.map(sel => {
                if(sel.id === action.item_id) {
                    sel.quantity = action.value;
                    return sel;
                }
                return sel
            })

        case 'deleteCartItem':
            state.splice(action.index, 1);
            return state;

        case 'buyNowCart':
            const addProd = action.value;
            const id = state.length + 1;
            const new_state = state.find(element => element.product === addProd.title);
            if(new_state){
                
                const prods = state.map(elem_data => {
                    if(elem_data.id === new_state.id) {
                       elem_data.quantity = elem_data.quantity + addProd.cartQTY;
                    }
                    return elem_data;
                });
                return prods;
            }
            const new_prod = {id: id, product: addProd.title, price: addProd.price, quantity: addProd.cartQTY > 0 ? addProd.cartQTY : 1, total: 0};
            state.push(new_prod);
            return state;

        default:
          return state;
    }
}

let store = createStore(cartReducer)

export default store;