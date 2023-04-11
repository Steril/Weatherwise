<template>
  <div>
    <h2 class="subtitle">My Campaigns</h2>
    <ul>
      <li v-for="campaign in campaigns" :key="campaign.id">
        {{ campaign.name }}
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
