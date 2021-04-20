<template>
  <div class="registerComponent main-bg-color">
    <div
      class="px-6 py-8 rounded w-full height-full flex flex-col justify-around"
    >
      <div class="md:w-2/3 center lg:w-2/4">
        <h1
          class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold"
        >
          Create your profile
        </h1>

        <img class="w-20 h-20" v-bind:src="avatarSRC" alt="" />

        <label class="text-white" for="avatar">Choose a profile picture:</label>

        <input
          type="file"
          @change="uploadProfileimage"
          id="avatar"
          name="avatar"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
          accept="image/png, image/jpg"
        />

        <label class="text-white" for="avatar">Age</label>
        <input
          v-model="age"
          id="age"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />

        <label class="text-white" for="avatar">Height</label>
        <input
          v-model="height"
          id="height"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />

        <label class="text-white" for="avatar">Weight</label>
        <label class="text-white" for="avatar"
          ><i class="fas fa-weight-hanging"></i
        ></label>
        <input
          v-model="weight"
          id="weight"
          type="number"
          class="block border border-grey-light w-full p-3 rounded mb-4 text-white"
        />

        <!-- <input
          type="email"
          v-model="email"
          class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white mt-10"
          name="myEmail"
          placeholder="Email"
          required
        />

        <input
          type="password"
          v-model="password"
          class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
          name="password"
          placeholder="Password"
        /> -->
        <!-- <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" /> -->
      </div>
      <div class="flex flex-col">
        <button
          type="submit"
          @click="createProfile"
          class="w-full md:w-2/4 m-auto text-center py-3 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl"
        >
          Create Account
        </button>
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
      age: 0,
      height: 0,
      weight: 0,
      avatar: null,
      avatarSRC: "",
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
        // let uploadTask = storageRef.put(this.avatar);

        // uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        //   console.log("file avaiable at ", downloadURL);
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
</style>