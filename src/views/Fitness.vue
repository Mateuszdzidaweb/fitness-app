<template>
  <div class="">
    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/goals"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 nav-blue-bg"
        :style="{
          background:
            'linear-gradient(rgb(0 22 70 / 0%), rgba(0, 20, 70, 0.3)), url(' +
            require('../assets/fitness-img/goals-nav-img.png') +
            ') right top no-repeat',
        }"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Goals
          </h2>
          <img class="w-auto h-44" src="" alt="" />
        </div>
      </router-link>
    </div>

    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/workout-sessions"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 nav-blue-bg"
        :style="{
          background:
            'linear-gradient(rgb(0 22 70 / 0%), rgba(0, 20, 70, 0.3)), url(' +
            require('../assets/fitness-img/workout-session-icon.png') +
            ') right no-repeat',
        }"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Workout Sessions
          </h2>
          <img class="w-auto h-44" src="" alt="" />
        </div>
      </router-link>
    </div>

    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/workout-tips"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 nav-blue-bg"
        :style="{
          background:
            'linear-gradient(rgb(0 22 70 / 0%), rgba(0, 20, 70, 0.3)), url(' +
            require('../assets/fitness-img/workout-tips-icon.png') +
            ') right no-repeat',
        }"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Workout Tips
          </h2>
          <img class="w-auto h-44" src="" alt="" />
        </div>
      </router-link>
    </div>

    <div class="pb-32 md:w-2/3 m-auto">
      <router-link
        to="/calories-burner"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 nav-blue-bg"
        :style="{
          background:
            'linear-gradient(rgb(0 22 70 / 0%), rgba(0, 20, 70, 0.3)), url(' +
            require('../assets/fitness-img/calories-burner-icon3.png') +
            ') right no-repeat',
        }"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Calories Burner
          </h2>
          <img class="w-auto h-44" src="" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>



<style lang="less">
.nav-blue-bg {
  background-color: rgb(13, 25, 163) !important;
}
</style>