<template>
  <div>
    <h1 class="title">My Campaigns</h1>
    <ul>
      <li v-for="campaign in campaigns" :key="campaign.id">
        {{ campaign.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Campaigns',
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
