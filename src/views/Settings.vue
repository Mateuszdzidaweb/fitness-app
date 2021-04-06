<template>
  <div class="settings mb-28">
    <div class="p-3 mt-5">
      <h1 class="text-3xl text-white p-2">Settings</h1>
      <h2 class="text-white text-lg p-2">
        Adjust the below options to customise your experience
      </h2>
      <hr class="mt-2 hr-line-border" />
    </div>
    <div class="w-32 h-auto mt-6 m-auto md:py-10 md:w-42">
      <img
        class="rounded-full"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
        alt=""
      />
      <button
        type="submit"
        class="w-full md:w-2/4 m-auto text-center py-1 mt-4 rounded-2xl light-blue-bg dark-blue-text focus:outline-none my-1 text-xl"
      >
        Edit
      </button>
    </div>
    <!-- Profile Info -->
    <div class="p-3 mt-5">
      <h1 class="text-3xl text-white p-2">Profile</h1>
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Name</h2>
        <h2 class="text-white">Mateusz Dzida</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Age</h2>
        <h2 class="text-white">23</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Weight</h2>
        <h2 class="text-white">64 kg</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Height</h2>
        <h2 class="text-white">164 cm</h2>
      </div>
      <hr class="mt-2 hr-line-border" />
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Edit Details</h2>
        <span class="material-icons text-white"> arrow_forward </span>
      </div>
      <hr class="mt-2 hr-line-border" />
    </div>

    <!-- Account Info -->
    <div class="p-3 mt-5">
      <h1 class="text-3xl text-white p-2">Account</h1>
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Email</h2>
        <h2 class="text-white">{{ email }}</h2>
      </div>

      <hr class="mt-2 hr-line-border" />
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Change Password</h2>
        <span class="material-icons text-white"> arrow_forward </span>
      </div>
      <hr class="mt-2 hr-line-border" />

      <app-LoginBox></app-LoginBox>

      <hr class="mt-2 hr-line-border" />
    </div>
    <div class="p-3 mt-5">
      <h1 class="text-3xl text-white p-2">General</h1>
      <div class="flex flex-row justify-between px-2 py-3 items-center">
        <h2 class="text-white">Dark Mode</h2>
        <app-DarkModeBtn></app-DarkModeBtn>
      </div>
      <hr class="mt-2 hr-line-border" />
    </div>
  </div>
</template>




<style lang="less">
.hr-line-border {
  border: 1px solid #303030;
}
</style>

<script>
import firebase from "firebase";
import LoginBox from "@/components/auth-components/LoginBox.vue";
import DarkModeBtn from "@/components/auth-components/DarkModeBnt.vue";
export default {
  data() {
    return {
        email: null,
    };
  },
  components: {
    appLoginBox: LoginBox,
    appDarkModeBtn: DarkModeBtn,
  },
  created() {
    setTimeout(() => {
      let user = firebase.auth().currentUser;
      this.email = user.email;
    }, 0.2);
  },
};
</script>