<template>
        <div v-if="cardio" class="w-screen flex justify-center items-center bg-color rounded-b-lg mb-32 md:mb-40">

            <div class="container mx-auto  rounded-b-lg overflow-hidden shadow-lg my-2 bg-white bg-color">
                <div class="relative pb-6 w-full h-80 main-bg-color workout-image-bg"
                    :style="{ 'background': 'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' + require('@/assets/fitness-img/workout-images/' + cardio.image) + ')'}"
                    >
                    <!-- <img class="w-full" src="/public/resources/fitness/cardioIMG-1.jpg"
                  alt="Profile picture" /> -->
                    <div class="text-center absolute w-full " style="bottom: -30px">
                        <div class="mb-4">
                            <p class="text-white tracking-wide uppercase text-lg font-bold md:text-3xl">{{ cardio.title }}</p>
                            <p class="text-gray-400 md:py-2 text-md md:text-xl">{{ cardio.duration }},  {{ cardio.title }}</p>
                        </div>
                        <button
                            class="p-4 rounded-full transition ease-in duration-200 focus:outline-none btn-add-workout light-blue-bg">
                            <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
                                <path fill="#010124" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                           C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                           C15.952,9,16,9.447,16,10z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class=" main-bg-color">
                    <span class="flex flex-row w-full h-10 p-5">
                        <!-- <img class="w-8" src="./resources/bodyIconActive.svg" alt="">
                        <h1 class="text-center text-md ml-5 flex items-center text-white">Body Weight</h1> -->
                    </span>


                    <div class="w-full md:w-4/5 m-auto  px-5">
                        <h1 class="text-white text-2xl md:text-4xl  py-3">Workout Details</h1>

                        <span class="flex flex-row w-full h-20 ">

                         <img class="w-8 md:w-14" :src="require(`@/assets/fitness-img/workout-images/` + cardio.focusIcon) " alt="">   

                        <h1 class="text-center text-md md:text-2xl ml-5 flex items-center text-white">{{cardio.bodyFocus}}</h1>
                    </span>
                        
                        <span class="flex flex-row">
                            <h1 class="gray-text-color text-md md:text-2xl py-2"> Calories Burn: </h1>
                            <h1 class="text-white text-md md:text-2xl py-2 ml-2"> {{ cardio.caloriesBurn }} </h1>
                        </span>
                        <span class="flex flex-row">
                            <h1 class="gray-text-color text-md md:text-2xl py-2"> Difficulty: </h1>
                            <h1 class="text-white text-md md:text-2xl py-2 ml-2"> {{ cardio.difficulty }} </h1>
                        </span>
                        <span class="flex flex-row">
                            <h1 class="gray-text-color text-md md:text-2xl py-2"> Equipment: </h1>
                            <h1 class="text-white text-md md:text-2xl py-2 ml-2"> {{ cardio.equipment }} </h1>
                        </span>
                        <span class="flex flex-row">
                            <h1 class="gray-text-color text-md md:text-2xl py-2"> Training Type: </h1>
                            <h1 class="text-white text-md md:text-2xl py-2 ml-2"> {{ cardio.trainigType}} </h1>
                        </span>                       
                    </div>
                    <hr class="w-5/6 mt-5 md:w-4/5 m-auto">

                     <h1 class="text-white text-2xl md:text-4xl px-5 mt-2 py-3 md:w-4/5 m-auto">Description</h1>

                    <p class="text-lg md:text-xl px-5 py-5 text-justify md:w-4/5 m-auto text-white no-word-spacing"> {{ cardio.description }} </p>
                        <div @click="showModal" class="w-3/5 h-10 m-auto text-center mt-7 text-xl rounded-3xl flex flex-col justify-center font-medium
                        light-blue-bg">Start Workout</div>
                        <WorkoutVideoModal
                        v-show="isModalVisible"
                        @close="closeModal"
                        :videoURL=" cardio.videoURL"
                        :workoutTitle="cardio.title"
                        :image="cardio.image"
                        
                        />
                </div>
            </div>
        </div>

</template>

<script>
import WorkoutVideoModal from '@/components/WorkoutVideoModal.vue'

const axios = require("axios");
// const url =
//   "https://gist.githubusercontent.com/Mateuszdzidaweb/93771e69396d15f796f95d00c2d69b44/raw/1067ee889bee38acfa7424191d6dee39338e32e9/workouts.json";
export default {
  props: ["id"],
  data() {
    return {
      cardio: null,
      isModalVisible: false,
    };
  },
  components:{
      WorkoutVideoModal
  },
  mounted() {
    axios
      .get(
        "https://my-json-server.typicode.com/Mateuszdzidaweb/fitness-app/cardios/" + this.id
      )
      .then((response) => {
        this.cardio = response.data;
        // this.workoutType = response.data;
        console.log(response);
        // console.log(this.workout)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
      showModal() {
        
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
  },
};
</script>

<style lang="less">
    .workout-image-bg{
    background-position: center center !important;
     background-size: cover !important;
    }

    .no-word-spacing{
        word-spacing: -1px;
    }

    hr{
        border: 1px solid #6a7380;
    }
</style>