<template>
  <div id="LoginComponent">
    <!-- <router-link v-if="!authenticated" to="/login">
    

    </router-link> -->
    <div v-if="authenticated">
      <!-- <button @click="logout" class="myLogout">Logout</button> -->
       <div
       @click="logout"
        class="flex flex-row justify-between px-2 py-3 items-center" >
        <h2 class="text-white">Sign Out</h2>
        <span class="material-icons text-white"> logout </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
button {
  display: inline-block;
  border: none;
  margin: 0 0.1em;
  background-color: blue;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-family: sans-serif;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  &:hover {
    background: lightblue;
  }
  @media screen and (min-width: 600px) {
    padding: 1em 2em;
  }
}
</style>

<script>
/* eslint-disable no-unused-vars */
import firebase from "firebase";

export default {
  name: "LoginBox", 
props: ["oldPath"],

  


data() {
    return {
      loggedIn: false,
      email: "",
      password: ""
    };
  },
  mounted() {
    const ref = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        ref.loggedIn = true;
      } else {
        ref.loggedIn = false;
      }
    });
  },
  computed: {
    authenticated() {
      return this.loggedIn;
    }
  },
  methods: {
    login() {
      event.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.loggedIn = true;
          },
          err => {
            this.loggedIn = false;
            alert("Your user name or password is incorrect - please try again");
          }
        );
    },
    logout() {
      event.preventDefault();
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
         this.$router.replace("login");
        });
    }
  }
};
</script>
