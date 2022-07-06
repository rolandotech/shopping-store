import { createStore } from 'redux';
import productDataSource from '../../../Data/DataSource/ProductDataSource';

function productReducer(state = productDataSource) {
  return state;
}

let store = createStore(productReducer)

export default store.getState();