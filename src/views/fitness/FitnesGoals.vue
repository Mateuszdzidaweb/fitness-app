<template>
  <div class="flex flex-col h-full mb-52">
    <!-- <h1 class="text-white m-auto">Goals</h1> -->

    <div
      v-if="userGoals == ''"
      class="flex flex-row items-center justify-center mt-40"
    >
      <h1 class="text-white text-2xl">Currently you have no goals</h1>
    </div>

    <div
      v-for="userGoal in userGoals"
      v-bind:key="userGoal.id"
      class="goal-box-width m-auto rounded-xl h-auto bg-blue-500 p-1 mt-5"
    >
      <div @click="DelateGoal(userGoal.id)">x</div>
      <div>
        <h1 class="text-white text-xl p-2 font-bold">
          {{ userGoal.data().goalName }}
        </h1>
      </div>
      <div class="flex flex-row">
        <h1 class="text-white text-xl p-2">{{ userGoal.data().ExerciseName }}</h1>
      </div>
      <div class="flex flex-row justify-between">
        <h1 class="text-white text-xl p-2">
          {{ userGoal.data().ExerciseRepsTimeValue }} Reps
        </h1>
        <h1 class="text-white text-xl p-2">
          {{ userGoal.data().ExerciseSetsValue }} Sets
        </h1>
      </div>
      <div class="">
        <p class="text-white text-md p-2 text-justify">
          {{ userGoal.data().GoalInstructions }}
        </p>
      </div>
    </div>

    <button
      @click="showGoalNameModal"
      class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl justify-center font-medium light-blue-bg fixed create-goals-button"
    >
      Create Goals
    </button>

    <app-NameGoalModal
      v-show="isGoalNameModalVisible"
      @closeWithGoalID="TrigerAddExercise($event)"
      @close="closeGoalNameModal"
    ></app-NameGoalModal>

    <app-AddExerciseModal
      v-show="isAddExerciseModalVisible"
      :currentGoalID="currentDocID"
      @closeAndOpenNextModal="TrigerOpenGoalsInstructions"
      @close="closeAddExerciseModal"
    ></app-AddExerciseModal>

    <app-AddGoalInstructionsModal
      v-show="isGoalInstructionsModalVisible"
      :currentGoalID="currentDocID"
      @close="closeAddGoalInstructions"
      :isGoalInstructionsModalVisible="isGoalInstructionsModalVisible"
    >
    </app-AddGoalInstructionsModal>
  </div>
</template>

<script>
import NameGoalModal from "@/components/goals-modal/Name-goalModal.vue";
import AddExerciseModal from "@/components/goals-modal/AddExerciseModal.vue";
import AddGoalInstructionsModal from "@/components/goals-modal/AddGoalInstructionsModal.vue";
let db = firebase.firestore();
import firebase from "firebase";
export default {
  data() {
    return {
      isGoalNameModalVisible: false,
      isAddExerciseModalVisible: false,
      isGoalInstructionsModalVisible: false,
      currentDocID: "",
      userGoals: [],
    };
  },
  components: {
    appNameGoalModal: NameGoalModal,
    appAddExerciseModal: AddExerciseModal,
    appAddGoalInstructionsModal: AddGoalInstructionsModal,
  },
  created() {
    this.getAllUserGoals();
  },
  methods: {
    showGoalNameModal() {
      this.isGoalNameModalVisible = true;
      console.log("name goal modal open");
    },
    closeGoalNameModal() {
      this.isGoalNameModalVisible = false;
    },
    TrigerAddExercise(currentDocID) {
      this.currentDocID = currentDocID;
      this.isGoalNameModalVisible = false;
      console.log("ID past to pareent " + this.currentDocID);
      this.isAddExerciseModalVisible = true;
    },
    closeAddExerciseModal() {
      this.isAddExerciseModalVisible = false;
    },
    TrigerOpenGoalsInstructions() {
      this.isAddExerciseModalVisible = false;
      this.isGoalInstructionsModalVisible = true;
      console.log("triggered");
    },
    closeAddGoalInstructions() {
      this.isGoalInstructionsModalVisible = false;
      this.getAllUserGoals();
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
              });
              console.log(this.userGoals);
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
</style> 