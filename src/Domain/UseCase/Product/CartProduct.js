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

            
        default:
          return state;
    }
}

let store = createStore(cartReducer)

export default store;