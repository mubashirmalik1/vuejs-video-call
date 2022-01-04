<template >
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand" href="#">Video Calling</a>
            </div>
            <ul class="nav navbar-nav navbar-right" v-if="!user">
                <li>
                    <router-link to="/register">
                        <span class="glyphicon glyphicon-user"></span> 
                        Sign Up
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <span class="glyphicon glyphicon-log-in"></span>
                        Login
                    </router-link>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right" v-if="user">
                <li>
                  <router-link to="/video">
                    <span class="glyphicon glyphicon-phone"></span>
                    Video Call
                  </router-link>
                </li>
                <li>
                    <a href="javascript:void(0)" @click="handleClick">
                        <span class="glyphicon glyphicon-user"></span> 
                        Logout
                    </a>
                </li>
            </ul>
        </div>
        <hr />
    </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Header',
    methods: {
        handleClick() {
            localStorage.removeItem('token');
            this.$store.dispatch('user',null);
            this.$router.push('/home');
        }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>