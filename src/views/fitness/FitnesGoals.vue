<template>
  <div class="flex flex-col h-full mb-52">
    <!-- <h1 class="text-white m-auto">Goals</h1> -->

    <div class="flex flex-row justify-around my-5 text-white">
      <div>
        <router-link to="/goals" class="text-xl">All</router-link>
      </div>
      <div>
        <router-link to="/goals-completed" @click.prevent="DelateGoal(userGoal.id)" class="text-xl" 
          >Completed</router-link>
      </div>
    </div>

    <div
      v-if="userGoals == ''"
      class="flex flex-row items-center justify-center mt-40"
    >
      <h1 class="text-white text-2xl">Currently you have no goals</h1>
    </div>
    

    <div
      v-for="userGoal in userGoals"
      v-bind:key="userGoal.id"
      class="goal-box-width m-auto rounded-xl h-auto"
    >
    <button class="delete-goal text-2xl font-bold text-white" @click="DelateGoal(userGoal.id)">x</button>

      <router-link
        :to="{ name: 'My Goal', params: { id: userGoal.data().goalID } }"
        class="m-auto rounded-xl h-auto bg-blue-500 p-1 mt-5 goal-image-bg block"
        :style="{
          background:
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' +
            require('@/assets/fitness-img/workout-images/' +
              userGoal.data().workoutImage) +
            ')',
        }"
      >
        <div class="relative right -top-1 left-0 -mt-3 mr-3 w-28">
          <div
            v-if="userGoal.data().GoalCompleted == false"
            class="rounded-full bg-gray-500 text-white text-xs py-1 pl-2 pr-3 leading-none"
          >
            <i class="mdi mdi-fire text-base align-middle"></i>
            <span class="align-middle uncompleated-ml font-bold text-sm">Uncompleted</span>
          </div>
          <div
            v-if="userGoal.data().GoalCompleted == true"
            class="rounded-full bg-green-500 text-white text-xs py-1 pl-2 pr-3 leading-none"
          >
            <i class="mdi mdi-fire text-base align-middle"></i>
            <span class="align-middle ml-2 text-sm font-bold">Completed</span>
          </div>
        </div>

        <div>
          <h1 class="text-white text-xl p-2 font-bold">
            {{ userGoal.data().goalName }}
          </h1>
        </div>
        <div class="flex flex-row">
          <h1 class="text-white text-xl p-2">
            {{ userGoal.data().ExerciseName }}
          </h1>
        </div>
        <div class="flex flex-row justify-between">
          <h1 class="text-white text-xl p-2">
            {{ userGoal.data().workoutDuration }}
          </h1>
          <h1 class="text-white text-xl p-2">
            <!-- {{ userGoal.data().ExerciseSetsValue }} Sets -->
          </h1>
        </div>

        <div class="">
          <p class="text-white text-md text-xl p-2 text-justify">
            {{ userGoal.data().workoutTitle }}
          </p>
        </div>
      </router-link>
    </div>

    <button
      @click="opemCreateGoalModal"
      class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl justify-center font-medium light-blue-bg fixed create-goals-button"
    >
      Create Goals
    </button>

    <!-- <app-NameGoalModal
      v-show="isGoalNameModalVisible"
      @closeWithGoalID="TrigerAddExercise($event)"
      @close="closeGoalNameModal"
    ></app-NameGoalModal> -->

    <app-AddOwnExerciseModal
      v-show="isAddOwnExerciseModalVisible"
      :currentGoalID="currentDocID"
      @close="closeAddExerciseModal"
    ></app-AddOwnExerciseModal>

    <app-CreateGoalModal
      v-show="isCreateGoalModalVisible"
      @close="closeCreateGoalModal"
    >
    </app-CreateGoalModal>

    <app-DisplayGoalModal
      v-show="isDisplayGoalModalVisible"
      @close="closeDisplayGoalModal"
      :workoutVideoURL="workoutTitle"
    >
    </app-DisplayGoalModal>
  </div>
</template>

