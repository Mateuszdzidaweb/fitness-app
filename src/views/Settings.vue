<template>
  <div class="settings mb-28 md:mb-44">
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl md:text-5xl text-white p-2 md:py-5">Settings</h1>
      <h2 class="text-white text-lg md:text-2xl p-2">
        Adjust the below options to customise your experience
      </h2>
      <hr class="mt-2 hr-line-border" />
    </div>
    <div
      v-if="profile.avatarURL"
      class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42"
    >
      <img
        class="rounded-full w-auto h-32"
        v-bind:src="profile.avatarURL"
        alt=""
      />
    </div>

    <div
      v-if="profile.avatarURL == null || profile.avatarURL == ''"
      class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42"
    >
      <img
        class="rounded-full w-auto h-auto bg-white"
        src="https://i.ibb.co/dbR1RMq/93-938537-png-file-fa-user-circle-o-transparent-png-removebg-preview.png"
        alt=""
      />
    </div>

    <div class="w-full h-auto flex flex-col">
      <input
        type="file"
        @change="UpdateProfileimage"
        id="avatar"
        name="avatar"
        class="custom-file-input-edit-photo m-auto mt-5 w-1/2"
        accept="image/png, image/jpg"
      />

      <button @click="DeleteUserAvatar" class="custom-delete-file-btn m-auto text-center bg-red-600">
        Delate Photo
      </button>
    </div>

    <!-- Profile Info -->
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl md:text-5xl text-white p-2">Profile</h1>
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Name</h2>
        <h2 class="text-white">{{ profile.name }}</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Age</h2>
        <h2 class="text-white">{{ profile.age }}</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Weight</h2>
        <h2 class="text-white">{{ profile.weight }} kg</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Height</h2>
        <h2 class="text-white">{{ profile.height }} st</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div
        @click="showModal"
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Edit Details</h2>
        <span class="material-icons text-white"> arrow_forward </span>
      </div>
      <hr class="mt-2 hr-line-border" />
    </div>

    <!-- Account Info -->
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl md:text-4xl text-white p-2">Account</h1>
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Email</h2>
        <h2 class="text-white">{{ email }}</h2>
      </div>

      <hr class="mt-2 hr-line-border" />
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Change Password</h2>
        <span class="material-icons text-white"> arrow_forward </span>
      </div>
      <hr class="mt-2 hr-line-border" />

      <app-SignOutBtn></app-SignOutBtn>

      <hr class="mt-2 hr-line-border" />
    </div>
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl md:text-4xl text-white p-2">General</h1>
      <div
        class="flex flex-row justify-between px-2 py-3 md:py-5 md:text-3xl items-center"
      >
        <h2 class="text-white">Dark Mode</h2>
        <app-DarkModeBtn></app-DarkModeBtn>
      </div>
      <hr class="mt-2 hr-line-border" />
    </div>
    <app-EditProfile
      v-show="isModalVisible"
      @close="closeModal"
      :name="profile.name"
      :age="profile.age"
      :height="profile.age"
      :weight="profile.age"
    >
    </app-EditProfile>
  </div>
</template>




<style lang="less">
.hr-line-border {
  border: 1px solid #303030;
}
</style>

<script>
import firebase from "firebase";
import SignOutBtn from "@/components/auth-components/SignOutBtn.vue";
import DarkModeBtn from "@/components/auth-components/DarkModeBnt.vue";
import EditProfileModal from "@/components/EditProfileModal.vue";
let db = firebase.firestore();
export default {
  data() {
    return {
      email: null,
      profile: [],
      isModalVisible: false,
      avatar: null,
    };
  },
  components: {
    appSignOutBtn: SignOutBtn,
    appDarkModeBtn: DarkModeBtn,
    appEditProfile: EditProfileModal,
  },
  created() {
    setTimeout(() => {
      let user = firebase.auth().currentUser;
      this.email = user.email;
    }, 0.2);
    this.getProfileInfo();
  },

  methods: {
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
          this.profile = null;
        }
      });
    },
    UpdateProfileimage(e) {
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
    },
    DeleteUserAvatar() {
      firebase.auth().onAuthStateChanged((user) => {
        db.collection("profiles")
          .doc(user.uid)
          .update({
            avatarURL: (this.avatarSRC = ""),
          })
          .then(() => {
            console.log("Avatar Deleted");
          });
      });
    },
    showModal() {
      this.isModalVisible = true;
      console.log("modal-open");
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="less">
.custom-file-input-edit-photo::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input-edit-photo::before {
  content: "Update Photo";
  display: flex;
  background: #25d3ed;
  overflow: hidden;
  //   border: 1px solid #999;
  border-radius: 20px;
  padding: 5px 10px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  //   text-shadow: 1px 1px #fff;
//   font-weight: 600;
  font-size: 20px;
  width: 145px;
  margin-left: auto;
  margin-right: auto;
}
.custom-delete-file-btn {
  display: flex;
//   background: #25d3ed;
  //   border: 1px solid #999;
  border-radius: 20px;
  padding: 5px 15px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  //   text-shadow: 1px 1px #fff;
//   font-weight: 600;
  font-size: 20px;
  width: 145px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
}
.custom-file-input-edit-photo:hover::before {
  //   border-color: black;
}
.custom-file-input-edit-photo:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

.skip-router {
  color: #000010 !important;
}
</style>