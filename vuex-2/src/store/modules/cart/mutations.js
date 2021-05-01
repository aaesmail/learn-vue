export default {
  addProduct(state, product) {
    const productInCartIndex = state.items.findIndex(
      ci => ci.productId === product.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += product.price;
  },

  removeProduct(state, productId) {
    const productInCartIndex = state.items.findIndex(
      cartItem => cartItem.productId === productId
    );
    const prodData = state.items[productInCartIndex];
    state.items.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  },
};
