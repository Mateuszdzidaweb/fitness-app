<template>
  <div class="flex flex-col">
    <div class="flex w-full mt-5 items-center justify-center">
      <label
        class="w-5/6 md:w-2/4 flex flex-col items-center px-4 py-6 dark-blue-bg main-blue-font rounded-lg shadow-lg tracking-wide uppercase upload-file-box cursor-pointer hover:bg-blue hover:text-white"
      >
        <svg
          class="w-8 h-8 upload-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base md:text-2xl leading-normal"
          >Select a file</span
        >
        <input
          @change="uploadProgressPhoto"
          type="file"
          id="progressPhoto"
          class="hidden"
        />
      </label>
    </div>
    <!-- <button
      class="light-blue-bg rounded-lg mt-5 m-auto font-bold text-center px-4 py-3 transition duration-300 ease-in-out md:text-2xl"
    >
      Upload File
    </button> -->
    <div class="">
      <div
        v-for="showUserProgressPhoto in showUserProgressPhotos"
        v-bind:key="showUserProgressPhoto.id"
        class="w-5/6 h-60 px-3 h-22 m-auto mt-6 bg-color bg-size rounded-xl"
        :style="{
          backgroundImage:
            'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' +
            showUserProgressPhoto.data().progressPhotoURL +
            ')',
        }"
      >
        <button
          class="delete-personal-photo text-2xl font-bold text-white rounded-2xl px-2"
          @click="DelateProgressPhoto(showUserProgressPhoto.id)"
        >
          x
        </button>
        <!-- Card Image -->
        <!-- Card Content -->

        <!-- <div class="p-4 rounded-br-lg rounded-bl-lg card-bg-color "> -->
        <h3
          class="font-medium text-lg my-2 uppercase text-white text-center upload-date flex self-end"
        >
          {{ showUserProgressPhoto.data().uploadDate }}
        </h3>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
let db = firebase.firestore();
export default {
  data() {
    return {
      progressPhoto: null,
      progressPhotoSRC: null,
      showUserProgressPhotos: [],
      currentDate: null,
    };
  },
  created() {
    this.getUserProgressPhotos();
  },
  methods: {
    uploadProgressPhoto(e) {
      this.progressPhoto = e.target.files[0];
      firebase.auth().onAuthStateChanged((user) => {
        firebase
          .storage()
          .ref("userProgressPhotos/" + user.uid + "/" + this.progressPhoto.name)
          .put(this.progressPhoto)
          .then(() => {
            console.log("Progress photo uploaded");
            if (user) {
              firebase
                .storage()
                .ref(
                  "userProgressPhotos/" +
                    user.uid +
                    "/" +
                    this.progressPhoto.name
                )
                .getDownloadURL()
                .then((progressPhotoURL) => {
                  this.progressPhotoSRC = progressPhotoURL;
                  this.currentDate = new Date().toDateString();
                  db.collection("userProgressPhotos")
                    .doc(user.uid)
                    .collection("progressPhotos")
                    .add({
                      progressPhotoURL: this.progressPhotoSRC,
                      uploadDate: this.currentDate,
                    })
                    .then(() => {
                      console.log("Progress Photo url saved to databse");
                      alert("Photo Uploaded sucessfuly");
                    });
                });
            }
          });
      });
    },
    getUserProgressPhotos() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userProgressPhotos")
            .doc(user.uid)
            .collection("progressPhotos")
            .onSnapshot((querySnapshot) => {
                this.showUserProgressPhotos = [];
              querySnapshot.forEach((doc) => {
                this.showUserProgressPhotos.push(doc);
                // this.showUserProgressPhoto = doc.data();
                console.log(this.showUserProgressPhotos);
              });
            });
        }
      });
    },
    DelateProgressPhoto(doc) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection("userProgressPhotos")
            .doc(user.uid)
            .collection("progressPhotos")
            .doc(doc)
            .delete();
            alert(doc);
        }
      });
      alert("Photo Deleted");
    },
  },
};
</script>

<style lang="less">
.upload-file-box {
  border: 1px solid #25d3ed;
}

button {
  color: #010124;
}

.delete-personal-photo {
  position: relative;
  float: right;
  right: -5px;
  top: 4px;
  font-size: 20px;
  background-color: #010124;
}

.upload-date {
  position: relative;
  top: 190px;
}

.bg-size {
  background-position: center;
  background-size: cover;
}

@media only screen and (min-width: 768px) {
  .upload-icon {
    font-size: 42px !important;
  }
}
</style>