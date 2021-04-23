<template>
  <div class="modal-goal-name">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header">
        <slot name="header">
          <!-- <h1 class="text-xl main-blue-font">Edit Profile</h1> -->
          <button type="button" class="btn-close" @click="closeNameGoalModal">
            x
          </button>
          <h1
            class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
          >
            Name Your goal
          </h1>
        </slot>
      </header>

      <section class="modal-body">
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
        <button
          @click="addExercise"
          class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add Exercise
        </button>
        <app-AddExerciseModal
          v-show="addExerciseModal"
          @click="closeAddExerciseModal"
          :currentGoalID="currentDocID"
        ></app-AddExerciseModal>
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
import firebase from "firebase";
let db = firebase.firestore();
import AddExerciseModal from "@/components/goals-modal/AddExerciseModal.vue";
export default {
  data() {
    return {
      currentDocID: "null",
      addExerciseModal: false,
    };
  },
  components: {
    appAddExerciseModal: AddExerciseModal,
  },
  name: "Modal",
  created() {},
  methods: {
    closeNameGoalModal() {
      this.$emit("close");
      console.log("modal nameGoal closed");
    },
    closeAddExerciseModal() {
      this.addExerciseModal = false;
    },
    addExercise() {
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
              })
              .then((docRef) => {
                this.currentDocID = docRef.id;
                console.log("Created Doc ID is " + this.currentDocID);
     
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      }
     this.addExerciseModal = true;
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
  justify-content: center;
  align-items: center;
  z-index: 12;
  //   display: block !important;
}

/* .wrap iframe{opacity:0;} */

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  /* border-bottom: 1px solid #eeeeee; */
}

.btn-close {
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
 
