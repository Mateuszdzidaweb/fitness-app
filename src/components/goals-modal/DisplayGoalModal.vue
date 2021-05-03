<template>
  <div class="modal-display-goal">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header">
        <slot name="header">
          <!-- <h1 class="text-xl main-blue-font">Edit Profile</h1> -->
          <button
            type="button"
            class="btn-close-display-goal"
            @click="closeAddInstructionsModal"
          >
            x
          </button>
          <h1
            class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
          >
           Title: {{ workoutVideoURL }}
          </h1>

          
        </slot>
      </header>

      <section class="modal-body">


      </section>
    </div>
  </div>
</template>



<script>
// let db = firebase.firestore();
// import firebase from "firebase";
export default {
  props: ['workoutVideoURL'],
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
  },
};
</script>





<style lang="less" >
.modal-display-goal {
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

.btn-close-display-goal{
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


</style>
