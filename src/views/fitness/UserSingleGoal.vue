<template>
  <div class="mb-40" v-if="userGoal !== null">
    <iframe
      class="w-full h-60"
      width="560"
      height="315"
      :src="userGoal.workoutVideoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>

    <div>
      <h1 class="text-white text-2xl md:text-4xl p-4 py-5 text-center">
        {{ userGoal.goalName }}
      </h1>
    </div>
    <div>
      <h1 class="text-white text-2xl md:text-2xl p-4 py-5">
        {{ userGoal.workoutTitle }}
      </h1>
    </div>
    <div>
      <h1 class="text-white text-xl md:text-2xl p-4 py-2">
        Duration: {{ userGoal.workoutDuration }}
      </h1>
    </div>
    <hr class="w-5/6 mt-5 md:w-4/5 m-auto" />

    <div>
      <h1 class="text-white text-xl md:text-2xl p-4 py-2 mt-3">
        {{ userGoal.OwnExerciseGoalName }}
      </h1>
    </div>
    <div v-if="userGoal.OwnExerciseRepsValue" class="flex flex-row justify-between">
      <h1 class="text-white text-xl md:text-2xl p-4 py-2 mt-3">
        {{ userGoal.OwnExerciseRepsValue }} Reps
      </h1>
      <h1 class="text-white text-xl md:text-2xl p-4 py-2 mt-3">
        {{ userGoal.OwnExerciseSetsValue }} Sets
      </h1>
    </div>
    <div>
      <p class="text-white text-xl md:text-xl p-4 py-2 mt-3 text-justify">
        {{ userGoal.OwnExerciseDescription }}
      </p>
    </div>
    <div
      v-if="userGoal.GoalCompleted == false"
      @click="TriggerCompletUserGoal"
      class="w-3/5 h-10 m-auto text-center mt-7 text-xl rounded-3xl flex flex-col justify-center font-medium goal-not-completed-btn"
    >
      Complete Goal
    </div>

    <div
      v-if="userGoal.GoalCompleted == true"
      @click="showModal"
      class="w-3/5 h-10 m-auto text-center mt-7 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
    >
      Goal Completed
    </div>
  </div>
</template>



<script>
let db = firebase.firestore();
import firebase from "firebase";
export default {
  props: ["id"],
  data() {
    return {
      goalID: this.id,
      userGoal: null,
      goalCompleated: "",
    };
  },
  created() {
    this.getUserSingleGoal();
  },
  methods: {
    getUserSingleGoal() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .doc(this.goalID)
            .onSnapshot((doc) => {
              this.userGoal = doc.data();
              console.log(this.userGoal);
            });
        }
      });
    },
    // TriggerCompletUserGoal() {
    //   this.goalCompleated = this.userGoal.GoalCompleted;
    //   console.log("Goal Completed ", this.goalCompleated);
    // },
    TriggerCompletUserGoal() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userGoals")
            .doc(user.uid)
            .collection("goals")
            .doc(this.goalID)
            .update({
                GoalCompleted: true,
                GoalCompletedDate: firebase.database.ServerValue.TIMESTAMP
         })
         .then(() => {
             this.$router.push("/goals-completed");
         })
        }
      });
    },
  },
};
</script>

<style lang="less">
.goal-not-completed-btn {
  border: 1px solid #25d3ed;
  color: #25d3ed;
}
</style>