<template>
  <div class="workout-sessions mb-28 md:mb-40">
    <div class="mb-3 md:mb-5 md:mt-2 md:px-6 m-auto">
      <h1 class="text-3xl md:text-4xl font-bold p-2 my-2 ml-5 text-white">
        Workout
      </h1>
    </div>
    <div class="flex mb-5 flex-row flex-wrap md:px-5 m-auto">
      <div
        v-for="workout in workouts"
        v-bind:key="workout.id"
        class="w-1/2 px-1 md:px-2 workout-container"
      >
        <router-link
          :to="{ name: 'Workout Details', params: { id: workout.id } }"
          class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95 backgroundImage"
          :style="{
            background:
              'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
              require('../../assets/fitness-img/thumbnails/' +
                workout.thumbnail) +
              ')',
          }"
        >
          <div class="h-36 flex flex-col justify-end">
            <h3 class="text-lg md:text-2xl font-bold text-white leading-tight">
              {{ workout.title }}
            </h3>
          </div>
        </router-link>
      </div>
    </div>
    <h1
      class="text-3xl md:text-4xl font-bold p-2 md:p-5 my-2 ml-6 md:ml-14 text-white"
    >
      Cardio
    </h1>

         
    <swiper
      class="swiper-wrapper w-full justify-center"
      :slides-per-view="auto"
      :pagination="{ clickable: true }"
      :space-between="10"
      @swiper="setThumbsSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="cardio in cardios"
        v-bind:key="cardio.id"
        class="backgroundImageCardio slider-cardio"
        :style="{
          background:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(' +
            require('../../assets/fitness-img/workout-images/' +
              cardio.thumbnail) +
            ')',
        }"
      >
     
      <router-link class="" :to="{ name: 'Workout Cardio', params: { id: cardio.id } }">
        <h1 class="p-5 text-medium md:text-4xl text-white">{{ cardio.title }}</h1>
     </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>



<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
const axios = require("axios");
const url =
  "https://fintess-app-863f3-default-rtdb.firebaseio.com/workouts" + ".json";
const cardioURl =
  "https://fintess-app-863f3-default-rtdb.firebaseio.com/cardios" + ".json";
export default {
  data() {
    return {
      workouts: [],
      cardios: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    axios
      .get(url)
      .then((response) => {
        this.workouts = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      
    axios
      .get(cardioURl)
      .then((response) => {
        this.cardios = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


<style lang="less">
.backgroundImage,
.backgroundImageCardio {
  background-position: center center !important;
  background-size: cover !important;
}

.backgroundImage:nth-child(4) {
  background-position: top !important;
  background-size: cover !important;
}

.swiper-scrollbar {
  margin-top: 100px !important;
  // background-color: red !important;
}
.slider-cardio{
  width: 80% !important;
  height: 200px;
  margin-left: 35px;
}

.slider-cardio:nth-child(2) {
  margin-left: 70px;
}

.slider-cardio:nth-child(3) {
  margin-left: 80px;
}

.slider-cardio:nth-child(4) {
  margin-left: 75px;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px !important;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 4px;
  background-color: #25d3ed;
}

@media only screen and (min-width: 768px) {
  .backgroundImageCardio {
    background-position: top !important;
    background-size: cover !important;
  }

  .slider-cardio{
    width: 80% !important;
    height: 250px;
    margin-left: 75px;
  }

  .slider-cardio:nth-child(2) {
    margin-left: 150px;
  }

  .slider-cardio:nth-child(3) {
    margin-left: 150px;
  }

  .slider-cardio:nth-child(4) {
    margin-left: 155px;
  }
}

@media only screen and (min-width: 1024px) {
  .backgroundImageCardio {
    background-position: top !important;
    background-size: cover !important;
  }

  .slider-cardio {
    width: 80% !important;
    height: 300px;
    margin-left: 100px;
  }

  .slider-cardio:nth-child(2) {
    margin-left: 200px;
  }

  .slider-cardio:nth-child(3) {
    margin-left: 200px;
  }

  .slider-cardio:nth-child(4) {
    margin-left: 205px;
  }
}
</style>