const state = () => ({
  cartPopUpVisible: false,
  cart: [],
});

const mutations = {
  TOGGLE_POPUP(state) {
    state.cartPopUpVisible = !state.cartPopUpVisible;
  },
  SET_CART(state, item) {
    if (state.cart.length) {
      let itemInCart = false;
      state.cart.map((c) => {
        if (c.id === item.id) {
          itemInCart = true;
        }
      });
      if (!itemInCart) {
        state.cart.push(item);
      }
      localStorage.cart = JSON.stringify(state.cart)
    } else {
      state.cart.push(item);
      localStorage.cart = JSON.stringify(state.cart)
    }
  },
  RESET_CART(state) {
    state.cart = []
  },
  DELETE_ITEM(state, id) {
    state.cart.splice(id, 1)
  }
};

const actions = {
  toggle_popup({ commit }) {
    commit('TOGGLE_POPUP');
  },
  add_to_cart({ commit }, item) {
    commit('SET_CART', item);
  },
  clear_cart({ commit }) {
    commit('RESET_CART')
  },
  delete_cart_item({ commit }, id) {
    commit('DELETE_ITEM', id)
  }

};

const getters = {
  cartPopUpVisible: ({ cartPopUpVisible }) => cartPopUpVisible,
  cart: ({ cart }) => cart,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
