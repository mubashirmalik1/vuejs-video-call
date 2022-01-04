<template>
    <div class="wrapper fadeInDown">
      <div class="formContent">
        <!-- Icon -->
        <div class="fadeIn first">
          <h3>Register</h3>
        </div>

        <form @submit.prevent="handleSubmit">
          <input type="text" id="name" v-model="name" class="fadeIn second input" name="name" placeholder="Name">
          <input type="text" id="email" v-model="email" class="fadeIn second input" name="email" placeholder="Email">
          <input type="password" id="password" v-model="password" class="fadeIn second input" name="password" placeholder="Password">
          <input type="password" id="password_confirmation " v-model="password_confirmation" class="fadeIn second input" name="password_confirmation" placeholder="Confirm Password">
          <input type="submit" class="fadeIn fourth" value="Sign Up">
        </form>

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
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    async handleSubmit(){
      const res = await axios.post('register',{
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
      console.log(res);
      this.$router.push('/');
    }
  }
}
</script>
