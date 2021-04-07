<template>
  <div class="mb-5 mt-5">
    <router-link
      to="/photo-progress"
      class="rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 mt-10 h-40 flex flex-col justify-center md:w-2/3 m-auto"
      style="background-color: #0d19a3"
    >
      <div class="flex flex-row justify-between px-2">
        <h2
          class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-center"
        >
          Photo Progress
        </h2>
        <span class="material-icons icon"> add_a_photo </span>
      </div>
    </router-link>

    <router-link
      to="/"
      class="rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 mt-5 h-40 flex flex-col justify-center md:w-2/3 m-auto"
      style="background-color: #0d19a3"
    >
      <div class="flex flex-row justify-between px-2">
        <h2
          class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-center"
        >
          Weight Tracker
        </h2>
        <span class="material-icons icon"> monitor_weight </span>
      </div>
    </router-link>

    <router-link
      to="/"
      class="rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 mt-5 h-40 flex flex-col justify-center md:w-2/3 m-auto"
      style="background-color: #0d19a3"
    >
      <div class="flex flex-row justify-between px-2 ">
        <h2
          class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-center"
        >
          Body Tracker
        </h2>
        <img class="w-20 md:w-24" src="../assets/fitness-img/bodyIcon.svg" alt="">
      </div>
    </router-link>
  </div>
</template>

<style lang="less">
.icon {
  font-size: 60px !important;
}

@media only screen and (min-width: 768px) {
  .icon {
      font-size: 72px !important;
  }
}
</style>