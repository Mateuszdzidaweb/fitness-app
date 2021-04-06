<template>
  <div class="dashboard">
    <div class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42">
      <img
        class="rounded-full"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt=""
      />
    </div>
    <h1 class="text-center pt-2 text-xl md:text-5xl text-white">{{ email }}</h1>
    <div class="swiper-container h-44 mt-6 md:h-60 flex flex-row">
      <swiper class="swiper-wrapper w-full" :options="swiperOption">
        <swiper-slide class="slider ml-5">
          <span class="w-20 h-auto top-4 absolute md:w-32">
            <img
              class="ml-5 transform-rotate"
              src="../assets/nav-icons/fitnes.svg"
              alt=""
            />
          </span>
          <h1 class="p-5 font-medium dark-text-color md:text-4xl">Exercises</h1>
        </swiper-slide>
        <swiper-slide class="slider2 diet-bg-color">
          <span class="w-20 h-auto top-4 absolute md:w-32">
            <img
              class="ml-5 transform-rotate"
              src="../assets/nav-icons/diet.svg"
              alt=""
            />
          </span>
          <h1 class="p-5 font-medium dark-text-color md:text-4xl">Diet</h1>
        </swiper-slide>
      </swiper>
    </div>
    <h1 class="mt-2 p-5 text-3xl text-center text-white md:py-20 md:text-5xl">
      Achievements
    </h1>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import firebase from "firebase";
// Import Swiper styles
import "swiper/swiper.scss";
export default {
  data() {
    return {
      user: null,
      email: null,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          centeredSlides: false,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  created() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.user = user;
    //   } else {
    //     this.user = null;
    //   }
    // });
    setTimeout(() => {
      let user = firebase.auth().currentUser;
      this.email = user.email;
    }, 0.1);
  },
};
</script>


<style>
.swiper-slide,
.swiper-wrapper {
  /* transition-duration: 0ms; transform: translate3d(-190px, 0px, 0px) !important; */
  /* transform: translate3d(-190px, 0px, 0px); */
}

.translate {
  transform: translate3d(-190px, 0px, 0px);
}

.slider {
  text-align: center;
  font-size: 24px !important;
  width: 75% !important;
  border-radius: 10px;
  align-items: flex-end !important;
  justify-content: flex-start !important;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transform: scale(0.9);
}

.slider {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}

/* .swiper-slide {
    width: 80%;
  }
  .swiper-slide:nth-child(2n) {
    width: 60%;
  }
  .swiper-slide:nth-child(3n) {
    width: 40%;
  } */

.swiper-slide-prev {
  margin-left: 150px !important;
  transition: 300ms ease-in-out;
}

.swiper-slide-active {
  transition: transform 0.2s;
  animation: ease-in-out;
  transform: scale(1);
  border-radius: 10px;
}
</style>
