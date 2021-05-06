<template>
  <div class="mb-28">
    <div class="mb-3 mt-5 px-2">
      <!-- <p class="text-sm text-gray-500 uppercase font-bold">THURSDAY 6 AUGUST</p> -->
    </div>

    <div 
        v-for="workoutTips in wokroutsTips"
        v-bind:key="workoutTips.id"
    class="mb-5 mt-5">
      <router-link :to="{ name: 'Workout Tip', params: {id: workoutTips.id} }"
        class="block rounded-lg relative  p-5 transform transition-all duration-300 scale-100 hover:scale-95 w-full md:w-4/5 lg:w-3/5 m-auto h-52"
         :style="{
            background:
              'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
              require('../../assets/fitness-img/workoutTips/' +
                workoutTips.workoutTipImg) +
              ') center no-repeat' ,
          }"
      >
        <div class="absolute top-0 right-0 -mt-3 mr-3">
          <!-- <div
            class="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"
          >
            <i class="mdi mdi-fire text-base align-middle"></i>
            <span class="align-middle">New</span>
          </div> -->
        </div>
        <div class="h-32 w-auto"></div>
        <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5 md:w-1/2">
          {{ workoutTips.title }}
        </h2>
        <div
          class="flex w-full items-center text-sm text-gray-300 font-medium"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
const urlWorkoutTips =
  "https://fintess-app-863f3-default-rtdb.firebaseio.com/workoutTips" + ".json";
export default {
    data(){
        return{
            wokroutsTips: [],
        }
    },
    mounted(){
        axios
        .get(urlWorkoutTips)
        .then((response) =>{
            this.wokroutsTips = response.data;
            console.log(this.wokroutsTips);
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}
</script>

