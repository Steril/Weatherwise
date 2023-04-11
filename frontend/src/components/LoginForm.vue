<template>
  <div>
    <form @submit.prevent="login">
      <div class="field">
        <label class="label">Email</label>
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
          <button class="button is-primary" type="submit">Log in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { hash } from '@/utils';

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      // Hash the password before sending it to the server
      const hashedPassword = await hash(this.password);

      // Send a POST request to the login endpoint
      const response = await this.$axios.post('/api/auth/login', {
        email: this.email,
        password: hashedPassword,
      });

      // Store the user data and token in local storage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);

      // Redirect to the home page
      this.$router.push('/');
    },
  },
};
</script>
