import { createStore } from 'redux';
import productDataSource from '../../../Data/DataSource/ProductDataSource';

function productReducer(state = productDataSource, action) {
    
    switch (action.type) {
        case 'view/product':
            return state.map((item, index) => {
                if(item.id === action.value) {
                    let newItem = {
                        ...item,
                        selected: true
                    }
                  return newItem;
                }
                
                if(item.selected){
                    delete item.selected;
                    return item;
                }else{
                    return item;
                }
            });
        case 'increase/qty':
            return state.map((item, index) => {
                if(item.selected) {
                    let newItem = {
                            ...item,
                            cartQTY: item.cartQTY + 1
                        }

                    return newItem;
                }

                return item
            });
        case 'decrease/qty':
            return state.map((item, index) => {
                if(item.selected) {
                    item.cartQTY > 0 ? item.cartQTY = item.cartQTY - 1 : item.cartQTY = 0;
                }

                return item
            });
        
        default:
          return state = productDataSource
    }
}

let store = createStore(productReducer)


export default store;