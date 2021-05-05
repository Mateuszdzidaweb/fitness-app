<template>
  <div class="dashboard">
    <div
      v-if="profile.avatarURL"
      class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42"
    >
      <img
        class="rounded-full w-auto h-32"
        v-bind:src="profile.avatarURL"
        alt=""
      />
    </div>

    <div
      v-if="profile.avatarURL == null || profile.avatarURL == ''"
      class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42"
    >
      <img
        class="rounded-full w-auto h-auto bg-white"
        src="https://i.ibb.co/dbR1RMq/93-938537-png-file-fa-user-circle-o-transparent-png-removebg-preview.png"
        alt=""
      />
    </div>

    <!-- <h1 v-for="user in Users" :key="user.key" class="text-center pt-2 text-xl md:text-5xl text-white">
      {{ user.name }}
    </h1> -->
    <h1 class="text-center pt-2 mt-2 text-2xl md:text-5xl text-white">
      {{ profile.name }}
    </h1>
    <h1></h1>
    <div class="swiper-container h-44 mt-10 md:h-60 flex flex-row">
      <swiper class="swiper-wrapper-home w-full" :options="swiperOption">
        <swiper-slide class="slider-home ml-5">
          <span class="w-20 h-auto top-4 absolute md:w-32">
            <img
              class="ml-5 transform-rotate"
              src="../assets/nav-icons/fitnes.svg"
              alt=""
            />
          </span>
          <h1 class="p-5 font-medium dark-text-color md:text-4xl">Exercises</h1>

          <circle-progress
            :percent="progressBarValue"
            :transition="2000"
            fill-color="#010124"
            class="goal-progress-bar"
            :is-bg-shadow="false"
            :bg-shadow="{
              inset: false,
              vertical: 2,
              horizontal: 2,
              blur: 0,
              opacity: 0.4,
              color: '#000000',
              percent: 10,
            }"
            empty-color="#f7f7f7"
            :border-width="18"
            :border-bg-width="20"
            :gradient="{
              angle: 90,
            }"
          />
          <div>
            <h1 class="absolute top-14 right-20 text-black text-4xl">
              {{ numberOfGoalsCompleted }}
            </h1>
            <h1 class="absolute top-16 right-16 text-black text-4xl">/</h1>
            <h1 class="absolute top-20 right-10 text-black text-3xl">
              {{ numberOfAllGoals }}
            </h1>
          </div>
        </swiper-slide>
        <swiper-slide class="slider-home slider2 diet-bg-color">
          <span class="w-20 h-auto top-4 absolute md:w-32">
            <img class="ml-5" src="../assets/nav-icons/diet.svg" alt="" />
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
import CircleProgress from "vue3-circle-progress";
import { Swiper, SwiperSlide } from "swiper/vue";
import firebase from "firebase";
let db = firebase.firestore();
import "firebase/storage";
// import { fb, db } from "../assets/js/AuthConfig";
// Import Swiper styles
import "swiper/swiper.scss";
export default {
  data() {
    return {
      profile: [],
      avatarSRC: "no avatar",
      user: null,
      logedinUser: null,
      numberOfGoalsCompleted: 0,
      numberOfAllGoals: 0,
      progressBarValue: 0,
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
    CircleProgress,
  },
  //   firestore(){
  //       const user = fb.auth().currentUser;
  //       return{
  //           profile: db.collection('profiles').doc(user.uid),
  //       }
  //   },
  created() {
    this.getUsername();
    this.getNumberOfCompletedGoal();
    this.getNumberOfAllGoals();
    this.countGoalProgresBar();
  },
  methods: {
    getUsername() {
      // Query database in real time
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("profiles")
            .doc(user.uid)
            .onSnapshot((doc) => {
              this.profile = doc.data();
              console.log(this.profile);
            });
        } else {
          this.profile = null;
        }
      });
      //   No Real time daatabase query
      //   firebase.auth().onAuthStateChanged((user) => {
      //     if (user) {
      //       db.collection("profiles")
      //         .doc(user.uid)
      //         .get()
      //         .then((doc) => {
      //           this.profile = doc.data();
      //           console.log(this.profile);
      //         });
      //     } else {
      //       this.profile = null;
      //     }
      //   });
    },
    getNumberOfCompletedGoal() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .where("GoalCompleted", "==", true)
            .onSnapshot((querySnapshot) => {
              this.numberOfGoalsCompleted = querySnapshot.docs.length;
              console.log(this.numberOfGoalsCompleted);
            });
        }
      });
    },
    getNumberOfAllGoals() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .onSnapshot((querySnapshot) => {
              this.numberOfAllGoals = querySnapshot.docs.length;
              console.log(this.numberOfAllGoals);
            });
        }
      });
    },
    countGoalProgresBar() {
      // let progressBarValue = 10;
      setTimeout(() => {
        if (this.numberOfAllGoals !== 0) {
          this.progressBarValue =
            (100.0 * this.numberOfGoalsCompleted) / this.numberOfAllGoals;
        }else{
            this.progressBarValue = 0;
        }

        console.log(this.progressBarValue);
      }, 200);
    },

    // getUserAvatar(){
    //     firebase.auth.onAuthStateChanged((user) => {
    //         if(user){
    //             db.colection("profiles")
    //             .doc(user.uid)
    //             .onSnapshot((doc) => {

    //             })
    //         }
    //     });
    // },

    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>


<style lang="less">
.swiper-slide,
.swiper-wrapper {
  /* transition-duration: 0ms; transform: translate3d(-190px, 0px, 0px) !important; */
  /* transform: translate3d(-190px, 0px, 0px); */
}
.translate {
  transform: translate3d(-190px, 0px, 0px);
}
.slider-home {
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
  &.swiper-slide-prev {
    margin-left: 150px !important;
    transition: 300ms ease-in-out;
  }
}
.slider-home {
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

.transform-rotate {
  transform: rotate(-45deg);
}

.swiper-slide-active {
  transition: transform 0.2s;
  animation: ease-in-out;
  transform: scale(1);
  border-radius: 10px;
}

.goal-progress-bar > svg {
  margin-top: 25px;
  margin-right: 10px;
}
</style>
