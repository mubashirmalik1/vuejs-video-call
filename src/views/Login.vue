<template>
    <div class="wrapper fadeInDown">
      <div class="formContent">
        <!-- Tabs Titles -->

        <!-- Icon -->
        <div class="fadeIn first">
          <h3>Login</h3>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleSubmit">
          <input type="text" id="login" class="fadeIn second input" v-model="email" name="email" placeholder="Email">
          <input type="password" id="password" class="fadeIn third input" v-model="password" name="password" placeholder="Password">
          <input type="submit" class="fadeIn fourth" value="Log In">
        </form>

        <!-- Remind Passowrd -->
        <div id="formFooter">
        </div>

      </div>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit(){
      const res = await axios.post('login',{
        email: this.email,
        password:this.password
      });
      if(await res){
       await localStorage.setItem('token', res.data.data.access_token);
       console.log(res.data.data.user);
        this.$store.dispatch('user',res.data.data.user)
        await this.$router.push('/home')
      }
      
    }
  }

}
</script>
