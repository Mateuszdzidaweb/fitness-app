<template>
  <div class="dashboard">
    <h1>Welcome</h1>
    <h1>{{ email }}</h1>
  </div>
</template>


<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: null,
      email: null,
    };
  },
  created() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.user = user;
    //   } else {
    //     this.user = null;
    //   }
    // });
    let user = firebase.auth().currentUser;
    this.email = user.email;
  },
};
</script>
