import { login, logout } from '@/api/auth';

const state = {
  user: null,
  token: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state, token) {
    state.token = token;
  },
  clearUser(state) {
    state.user = null;
  },
  clearToken(state) {
    state.token = null;
  },
};

const actions = {
  async login({ commit }, { email, password }) {
    const response = await login(email, password);
    const { user, token } = response.data;

    commit('setUser', user);
    commit('setToken', token);
  },
  logout({ commit }) {
    commit('clearUser');
    commit('clearToken');
    logout();
  },
};

const getters = {
  isLoggedIn(state) {
    return !!state.token;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
