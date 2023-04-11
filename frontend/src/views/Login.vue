<template>
  <div>
    <h2 class="subtitle">Log in to Weather Campaign Manager</h2>

    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="email" v-model="email" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="password" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary">Log in</button>
        </div>
      </div>

      <div v-if="error" class="notification is-danger">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('/api/auth/login', {
          email: this.email,
          password: this.password,
        });

        this.$store.commit('auth/setUser', response.data.user);
        this.$store.commit('auth/setToken', response.data.token);

        this.$router.push('/campaigns');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          this.error = error.response.data.message;
        } else {
          this.error = 'An error occurred while logging in. Please try again later.';
        }
      }
    },
  },
};
</script>

<style>
/* Login styles go here */
</style>
