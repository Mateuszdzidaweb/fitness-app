<template>
  <div class="modal-add-exercise">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header-add-own-exercise">
        <slot name="header">
          <!-- <h1 class="text-xl main-blue-font">Edit Profile</h1> -->
          <button
            type="button"
            class="btn-close-add-own-exercise-modal"
            @click="closeAddExerciseModal"
          >
            x
          </button>
          <h1
            class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
          >
            Select Exercise
          </h1>
        </slot>
      </header>

      <section class="modal-body-add-own-exercise">
        <div class="px-4 h-auto md:w-2/3 center lg:w-2/4 text-white">
          <div class="px-4 md:w-2/3 center lg:w-2/4">
            <input
              v-model="OwnExerciseGoalName"
              type="text"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white mt-10"
              name="goalName"
              placeholder="Goal Name ..."
              required
            />
          </div>

          <div class="px-4 md:w-2/3 center lg:w-2/4">
            <textarea
              v-model="OwnExerciseDescription"
              type="text"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-xl h-50 text-white mt-10 h-40"
              name="goalinstructions"
              placeholder="Goal Instructions ..."
              maxlength="50"
            />
          </div>

            <div
            class="flex flex-row justify-around mt-5">
            <h1 class="text-xl flex items-center">Reps</h1>
            <h1 class="text-xl flex items-center">Sets</h1>
            </div>

          <div
            class="flex flex-row justify-around"
          >
            <input
              v-model="OwnExerciseRepsValue"
              type="number"
              class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-2 ml-3 text-center"
              name="distance"
              placeholder=""
              required
            />
          
            <input
              v-model="OwnExerciseSetsValue"
              type="number"
              class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-2 text-center"
              name="distance"
              placeholder=""
              required
            />
          </div>

          <!-- Running -->

          <!-- <div class="p-2">
            <input
              class=""
              type="radio"
              id="running"
              name="exercise"
              value="Running"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="running">Running</label><br />
            <div v-if="selectedExercise == exercise1" class="flex flex-row">
              <input
                v-model="ExerciseRepsTimeValue"
                type="number"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-3 ml-10 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="ml-3 text-xl flex items-center">Km</h1>
            </div>
          </div> -->

          <!-- Push Up -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="pushUp"
              name="exercise"
              value="Push Up"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="pushUp">Push Up</label><br />
            <div
              v-if="selectedExercise == exercise2"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->

          <!-- Bench Press -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="benchPress"
              name="exercise"
              value="Bench Press"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="benchPress">Bench Press</label
            ><br />
            <div
              v-if="selectedExercise == exercise3"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->

          <!-- Pull Up -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="pullUp"
              name="exercise"
              value="Pull Up"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="pullUp">Pull Up</label><br />
            <div
              v-if="selectedExercise == exercise4"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->

          <!-- Shoulder Press -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="shoulderPress"
              name="exercise"
              value="Shoulder Press"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="shoulderPress"
              >Shoulder Press</label
            ><br />
            <div
              v-if="selectedExercise == exercise5"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->

          <!-- Deadlift -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="deadLift"
              name="exercise"
              value="Deadlift"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="deadLift">Dead Lift</label><br />
            <div
              v-if="selectedExercise == exercise6"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->

          <!-- Back Squat -->
          <!-- <div class="p-2">
            <input
              type="radio"
              id="backSquat"
              name="exercise"
              value="Back Squat"
              v-model="selectedExercise"
            />
            <label class="text-2xl ml-3" for="backSquat">Back Squat</label>
            <div
              v-if="selectedExercise == exercise7"
              class="flex flex-row justify-around"
            >
              <input
                v-model="ExerciseRepsTimeValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 ml-3 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Reps</h1>
              <input
                v-model="ExerciseSetsValue"
                type="text"
                class="block border-1 border-white w-20 p-1 rounded mb-4 text-2xl text-white mt-5 text-center"
                name="distance"
                placeholder=""
                required
              />
              <h1 class="text-xl flex items-center">Sets</h1>
            </div>
          </div> -->
        </div>
        <button
          @click="addExercise"
          class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add
        </button>
      </section>

      <!-- <footer class="modal-footer">
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
let db = firebase.firestore();
import firebase from "firebase";
export default {
  props: ["currentGoalID"],
  data() {
    return {
    //   ExerciseRepsTimeValue: null,
    //   ExerciseSetsValue: null,
      //   exercise1: "Running",
      //   exercise2: "Push Up",
      //   exercise3: "Bench Press",
      //   exercise4: "Pull Up",
      //   exercise5: "Shoulder Press",
      //   exercise6: "Deadlift",
      //   exercise7: "Back Squat",
      //   selectedExercise: null,
    };
  },
  methods: {
    closeAddExerciseModal() {
      this.$emit("close");
      console.log("modal AddExerciseModal closed");
    },
    closeAndOpenNextModal() {
      this.$emit("closeAndOpenNextModal");
    },
    addExercise() {
      event.preventDefault();

      firebase.auth().onAuthStateChanged((user) => {
        if (this.selectedExercise !== null) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .doc(this.currentGoalID)
            .update({
              OwnExerciseGoalName: this.OwnExerciseGoalName,
              OwnExerciseDescription: this.OwnExerciseDescription,
              OwnExerciseRepsValue: this.OwnExerciseRepsValue,
              OwnExerciseSetsValue: this.OwnExerciseSetsValue,
            })
            .then(() => {
              console.log("exercise Added");
             this.$router.push('/goals');
            });
        } else {
          alert("You need to select Exercise");
        }
      });
    },
  },
};
</script>


<style lang="less" >
.modal-add-exercise {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgb(0 0 0 / 98%); */
  background-color: #010124;
  /* background-color: #01012480; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
}

/* .wrap iframe{opacity:0;} */

.modal-body-add-own-exercise {
  position: relative;
  /* border-bottom: 1px solid #eeeeee; */
}

.btn-close-add-own-exercise-modal {
  position: absolute;
  top: 50px;
  right: 0;
  border: none;
  font-size: 35px;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  color: #25d3ed;
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
  border: 1px solid white;
  &:active {
    background-color: transparent;
  }
  &:focus {
    background: transparent;
  }
  &::after {
    background: transparent;
  }
  &::before {
    background: transparent;
  }
}

// input[type="radio"] {
//   border: 0px;
//   width: 10%;
//   height: 1.3em;
// }
</style>