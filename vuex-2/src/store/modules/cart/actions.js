export default {
  addProduct(context, productId) {
    const products = context.rootGetters['products/products'];
    const product = products.find(product => product.id === productId);
    context.commit('addProduct', product);
  },

  removeProduct(context, productId) {
    context.commit('removeProduct', productId);
  },
};
