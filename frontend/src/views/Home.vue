<template>
  <div>
    <h1 class="title">Welcome to the Weather Campaigns App!</h1>
    <p>Log in with your Google account to get started.</p>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Home',
  components: {
    LoginForm,
  },
};
</script>
