<template>
  <div>
    <h2 class="subtitle">My Campaigns</h2>

    <div class="field">
      <div class="control">
        <router-link class="button is-primary" to="/campaigns/new">New Campaign</router-link>
      </div>
    </div>

    <div v-if="campaigns.length === 0">
      You haven't created any campaigns yet.
    </div>

    <div v-else>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Weather Condition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="campaign in campaigns" :key="campaign.id">
            <td>{{ campaign.name }}</td>
            <td>{{ campaign.location }}</td>
            <td>{{ campaign.weather_condition }}</td>
            <td>
              <router-link :to="'/campaigns/' + campaign.id">Edit</router-link>
              <button class="button is-danger" @click="deleteCampaign(campaign.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CampaignList',
  data() {
    return {
      campaigns: [],
    };
  },
  created() {
    this.loadCampaigns();
  },
  methods: {
    async loadCampaigns() {
      const response = await this.$axios.get('/api/campaigns');
      this.campaigns = response.data;
    },
    async deleteCampaign(campaignId) {
      const confirmed = confirm('Are you sure you want to delete this campaign?');

      if (confirmed) {
        await this.$axios.delete(`/api/campaigns/${campaignId}`);
        this.loadCampaigns();
      }
    },
  },
};
</script>

<style>
/* CampaignList styles go here */
</style>
