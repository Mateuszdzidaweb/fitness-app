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
        <input
          type="text"
          v-model="name"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="name"
          placeholder="Full Name"
          required
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
          @click="updateProfile"
          class="w-full md:w-2/4 m-auto text-center py-3 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl"
        >
          Create Account
        </button>

      </div>
    </div>
  </div>
</template>


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

<script>
// import Register from "@/components/auth-components/RegisterComponent.vue";
// import firebase from "firebase";
export default {
  //   name: "Register",
  components: {
    // appRegister: Register,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {

  }
};
</script>