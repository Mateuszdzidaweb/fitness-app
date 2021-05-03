<template>
  <div class="modal-goal-name">
    <div class="modal-goal-name w-full h-full flex flex-col justify-start">

      <button
        type="button"
        class="btn-close-goal-name"
        @click="closeCreateGoalModal"
      >
        x
      </button>

      <h1 class="text-white">Add Goal</h1>

      <!-- <div class="w-full">
        <h1
          class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
        >
          Name Your goal
        </h1>
      </div> -->

      <section class="modal-goal-name-body w-full">
    <div class="flex mb-5 flex-row flex-wrap md:px-5 m-auto">
      <div
        v-for="workout in workouts"
        v-bind:key="workout.id"
        class="w-1/2 px-1 md:px-2 workout-container"
        @dragover.prevent
        @drop.prevent="drop"
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
        <button
          @click="addExercise"
          class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add Exercise
        </button>
        <!-- <app-AddExerciseModal
          v-show="addExerciseModal"
          @click="closeAddExerciseModal"
          :currentGoalID="currentDocID"
        ></app-AddExerciseModal> -->
      </section>

      <!-- <footer class="modal-goal-name-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer> -->
    </div>
  </div>
</template>

<script>
// import AddExerciseModal from "@/components/goals-modal/AddExerciseModal.vue";
const axios = require("axios");
const url =
  "https://fintess-app-863f3-default-rtdb.firebaseio.com/workouts" + ".json";
export default {
    
  data() {
    return {
        
    };
  },
  components: {
    // appAddExerciseModal: AddExerciseModal,
  },
  mounted(){
      axios
      .get(url)
      .then((response) => {
        this.workouts = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
      closeCreateGoalModal(){
          this.$emit('close')
      },
      drop: e =>{
          const workout_id = e.dataTransfer.getData('workout_id');
          const workout  = document.getElementById(workout_id);

          e.target.appendChild(workout);
      }
  }
};
</script>



<style lang="less" >
.modal-goal-name {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgb(0 0 0 / 98%); */
  background-color: #010124;
  /* background-color: #01012480; */
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 12;
  //   display: block !important;
}

/* .wrap iframe{opacity:0;} */

.modal-goal-name-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-goal-name-body {
  position: relative;
  /* border-bottom: 1px solid #eeeeee; */
}

.btn-close-goal-name {
  position: absolute;
  top: -25px;
  right: 0;
  border: none;
  font-size: 35px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  color: #000010;
  background: transparent;
}

.btn-green {
  color: white;
  background: #25d3ed;
  border: 1px solid #25d3ed;
  border-radius: 2px;
}

input {
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
 
