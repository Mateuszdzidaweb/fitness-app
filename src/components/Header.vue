<template>
  <div
    class="w-full h-14 flex items-center top-0 sticky top-bar bg-dark-blue px-3 md:h-20 header"
  >
    <GoBack></GoBack>
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center route-name-width">
      {{ $route.name }}
    </h1>

    <router-link
      class="material-icons setting-icon right-3 absolute md:text-5xl"
      to="/settings"
    >
      settings
    </router-link>
    <span class="material-icons notification-icon right-14 md:right-16 absolute md:text-5xl">
      notifications_none
    </span>
  </div>
</template>



<style>
.header{
    z-index: 13 !important;
}
.material-icons {
  font-size: 32px !important;
}

.route-name-width {
  width: calc(100% + -84px);
}

@media only screen and (min-width: 768px) {
  .route-name-width {
    width: calc(100% + -110px);
  }

  .setting-icon, .notification-icon {
      font-size: 42px !important;
  }
}
</style>



<script>
import GoBack from "@/components/GoBack.vue";

export default {
  data() {
    return {};
  },
  components: {
    GoBack,
  },
};
</script>


