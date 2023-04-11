import { getCampaigns, createCampaign, deleteCampaign } from '@/api/campaigns';

const state = {
  campaigns: [],
};

const mutations = {
  setCampaigns(state, campaigns) {
    state.campaigns = campaigns;
  },
  addCampaign(state, campaign) {
    state.campaigns.push(campaign);
  },
  deleteCampaign(state, campaignId) {
    state.campaigns = state.campaigns.filter((c) => c._id !== campaignId);
  },
};

const actions = {
  async fetchCampaigns({ commit }) {
    const response = await getCampaigns();
    const campaigns = response.data;
    commit('setCampaigns', campaigns);
  },
  async createCampaign({ commit }, campaignData) {
    const response = await createCampaign(campaignData);
    const campaign = response.data;
    commit('addCampaign', campaign);
  },
  async deleteCampaign({ commit }, campaignId) {
    await deleteCampaign(campaignId);
    commit('deleteCampaign', campaignId);
  },
};

const getters = {
  campaignById: (state) => (id) => {
    return state.campaigns.find((c) => c._id === id);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
