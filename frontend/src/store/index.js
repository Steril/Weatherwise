import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import auth from './modules/auth';
import campaigns from './modules/campaigns';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
    auth,
    campaigns,
  },
});
