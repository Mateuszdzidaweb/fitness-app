<template>
        <div v-if="workout" class="w-screen flex justify-center items-center bg-color rounded-b-lg mb-32">

            <div class="container mx-auto  rounded-b-lg overflow-hidden shadow-lg my-2 bg-white bg-color">
                <div class="relative pb-6 w-full h-80 main-bg-color"
                    style="    background: linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(./resources/fitness/cardioIMG-1.jpg) center center / cover;">
                    <!-- <img class="w-full" src="/public/resources/fitness/cardioIMG-1.jpg"
                  alt="Profile picture" /> -->
                    <div class="text-center absolute w-full " style="bottom: -30px">
                        <div class="mb-4">
                            <p class="text-white tracking-wide uppercase text-lg font-bold">{{ workout.title }}</p>
                            <p class="text-gray-400 text-md">{{ workout.duration }},  {{ workout.title }}</p>
                        </div>
                        <button
                            class="p-4 rounded-full transition ease-in duration-200 focus:outline-none btn-add-workout">
                            <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
                                <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                           C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                           C15.952,9,16,9.447,16,10z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="h-80 main-bg-color">
                    <span class="flex flex-row w-full h-20 p-5">
                        <!-- <img class="w-8" src="./resources/bodyIconActive.svg" alt=""> -->
                        <h1 class="text-center text-md ml-5 flex items-center text-white">Body Weight</h1>
                    </span>
                    <span class="flex flex-row w-full h-20 p-5">
                        <!-- <img class="w-8" src="./resources/fitnesActive.svg" alt=""> -->
                        <h1 class="text-center text-md ml-5 flex items-center text-white">Total Body</h1>
                    </span>
                    <p class="text-md px-5 py-2 text-justify text-white"> {{ workout.description }} </p>
                        <div class="w-3/5 h-10 m-auto text-center mt-7 text-xl bg-red-500 rounded-3xl flex flex-col justify-center font-medium
                        viewAchievementsButton">Start Workout</div>
                </div>
            </div>
        </div>

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