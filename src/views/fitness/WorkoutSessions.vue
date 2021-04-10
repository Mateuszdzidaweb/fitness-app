<template>
  <div class="workout-sessions mb-28 md:mb-40">
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

    <div class="mb-3 md:mb-5 md:mt-2 md:px-6 m-auto">
      <h1 class="text-3xl md:text-4xl font-bold p-2 my-2 text-white">Workout</h1>
      <!-- <p class="text-sm text-gray-500 uppercase font-bold">WEDNESDAY 5 AUGUST</p> -->
    </div>
    <div class="flex mb-5 flex-row flex-wrap md:px-5 m-auto">
      <div v-for="workout in workouts" v-bind:key="workout.id" class="w-1/2 px-1 md:px-2 workout-container">
        <router-link :to="{ name: 'Workout Details', params: { id: workout.id }}"
 
          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 backgroundImage"
          
          :style="{ 'background': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' + require('../../assets/fitness-img/thumbnails/' + workout.thumbnail) + ')'}" >

        

          <div class="h-32"></div>
          <h3 class="text-lg md:text-2xl font-bold text-white leading-tight">
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
  "https://my-json-server.typicode.com/Mateuszdzidaweb/fitness-app/workouts";
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
//   background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  background-position: center center !important;
  background-size: cover !important;
}


</style>