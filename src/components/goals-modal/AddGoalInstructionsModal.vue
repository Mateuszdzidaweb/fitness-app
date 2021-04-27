<template>
  <div class="modal-goal-name">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header">
        <slot name="header">
          <!-- <h1 class="text-xl main-blue-font">Edit Profile</h1> -->
          <button
            type="button"
            class="btn-close"
            @click="closeAddInstructionsModal"
          >
            x
          </button>
          <h1
            class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
          >
            Add Instructions
          </h1>

          
        </slot>
      </header>

      <section class="modal-body">
        <div class="px-4 md:w-2/3 center lg:w-2/4">
          <textarea
           v-model="goalInstructions"
            type="text"
            class="block border-b-2 border-white w-full p-3 rounded mb-4 text-xl h-50 text-white mt-10 h-40"
            name="goalinstructions"
            placeholder="Goal Instructions ..."
            maxlength="100"
          />
        </div>
        <button
          @click="addGoalInstructions"
          class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg"
        >
          Add Goal
        </button>
      </section>
    </div>
  </div>
</template>



<script>
let db = firebase.firestore();
import firebase from "firebase";
export default {
  props: ["currentGoalID", "isGoalInstructionsModalVisible"],
  data() {
    return {
        goalInstructions: '',
    };
  },
  created() {
  },
  methods: {
    closeAddInstructionsModal() {
      this.$emit("close");
    },
    addGoalInstructions(){
        event.preventDefault()
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                db.collection('userGoals')
                .doc(user.uid)
                .collection('goals')
                .doc(this.currentGoalID)
                .update({
                    GoalInstructions: this.goalInstructions,
                })
                .then(() =>{
                    console.log('Goal Instructions Added')
                    this.closeAddInstructionsModal();
                })
            }
        })
    }
    // getCurrentGoalDetails() {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       let docRef = db
    //         .collection("userGoals")
    //         .doc(user.uid)
    //         .collection("goals")
    //         .doc(this.currentGoalID);

    //       docRef
    //         .get()
    //         .then((doc) => {
    //           if (doc.exists) {
    //             console.log("Document data:", doc.data());
    //             this.currentGoal = doc.data();
    //           } else {
    //             // doc.data() will be undefined in this case
    //             console.log("No such document!");
    //           }
    //         })
    //         .catch((error) => {
    //           console.log("Error getting document:", error);
    //         });
    //     }
    //   });
    // },
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

textarea {
  background-color: transparent;
  line-height: 100px;
  border: 1px solid white;
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
