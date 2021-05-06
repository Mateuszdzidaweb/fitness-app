<template>
  <div class="weight-tracker mb-28">
    <div class="content-center">
      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-text rounded-br-lg rounded-bl-lg flex flex-col"
      >
        <h1 class="text-center text-2xl md:text-4xl text-white">
          Calories Burned and Activity Calculator
        </h1>
        <div
          class="text-white w-auto m-auto rounded-xl flex justify-around py-2 genreOption mt-4 mb-4 md:mt-8 md:mb-8"
        >
          <input @change="calculateCalories" v-model="selectedGenre" type="radio" name="sex" value="Male" checked data-icon="" />
          <input  @change="calculateCalories" v-model="selectedGenre" type="radio" name="sex" value="Female" data-icon="" />
        </div>
        <label class="text-white text-2xl md:text-4xl py-5" for="cars">Choose a wokrout:</label>
        <select
          v-model="selected"
          @change="calculateCalories"
          class="py-3 px-2 text-xl md:text-4xl text-white select-workout"
          name="workouts"
          id="workouts"
          
        >
        <option></option>
          <option
            v-for="workoutCaloriesBurner in workoutsCaloriesBurner"
            v-bind:key="workoutCaloriesBurner.id"
            :value="workoutCaloriesBurner"
            
          >
            {{ workoutCaloriesBurner.title }}
          </option>
        </select>
        <div class="px-4 md:w-full text-center lg:w-full mt-5 md:py-5">
          <label class="text-white text-xl md:text-3xl" for="workouts">HOW LONG IS YOUR WORKOUT?</label>
          <input
            v-model="workoutDuration"
            @change="calculateCalories"
            type="number"
            class="block border-2 border-white w-40 m-auto p-3 rounded my-4 py-2 text-2xl md:text-4xl text-white text-center workoutDurationInput"
            name="workoutDuration"
            placeholder="Minutes"
            required
          />
        </div>
                <div
          @click="calculateCalories"
          class="w-3/5 h-10 md:h-12 m-auto text-center mt-7 text-xl md:text-3xl rounded-3xl flex flex-col justify-center light-blue-bg"
        >
          Calculate
        </div>
        <!-- <h1 class="text-white">{{ selected }}</h1> -->

        <h1 v-if="caloriesResult !== null && workoutDuration !== null" 
        class="text-white text-xl md:text-3xl lg:text-4xl text-center py-5 lg:mt-10">
          In {{ workoutDuration }} minutes of ({{ selected.title }}) you will
          burn on average <b class="text-2xl md:text-3xl lg:text-4xl">{{ caloriesResult }} calories</b>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      workoutsCaloriesBurner: [],
      selected: null,
      workoutDuration: null,
      caloriesResult: null,
      selectedGenre: "Male",
    };
  },
  mounted() {
    axios
      .get(
        "https://fintess-app-863f3-default-rtdb.firebaseio.com/workoutCaloriesBurner" +
          ".json"
      )
      .then((response) => {
        this.workoutsCaloriesBurner = response.data;
        console.log(this.workoutsCaloriesBurner);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    calculateCalories() {
      if (this.selectedGenre == "Male") {
        this.caloriesResult =
          this.selected.caloriesPerMinuteMale * this.workoutDuration;
      } else if (this.selectedGenre == "Female") {
        this.caloriesResult =
          this.selected.caloriesPerMinuteFemale * this.workoutDuration;
      }
    },
  },
};
</script>


<style lang="less">
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

input[name="sex"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: none;

  &:after {
    background-color: #25d3ed;
    font-family: "FontAwesome";
    display: inline-block;
    text-align: center;
    font-size: 40px;
    content: attr(data-icon);
    padding: 0px 20px;
    border-radius: 15px;
    color: rgba(0, 0, 0, 0.4);
    transition: box-shadow 1s, color 1s;
  }

  &:checked {
    &:after {
    //   box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.4);
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

.genreOption{
    background-color: #25d3ed;
}

.select-workout{
    border: 1px solid white;
    background-color: #010124;
}
// .genreOption input[type="radio"] {
//   appearance: none;
//   width: 0;
//   height: 0;
//   opacity: 0;
// }

// .genreOption label {
//   background-color: blue;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

.workoutDurationInput {
  background-color: transparent;

  &:active {
    background-color: transparent;
    border: none;
  }
  &:focus {
    border: none;
    background: transparent;
  }
  &::after {
    background: transparent;
  }
  &::before {
    background: transparent;
  }
}
</style>