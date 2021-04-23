<template>
  <div class="registerComponent main-bg-color">
    <div
      class="px-6 py-8 rounded w-full height-full flex flex-col md:justify-around"
    >
      <div class="md:w-2/3 center lg:w-2/4">
        <h1
          class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
        >
          Set up profile
        </h1>

        <!-- <img class="w-20 h-20" src="@/assets/fitness-img/user-default-img.png" alt="" /> -->
        <div class="w-32 h-32 mt-6 m-auto md:py-10 md:w-42">
          <img
            class="rounded-full w-auto h-32 bg-white"
            v-bind:src="avatarSRC"
            alt=""
          />
        </div>

        <!-- <label class="text-white" for="avatar">Choose a profile picture:</label> -->
        <div class="w-full h-auto flex flex-row">
          <input
            type="file"
            @change="uploadProfileimage"
            id="avatar"
            name="avatar"
            class="custom-file-input m-auto mt-5"
            accept="image/png, image/jpg"
          />
        </div>

        <label class="text-white text-xl" for="avatar">Age</label>
        <input
          v-model="age"
          id="age"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />

        <label class="text-white text-xl" for="avatar">Height</label>
        <input
          v-model="height"
          id="height"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />

        <label class="text-white text-xl" for="weight">Weight</label>
        <input
          v-model="weight"
          id="weight"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />
      </div>
      <div class="flex flex-row">
        <button
          type="submit"
          @click="createProfile"
          class="w-full md:w-2/4 m-auto text-center py-2 mr-2 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl"
        >
          Set Up
        </button>
        <router-link
          to="/home"
          type="submit"
          @click="SkipSetUpProfile"
          class="w-full md:w-2/4 m-auto text-center py-2 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl skip-router"
        >
          Skip
        </router-link>
      </div>
    </div>
  </div>
</template>



<script>
import firebase from "firebase";
let db = firebase.firestore();
export default {
  name: "Create Profile",
  components: {},
  data() {
    return {
      userPhoto: {},
      age: "",
      height: "",
      weight: "",
      avatar: null,
      avatarSRC: "https://i.ibb.co/dbR1RMq/93-938537-png-file-fa-user-circle-o-transparent-png-removebg-preview.png",
    };
  },
  created() {
    // this.createProfile();
  },
  methods: {
    createProfile() {
      firebase.auth().onAuthStateChanged((user) => {
        db.collection("profiles")
          .doc(user.uid)
          .update({
            age: this.age,
            height: this.height,
            weight: this.weight,
          })
          .then(() => {
            console.log("Document successfully written!");
            this.$router.replace("/home");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      });

      //   db.collection("profiles")
      //     .doc(user.user.uid)
      //     .set({
      //       name: this.name,
      //       })
      //     .then(() => {
      //       console.log("Document successfully written!");
      //     })
      //     .catch((error) => {
      //       console.error("Error writing document: ", error);
      //     });
    },
    uploadProfileimage(e) {
      //   firebase.auth().onAuthStateChanged((user) => {
      //     firebase
      //       .storage()
      //       .ref("users/" + auth.user.uid + "/profile.jpg")
      //       .put(file)
      //       .then(() => {
      //         console.log("sucessfully uploaded file");
      //       });
      //   });

      this.avatar = e.target.files[0];

      firebase.auth().onAuthStateChanged((user) => {
        //   Store avatar
        firebase
          .storage()
          .ref("userAvatars/" + user.uid + "/" + this.avatar.name)
          .put(this.avatar)
          .then(() => {
            console.log("Sucessfully uploaded image");
            if (user) {
              // display avatar
              firebase
                .storage()
                .ref("userAvatars/" + user.uid + "/" + this.avatar.name)
                .getDownloadURL()
                .then((imgUrl) => {
                  // Store avarat link in profiles collection
                  this.avatarSRC = imgUrl;
                  console.log(this.avatarSRC);
                  db.collection("profiles")
                    .doc(user.uid)
                    .update({
                      avatarURL: this.avatarSRC,
                    })
                    .then(() => {
                      console.log("avatar url saved to database");
                    });
                });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      });

      // firebase.auth().onAuthStateChanged((user) => {
      //     if(user){
      //         firebase.storage().ref('userAvatars/' + user.uid + '/' + this.avatar.name)
      //         .getDownloadURL()
      //         .then(imgUrl => {
      //             this.avatarSRC = imgUrl;
      //             // console.log(this.avatarSRC);
      //         })
      //     }
      // })
    },
  },
};
</script>


<style lang="less">
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Select File";
  display: flex;
  background: #25d3ed;
  //   border: 1px solid #999;
  border-radius: 20px;
  padding: 5px 10px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  //   text-shadow: 1px 1px #fff;
  font-weight: 600;
  font-size: 20px;
  width: 120px;
  margin-left: auto;
  margin-right: auto;
}
.custom-file-input:hover::before {
  //   border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

.skip-router {
  color: #000010 !important;
}
</style>