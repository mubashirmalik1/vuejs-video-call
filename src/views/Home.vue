<template>
    <div class="wrapper fadeInDown">
      <div class="formContent">
        <div class="fadeIn first">
          <h3 v-if="user">Hello, {{user.name}}</h3>
          <h3 v-if="!user">You are not logged in.</h3>
        </div>
      </div>
    </div>
  <div class="wrapper fadeInDown"  v-if="user">
      <div class="formContent">
        <div class="fadeIn first">
          <div  class="fadeIn second">
            <h4 class="ml-5" style="text-align: left; font-size: 20px; padding-left: 15px">List of users to call</h4>
            <ul style="text-align: left; font-size: 17px" :key="u.id" v-for="u in users">
              <li> {{ u.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";
import axios from "axios";

export default {
    name: 'Home',

    data(){
        return {
          users:[]
        }
    },

    computed: {
          ...mapGetters(['user'])
      },
    async created() {
      if (localStorage.getItem("token")) {
        const res = await axios.get('get-users');
        if(await res.status === 200){
           this.users =await res.data.data;
        }else
        {
          console.log('something went wrong');
        }

      }
    },
}
</script>