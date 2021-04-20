<template>
  <div class="settings mb-28 md:mb-32">
    <div class="p-3 mt-5 md:w-3/4 m-auto">
      <h1 class="text-3xl md:text-5xl text-white p-2 md:py-5">Settings</h1>
      <h2 class="text-white text-lg md:text-2xl p-2">
        Adjust the below options to customise your experience
      </h2>
      <hr class="mt-2 hr-line-border" />
    </div>
    <div class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42">
      <img
        class="rounded-full w-auto h-32"
        v-bind:src="profile.avatarURL"
        alt=""
      />

      <button
        type="submit"
        class="w-full md:w-full m-auto text-center py-1 mt-4 rounded-2xl light-blue-bg dark-blue-text focus:outline-none my-1 text-xl md:text-3xl"
      >
        Edit
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
        <h2 class="text-white">{{ `${profile.height}' st` }}</h2>
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
      :name='profile.name'
      :age='profile.age'
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
    showModal() {
      this.isModalVisible = true;
      console.log('modal-open')
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>