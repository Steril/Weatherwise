<template>
  <div>
    <h2 class="subtitle">{{ formTitle }}</h2>

    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="campaign.name" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Location</label>
        <div class="control">
          <input class="input" type="text" v-model="campaign.location" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Weather Condition</label>
        <div class="control">
          <input class="input" type="text" v-model="campaign.weather_condition" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary">{{ submitButtonLabel }}</button>
          <router-link class="button is-danger" to="/campaigns">Cancel</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CampaignForm',
  props: {
    formType: {
      type: String,
      required: true,
    },
    campaignData: {
      type: Object,
      default: () => ({ name: '', location: '', weather_condition: '' }),
    },
  },
  computed: {
    formTitle() {
      return this.formType === 'edit' ? 'Edit Campaign' : 'New Campaign';
    },
    submitButtonLabel() {
      return this.formType === 'edit' ? 'Save Changes' : 'Create Campaign';
    },
  },
  data() {
    return {
      campaign: this.campaignData,
    };
  },
  methods: {
    async submitForm() {
      if (this.formType === 'edit') {
        await this.$axios.put(`/api/campaigns/${this.campaign.id}`, this.campaign);
      } else {
        await this.$axios.post('/api/campaigns', this.campaign);
      }

      this.$router.push('/campaigns');
    },
  },
};
</script>

<style>
/* CampaignForm styles go here */
</style>