<script>
// import NameGoalModal from "@/components/goals-modal/Name-goalModal.vue";
import AddOwnExerciseModal from "@/components/goals-modal/AddOwnExerciseModal.vue";
import DisplayGoalModal from "@/components/goals-modal/DisplayGoalModal.vue";
import CreateGoalModal from "@/components/goals-modal/CreateGoalModal.vue";
// const axios = require("axios");
let db = firebase.firestore();
import firebase from "firebase";
export default {
  data() {
    return {
      isGoalNameModalVisible: false,
      isAddOwnExerciseModalVisible: false,
      isDisplayGoalModalVisible: false,
      isCreateGoalModalVisible: false,
      currentDocID: "",
      userGoals: [],
      userExercise: [],
      goalWorkout: null,
      WorkoutID: [],
      wokroutTitle: "",
    };
  },
  components: {
    // appNameGoalModal: NameGoalModal,
    appAddOwnExerciseModal: AddOwnExerciseModal,
    appDisplayGoalModal: DisplayGoalModal,
    appCreateGoalModal: CreateGoalModal,
  },
  created() {
    this.getAllUserGoals();

    // axios
    //   .get(
    //     "https://fintess-app-863f3-default-rtdb.firebaseio.com/workouts/" +
    //       this.WorkoutID +
    //       ".json"
    //   )
    //   .then((response) => {
    //     this.goalWorkout = response.data;
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  methods: {
    showGoalNameModal() {
      this.isGoalNameModalVisible = true;
      console.log("name goal modal open");
    },
    TrigerAddExercise(currentDocID) {
      this.currentDocID = currentDocID;
      this.isGoalNameModalVisible = false;
      console.log("ID past to pareent " + this.currentDocID);
      this.isAddOwnExerciseModalVisible = true;
    },
    closeAddExerciseModal() {
      this.isAddOwnExerciseModalVisible = false;
    },
    TrigerOpenGoalsInstructions() {
      this.isAddOwnExerciseModalVisible = false;
      this.isGoalInstructionsModalVisible = true;
      console.log("triggered");
    },
    openDisplayGoalModal() {
      this.isDisplayGoalModalVisible = true;
    },
    closeDisplayGoalModal() {
      this.isDisplayGoalModalVisible = false;
    },

    opemCreateGoalModal() {
      this.isCreateGoalModalVisible = true;
    },
    closeCreateGoalModal() {
      this.isCreateGoalModalVisible = false;
    },
    getAllUserGoals() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //   db.collection("userGoals")
          //     .doc(user.uid)
          //     .collection("goals")
          //     .orderBy("created")
          //     .get()
          //     .then((querySnapshot) => {
          //       this.userGoals = querySnapshot.docs.map((doc) => doc.data());
          //       console.log(this.userGoals);
          //       // do something with documents
          //     });

          //   db.collection("userGoals")
          //     .doc(user.uid)
          //     .collection("goals")
          //     .orderBy("created")
          //     .onSnapshot((doc) => {
          //       this.userGoals = doc.data();
          //       console.log(this.userGoals);
          //     });

          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .orderBy("created")
            .onSnapshot((querySnapshot) => {
              this.userGoals = [];
              querySnapshot.forEach((doc) => {
                this.userGoals.push(doc);

                this.wokroutTitle = doc.data().workoutTitle;

                console.log(this.userGoals);
              });
            });

          // .then((querySnapshot) => {
          //   querySnapshot.forEach((doc) => {
          //     // doc.data() is never undefined for query doc snapshots
          //     // console.log(doc.id, " => ", doc.data());
          //     this.userGoals.push(doc);
          //     console.log(this.userGoals)
          //   });
          // });

          // Mapp
          // db.collection("userGoals").doc(user.uid).collection('goals')
          //   .get()
          //   .then((querySnapshot) => {

          //       let userGoals1 = (querySnapshot.docs.map((doc) =>{
          //           this.userGoals = doc.data();
          //           this.userGoals.id = doc.id
          //           // console.log("doc.id =>", doc.id)
          //           console.log(this.userGoals);
          //           return userGoals1
          //       }))
        }
      });
    },
    DelateGoal(doc) {
        
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .doc(doc)
            .delete();
          console.log("delete goal with ID: ");
          alert(doc);
        }
      });
    alert('deleted');
    },
  },
};
</script>


<style lang="less">
.create-goals-button {
  bottom: 120px;
  left: 25%;
}

.goal-box-width {
  width: 21rem;
}

.delete-goal {
  position: relative;
  float: right;
  right: 15px;
  top: 25px;
  font-size: 20px;
}

.uncompleated-ml {
  margin-left: 0.1rem;
}

.goal-image-bg {
  background-position: center !important;
  background-size: cover !important;
}
</style> 