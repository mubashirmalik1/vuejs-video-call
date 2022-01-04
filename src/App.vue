<template>
    <Header />
    <router-view />
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios'

export default {
    name : 'App',
    components : {
      Header
    },
    async created() {
      if (localStorage.getItem("token")) {
        const res = await axios.get('user');
        this.$store.dispatch('user', res.data.data);
      }
    }
}
</script>

<style>
  :root {
    --grey-lightest: #f7f9fa;
    --white: #ffffff;
    --grey: #c8d1dc;
    --dark-grey: #6b7785;
    --dark-blue: #1f2d3d;
    --dark-blue-border: #2b3f56;
    --teal: #56baed;
    --red-dark: #bb0c0c;
    --font-family: GraphikRegular, "Helvetica Neue", Sans-Serif;
  }
  body {
    margin: 0;
    min-height:100vh;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
  }
  iframe {
    min-width: 850px!important;
  }
  .navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover {
    color: black;
    background-color: transparent;
  }
</style>

