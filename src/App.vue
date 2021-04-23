<template>
  <div id="nav">
    <app-header v-if="showMenu"></app-header>

    <router-view v-slot="{ Component }" >
        <transition name="route" mode="out-in">
         <component :is="Component"></component>
        </transition>
    </router-view>

    <!-- <router-view v-slot="{ Component }">
      <transition 
       enter-active-class="animate__animated animate__fadeInLeft"
       leave-active-class="animate__animated animate__fadeOutLeft"
       mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view> -->

    <app-navbar v-if="showMenu"></app-navbar>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Navbard from "@/components/Navbar.vue";

export default {
  data() {
    return {
      //    authenticated: sessionStorage.getItem('authenticated') === 'true',
    };
  },
  components: {
    appHeader: Header,
    appNavbar: Navbard,
  },
  computed: {
    showMenu() {
      return this.$route.path !== "/login" && this.$route.path !== "/register"
      && this.$route.path !== "/create-profile";
    },
  },
};
</script>


<style lang="less">
#nav {
  a {
    color: white;

    &.router-link-exact-active {
      color: #25d3ed !important ;
      transform: scale(1.2);
      animation: ease-in-out 1s;
    }
    &:hover {
      text-decoration: none;
    }
  }
}

// Route Transitions

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.router-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
