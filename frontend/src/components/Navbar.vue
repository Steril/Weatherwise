<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/logo.png" alt="Logo" width="112" height="28">
      </a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isActive }" @click="toggleMenu" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/campaigns">Campaigns</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item" v-if="!user">
          <router-link class="button is-primary" to="/login">
            <strong>Log in</strong>
          </router-link>
        </div>
        <div class="navbar-item" v-if="user">
          <p>
            <strong>{{ user.email }}</strong>
            <br>
            <small v-if="user.plan">Plan: {{ user.plan }}</small>
            <br>
            <button class="button is-primary" @click="logout">Log out</button>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
/* Navbar styles go here */
</style>
