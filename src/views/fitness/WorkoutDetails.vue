<template>
  <h1 class="text-white">Single Workout</h1>
  <h1 class="text-white">The workout ID is {{ id }}</h1>
  <div v-if="workout">
    <h1 class="text-red-500 text-3xl">Title: {{ workout.title }}</h1>
  </div>

  <!-- <div class="flex mb-5 flex-row flex-wrap">
      <div v-for="item in workout" v-bind:key="item.id" class="w-1/2 px-1">
          <h3 class="text-lg font-bold text-white leading-tight">
            {{ item.title }}
          </h3>
      </div>
    </div> -->
</template>

<script>
const axios = require("axios");
// const url =
//   "https://gist.githubusercontent.com/Mateuszdzidaweb/93771e69396d15f796f95d00c2d69b44/raw/1067ee889bee38acfa7424191d6dee39338e32e9/workouts.json";
export default {
  props: ["id"],
  data() {
    return {
      workout: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/Mateuszdzidaweb/fitness-app/workouts/" + this.id
      )
      .then((response) => {
        this.workout = response.data;
        // this.workoutType = response.data;
        console.log(response);
        // console.log(this.workout)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>