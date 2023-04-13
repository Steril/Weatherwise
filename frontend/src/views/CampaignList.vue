<template>
  <div>
    <h1 class="title">Campaign List</h1>
    <ul>
      <li v-for="campaign in campaigns" :key="campaign.id">
        <router-link :to="{ name: 'campaign-detail', params: { id: campaign.id } }">{{ campaign.name }}</router-link>
      </li>
    </ul>
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
    // TODO: Fetch campaigns from the backend API
  },
};
</script>
