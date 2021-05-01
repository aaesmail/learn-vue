export default {
  items(state) {
    return state.items;
  },

  total(state) {
    return state.total.toFixed(2);
  },

  quantity(state) {
    return state.qty;
  },
};
