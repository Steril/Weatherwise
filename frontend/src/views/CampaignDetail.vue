<template>
  <div class="campaign-detail">
    <h1>{{ campaign.name }}</h1>
    <div class="campaign-detail-actions">
      <router-link :to="'/campaigns/' + campaign.id + '/edit'" class="btn btn-primary">Edit</router-link>
      <button class="btn btn-danger" @click="deleteCampaign">Delete</button>
    </div>
    <div class="campaign-detail-content">
      <div class="campaign-detail-description">
        <p>{{ campaign.description }}</p>
      </div>
      <div class="campaign-detail-conditions">
        <h2>Weather Conditions</h2>
        <ul>
          <li v-for="condition in campaign.conditions" :key="condition.id">
            <span class="condition-location">{{ condition.location }}</span>
            <span class="condition-temperature">{{ condition.temperature }}°C</span>
            <span class="condition-weather">{{ condition.weather }}</span>
          </li>
        </ul>
      </div>
    </div>
    <ConfirmationDialog
      title="Delete Campaign"
      message="Are you sure you want to delete this campaign?"
      confirmText="Delete"
      cancelText="Cancel"
      :visible="showDeleteDialog"
      @confirm="deleteConfirmed"
      @cancel="showDeleteDialog = false"
    />
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import ConfirmationDialog from '@/components/dialogs/ConfirmationDialog.vue';

export default {
  name: 'CampaignDetail',
  components: {
    ConfirmationDialog,
  },
  computed: {
    ...mapGetters('campaigns', ['getCampaignById']),
    campaign() {
      return this.getCampaignById(this.$route.params.id);
    },
  },
  data() {
    return {
      showDeleteDialog: false,
    };
  },
  methods: {
    ...mapActions('campaigns', ['deleteCampaign']),
    deleteCampaign() {
      this.showDeleteDialog = true;
    },
    deleteConfirmed() {
      this.deleteCampaign(this.campaign.id);
      this.$router.push('/campaigns');
    },
  },
};
</script>

<style>
/* Styles for the CampaignDetail component go here */
</style>
