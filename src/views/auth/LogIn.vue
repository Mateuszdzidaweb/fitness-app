<template>
  <div class="logInComponent main-bg-color">
    <div
      class="px-6 py-8 rounded shadow-md w-full height-full flex flex-col justify-around"
    >
    
      <div class="md:w-2/3 center lg:w-2/4"> 
        <h1 class="mb-4 text-4xl md:text-5xl text-center main-blue-font font-bold">
          Login
        </h1>
          <p class="pb-4 text-gray-400 text-center text-xl">Existing account</p>
        <input
          type="email"
          v-model="email"
          class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          v-model="password"
          class="block border-b-2 border-white w-full p-3 rounded mb-4 text-2xl text-white"
          name="password"
          placeholder="Password"
        />
      </div>
      <div class="flex flex-col justify-end">
        <button
          type="submit"
          @click="login"
          class="w-full md:w-2/4 m-auto text-center py-3 rounded-2xl light-blue-bg dark-blue-text font-bold hover:bg-green-dark focus:outline-none my-1 text-xl"
        >
          Login
        </button>

        <div class="text-center text-md md:text-xl text-white mt-4">
           Donn't have account ?
          <router-link
            class="no-underline border-b  text-lg md:text-2xl main-blue-font pointer ml-2"
            to="/register"
          >
            Sing Up
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less">
input {
  background-color:transparent;
   &:active{
      background-color:transparent;
       border: none;
   }
   &:focus{
       border: none;
        background: transparent;
   }
   &::after{
        background: transparent;
   }
   &::before{
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

.main-blue-font{
    color: #25d3ed !important;
}
</style>


<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {},
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          `${user.email}`;
          this.$router.replace("/home");
        })
        .catch((err) => {
          if (err.code === "auth/wrong-password") {
            alert("The Password is incorect");
          } else {
            //   this.error = err.message;
            alert("Your user name or password is incorrect - please try again");
          }
        });
    },
  },
};
</script>