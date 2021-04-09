<template>
  <div class="workout-sessions mb-28">
    <!-- <p class="text-red-500">{{ workoutType.type }}</p>
  <p class="text-white">{{ workout.description }}</p>
  <h1 class="text-white">{{ workout.duration }}</h1> -->

    <!-- <p class="text-red-500">{{ workout.title }}</p>
  <p class="text-white">{{ workout.description }}</p>
  <h1 class="text-white">{{ workout.duration }}</h1> -->

    <!-- <div v-for="item in workout" v-bind:key="item.id">
    <h1 class="text-white">{{ item.title }}</h1>
    <h1 class="text-white">{{ item.duration }}</h1>
  </div> -->

    <div class="mb-3">
      <h1 class="text-3xl font-bold p-2 my-2 text-white">Workout</h1>
      <!-- <p class="text-sm text-gray-500 uppercase font-bold">WEDNESDAY 5 AUGUST</p> -->
    </div>
    <div class="flex mb-5 flex-row flex-wrap">
      <div v-for="workout in workouts" v-bind:key="workout.id" class="w-1/2 px-1">
        <router-link :to="{ name: 'Workout Details', params: { id: workout.id }}"
 
          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 backgroundImage"
          :style="{
            backgroundImage: `url(${require('@/assets/fitness-img/fitnesIMG-2.png')})`,
          }"
        >
          <div class="h-32"></div>
          <h3 class="text-lg font-bold text-white leading-tight">
            {{ workout.title }}
          </h3>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
const axios = require("axios");
const url =
  "https://my-json-server.typicode.com/Mateuszdzidaweb/fitness-app/workouts/";
export default {
  data() {
    return {
      workouts: [],
      workoutType: [],
    };
  },
  mounted() {
    // axios
    //   .get(url
    //   )
    //   .then((response) => {
    //     this.workout = response.data.Title;
    //     this.workoutType = response.data;
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get(url)
      .then((response) => {
        this.workouts = response.data;
        // this.workoutType = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style lang="less">
.backgroundImage {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  background-position: center center;
  background-size: cover;
}
</style>