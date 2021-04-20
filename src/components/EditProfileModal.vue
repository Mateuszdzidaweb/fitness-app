<template>
  <div class="modal-settings">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header">
        <slot name="header">
          <!-- <h1 class="text-xl main-blue-font">Edit Profile</h1> -->
          <button type="button" class="btn-close" @click="close">x</button>
          <h1
            class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
          >
            Edit Profile
          </h1>
        </slot>
      </header>

      <section class="modal-body">
        <div class="px-6 py-8 rounded w-full flex flex-col justify-around">
          <div class="w-full md:w-2/3 center lg:w-2/4">
            >
            
            <label class="text-white text-xl" for="avatar">Name</label>
            <input
              v-model="profile.name"
              id="name"
              type="name"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
            />

            <label class="text-white text-xl" for="avatar">Age</label>
            <input
              v-model="profile.age"
              id="age"
              type="number"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
            />

            <label class="text-white text-xl" for="avatar">Height (cm)</label>
            <input
              v-model="profile.weight"
              id="height"
              type="number"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
            />

            <label class="text-white text-xl" for="avatar">Weight (st)</label>
            <input
              v-model="profile.height"
              id="weight"
              type="number"
              class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
            />
          </div>
          <div class="flex flex-col">
            <button
              type="submit"
              @click="UpdateDetails"
              class="w-full md:w-2/4 m-auto text-center py-3 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl mt-5"
            >
              Upadate Details
            </button>
          </div>
        </div>
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
  //   props: ["name", "age", "height", "weight"],

  data() {
    return {
      //   userProfileAage: this.age,
      //   userProfileHeight: this.height,
      //   userProfileWeight: this.weight,
      profile: [],
      //   profile: {
      //       name: this.name,
      //       age: this.age,
      //       weight: this.weight,
      //       height: this.height
      //   },
    };
  },
  components: {},
  name: "Modal",
  created() {
    this.getProfileInfo();
  },
  methods: {
    close() {
      this.$emit("close");
    },
    UpdateDetails() {
      firebase.auth().onAuthStateChanged((user) => {
        db.collection("profiles")
          .doc(user.uid)
          .update(this.profile)
          .then(() => {
            console.log("details updated");
          });
      });
      alert('info updated')
    },
    getProfileInfo() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("profiles")
            .doc(user.uid)
            .onSnapshot((doc) => {
              this.profile = doc.data();
              console.log(this.profile);
            });
        } else {
          console.log("sdd");
        }
      });
    },
  },
};
</script>

<style lang="less" >
.modal-settings {
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
 
