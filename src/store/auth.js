import { register, login } from '../services/authService';

const state = () => ({
  user: null,
  token: null,
});

const mutations = {
  SET_REGISTRATION(state, user) {
    state.user = user.user;
    state.token = user.access_token;
  },
  SET_LOGIN(state, user) {
    state.user = user.user;
    state.token = user.access_token;
  },
};

const actions = {
  async get_register({ commit }, user_data) {
    const user = await register(user_data);
    commit('SET_REGISTRATION', user);
  },
  async get_login({ commit }, user_data) {
    const user = await login(user_data)
    commit('SET_LOGIN', user)
  }
};

const getters = {
  user: ({ user }) => user,
  token: ({ token }) => token
};

export default {
  state,
  mutations,
  actions,
  getters,
};
