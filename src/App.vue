<template>
  <div id="nav">
    <app-header v-if="showMenu" ></app-header>

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> | -->

    <router-view />
    <app-navbar v-if="showMenu"></app-navbar>
  </div>
</template>



<style lang="less">
#nav {
  a {
       color: white ;

    &.router-link-exact-active {
      color: #25d3ed !important ;
      transform: scale(1.1);
      animation: ease-in-out 0.8s;
    }
        &:hover{
            text-decoration: none;
        }
  }
}
</style>


<script>
import Header from "@/components/Header.vue";
import Navbard from "@/components/Navbar.vue";
// import firebase from 'firebase'

export default {
    data(){
        return{
        //    authenticated: sessionStorage.getItem('authenticated') === 'true',
        }
    },
  components: {
    appHeader: Header,
    appNavbar: Navbard,
  },
  computed: {
    showMenu() {
     return this.$route.path !== '/login' && this.$route.path !== '/register';
    
    },
  },
};
</script>
