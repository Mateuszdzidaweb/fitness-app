<template>
  <div class="modal-goal-name">
    <div class="modal-goal-name w-full h-full flex flex-col justify-start">
      <div
        class="relative pb-6 w-full h-80 main-bg-color workout-image-bg mt-16"
        :style="{
          background:
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' +
            require('@/assets/fitness-img/workout-images/' + workoutImage) +
            ')',
        }"
      >
        <button
          type="button"
          class="btn-close-goal-name"
          @click="closeGoalNameModal"
        >
          x
        </button>
        <!-- <img class="w-full" src="/public/resources/fitness/cardioIMG-1.jpg"
                  alt="Profile picture" /> -->
        <div class="text-center absolute w-full" style="bottom: 20px">
          <div class="mb-4">
            <p
              class="text-white tracking-wide uppercase text-lg font-bold md:text-3xl"
            >
              {{ workoutTitle }}
            </p>
            <p class="text-gray-400 md:py-2 text-md md:text-xl"></p>
          </div>
        </div>
      </div>

      <!-- <div class="w-full">
        <h1
          class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
        >
          Name Your goal
        </h1>
      </div> -->

      <section class="modal-goal-name-body w-full">
        <div class="px-4 md:w-2/3 center lg:w-2/4">
          <input
            v-model="goalName"
            type="text"
            class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white mt-10"
            name="goalName"
            placeholder="Goal Name ..."
            required
          />
        </div>

        <div class="text-white flex justify-center mt-10">
          <div class="p-2">
            <input
              class="radio-btn-goal-time-range"
              type="radio"
              id="daily"
              name="goalTimeRange"
              value="Daily"
              v-model="goalTimeRange"
            />
            <label class="text-2xl ml-3" for="shoulderPress">Daily</label>
          </div>

          <div class="p-2">
            <input
              class="ml-10 p-2 radio-btn-goal-time-range"
              type="radio"
              id="weekly"
              name="goalTimeRange"
              value="Weekly"
              v-model="goalTimeRange"
            />
            <label class="text-2xl ml-3" for="shoulderPress">Weekly</label>
          </div>
        </div>

        <button
          @click="addToGaols"
          class="h-10 md:h-12 m-auto text-center mt-7 px-10 text-xl md:text-2xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add Goal
        </button>
        <button
          @click="addCurrentAndOwnGoal"
          class="h-10 md:h-12 m-auto text-center mt-7 px-10 text-xl md:text-2xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add More
        </button>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
let db = firebase.firestore();
// import AddExerciseModal from "@/components/goals-modal/AddExerciseModal.vue";
export default {
  props: [
    "workoutID",
    "workoutTitle",
    "workoutImage",
    "workoutDetails",
    "workoutDuration",
    "workoutVideoURL",
  ],
  data() {
    return {
      currentDocID: "null",
      addExerciseModal: false,
      completed: false,
      goalName: "",
    };
  },
  components: {
    // appAddExerciseModal: AddExerciseModal,
  },
  name: "Modal",
  created() {},
  methods: {
    addOwnGoalExercise() {
      this.$emit("closeWithGoalID", this.currentDocID);
      console.log("modal nameGoal closed doc id is: " + this.currentDocID);

      //   this.addToGaols();
    },
    closeGoalNameModal() {
      this.$emit("close");
      console.log("modal close");
    },
    closeAddExerciseModal() {
      this.addExerciseModal = false;
    },
    addToGaols() {
      event.preventDefault();
      if (this.goalName !== null) {
        firebase.auth().onAuthStateChanged((user) => {
          console.log(user.uid);
          if (user) {
            db.collection("userGoals")
              .doc(user.uid)
              .collection("goals")
              .add({
                goalName: this.goalName,
                GoalCompleted: this.completed === true,
                goalTimeRange: this.goalTimeRange,
                WorkoutID: this.workoutID,
                workoutTitle: this.workoutTitle,
                workoutImage: this.workoutImage,
                workoutDuration: this.workoutDuration,
                workoutVideoUrl: this.workoutVideoURL,
                created: firebase.database.ServerValue.TIMESTAMP,
              })
              .then((docRef) => {
                this.currentDocID = docRef.id;
                console.log("Created Doc ID is " + this.currentDocID);

                firebase.auth().onAuthStateChanged((user) => {
                  db.collection("userGoals")
                    .doc(user.uid)
                    .collection("goals")
                    .doc(this.currentDocID)
                    .update({
                      goalID: this.currentDocID,
                    });
                });

                this.$router.push("/goals");
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
    },
    addCurrentAndOwnGoal() {
      event.preventDefault();
      if (this.goalName !== null) {
        firebase.auth().onAuthStateChanged((user) => {
          console.log(user.uid);
          if (user) {
            db.collection("userGoals")
              .doc(user.uid)
              .collection("goals")
              .add({
                goalName: this.goalName,
                GoalCompleted: this.completed === true,
                goalTimeRange: this.goalTimeRange,
                WorkoutID: this.workoutID,
                workoutTitle: this.workoutTitle,
                workoutImage: this.workoutImage,
                workoutDuration: this.workoutDuration,
                workoutVideoUrl: this.workoutVideoURL,
                created: firebase.database.ServerValue.TIMESTAMP,
              })
              .then((docRef) => {
                this.currentDocID = docRef.id;
                console.log("Created Doc ID is " + this.currentDocID);

                firebase.auth().onAuthStateChanged((user) => {
                  db.collection("userGoals")
                    .doc(user.uid)
                    .collection("goals")
                    .doc(this.currentDocID)
                    .update({
                      goalID: this.currentDocID,
                    });
                });
                this.addOwnGoalExercise();
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
    },
  },
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

textarea {
  background-color: transparent;
  line-height: 100px;
  border: 1px solid white;
}

.radio-btn-goal-time-range {
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
 
