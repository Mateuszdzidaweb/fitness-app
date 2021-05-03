<template>
  <div
    v-if="workout"
    class="w-screen flex justify-center items-center bg-color rounded-b-lg mb-32 md:mb-40"
  >
    <div
      class="container mx-auto rounded-b-lg overflow-hidden shadow-lg my-2 bg-white bg-color"
    >
      <div
        class="relative pb-6 w-full h-80 main-bg-color workout-image-bg"
        :style="{
          background:
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' +
            require('@/assets/fitness-img/workout-images/' + workout.image) +
            ')',
        }"
      >
        <!-- <img class="w-full" src="/public/resources/fitness/cardioIMG-1.jpg"
                  alt="Profile picture" /> -->
        <div class="text-center absolute w-full" style="bottom: -30px">
          <div class="mb-4">
            <p
              class="text-white tracking-wide uppercase text-lg font-bold md:text-3xl"
            >
              {{ workout.title }}
            </p>
            <p class="text-gray-400 md:py-2 text-md md:text-xl">
              {{ workout.duration }}, {{ workout.title }}
            </p>
          </div>
          <button
            @click="AddToMyGoals"
            class="p-4 rounded-full transition ease-in duration-200 focus:outline-none btn-add-workout light-blue-bg"
          >
            <svg
              viewBox="0 0 20 20"
              enable-background="new 0 0 20 20"
              class="w-6 h-6"
            >
              <path
                fill="#010124"
                d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                           C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                           C15.952,9,16,9.447,16,10z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="main-bg-color">
        <span class="flex flex-row w-full h-10 p-5">
          <!-- <img class="w-8" src="./resources/bodyIconActive.svg" alt="">
                        <h1 class="text-center text-md ml-5 flex items-center text-white">Body Weight</h1> -->
        </span>

        <div class="w-full md:w-4/5 m-auto px-5">
          <h1 class="text-white text-2xl md:text-4xl py-3">Workout Details</h1>

          <span class="flex flex-row w-full h-20">
            <img
              class="w-8 md:w-14"
              :src="
                require(`@/assets/fitness-img/workout-images/` +
                  workout.focusIcon)
              "
              alt=""
            />

            <h1
              class="text-center text-md md:text-2xl ml-5 flex items-center text-white"
            >
              {{ workout.bodyFocus }}
            </h1>
          </span>

          <span class="flex flex-row">
            <h1 class="gray-text-color text-md md:text-2xl py-2">
              Calories Burn:
            </h1>
            <h1 class="text-white text-md md:text-2xl py-2 ml-2">
              {{ workout.caloriesBurn }}
            </h1>
          </span>
          <span class="flex flex-row">
            <h1 class="gray-text-color text-md md:text-2xl py-2">
              Difficulty:
            </h1>
            <h1 class="text-white text-md md:text-2xl py-2 ml-2">
              {{ workout.difficulty }}
            </h1>
          </span>
          <span class="flex flex-row">
            <h1 class="gray-text-color text-md md:text-2xl py-2">Equipment:</h1>
            <h1 class="text-white text-md md:text-2xl py-2 ml-2">
              {{ workout.duration }}
            </h1>
          </span>
          <span class="flex flex-row">
            <h1 class="gray-text-color text-md md:text-2xl py-2">
              Training Type:
            </h1>
            <h1 class="text-white text-md md:text-2xl py-2 ml-2">
              {{ workout.trainigType }}
            </h1>
          </span>
        </div>
        <hr class="w-5/6 mt-5 md:w-4/5 m-auto" />

        <h1
          class="text-white text-2xl md:text-4xl px-5 mt-2 py-3 md:w-4/5 m-auto"
        >
          Description
        </h1>

        <p
          class="text-lg md:text-xl px-5 py-5 text-justify md:w-4/5 m-auto text-white no-word-spacing"
        >
          {{ workout.description }}
        </p>
        <div
          @click="showModal"
          class="w-3/5 h-10 m-auto text-center mt-7 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Start Workout
        </div>

        <app-NameGoalModal
          v-show="isGoalNameModalVisible"
          @closeWithGoalID="TrigerAddExercise($event)"
          @close="closeGoalNameModal"
          :workoutID="workout.id"
          :workoutTitle="workout.title"
          :workoutImage="workout.image"
          :workoutDetails="this.workout"
          :workoutDuration="workout.duration"
          :workoutVideoURL="workout.videoURL"
        ></app-NameGoalModal>

        <app-AddOwnExerciseModal
          v-show="isAddOwnExerciseModalVisible"
          :currentGoalID="currentDocID"
          @close="closeAddOwnExerciseModal"
        ></app-AddOwnExerciseModal>

        <WorkoutVideoModal
          v-show="isModalVisible"
          @close="closeModal"
          :videoURL="workout.videoURL"
          :workoutTitle="workout.title"
          :image="workout.image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WorkoutVideoModal from "@/components/WorkoutVideoModal.vue";
import NameGoalModal from "@/components/goals-modal/Name-goalModal.vue";
import AddOwnExerciseModal from "@/components/goals-modal/AddOwnExerciseModal.vue";

const axios = require("axios");

export default {
  props: ["id"],
  data() {
    return {
      workout: null,
      isGoalNameModalVisible: false,
      isModalVisible: false,
      isAddOwnExerciseModalVisible: false,
      currentDocID: "",
    };
  },
  components: {
    WorkoutVideoModal,
    appNameGoalModal: NameGoalModal,
    appAddOwnExerciseModal: AddOwnExerciseModal,
  },
  mounted() {
    axios
      .get(
        "https://fintess-app-863f3-default-rtdb.firebaseio.com/workouts/" +
          this.id +
          ".json"
      )
      .then((response) => {
        this.workout = response.data;
        console.log(response);
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
    },
    closeGoalNameModal() {
      this.isGoalNameModalVisible = false;
      console.log("dsadsd");
    },
    AddToMyGoals() {
      this.isGoalNameModalVisible = true;
      console.log("add wokout to my goals " + this.id);
    },
    TrigerAddExercise(currentDocID) {
      this.currentDocID = currentDocID;
      this.isGoalNameModalVisible = false;
      console.log("ID past to parent " + this.currentDocID);
      this.isAddOwnExerciseModalVisible = true;
    },
    closeAddOwnExerciseModal() {
      this.isAddOwnExerciseModalVisible = false;
    },
  },
};
</script>

<style lang="less">
.workout-image-bg {
  background-position: center center !important;
  background-size: cover !important;
}

.no-word-spacing {
  word-spacing: -1px;
}

hr {
  border: 1px solid #6a7380;
}
</style>
