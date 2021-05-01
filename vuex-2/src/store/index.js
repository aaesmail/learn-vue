import { createStore } from 'vuex';

import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';
import authenticationModule from './modules/authentication/index';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
    authentication: authenticationModule,
  },
});

export default store;
