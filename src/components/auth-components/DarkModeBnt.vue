<template>
  <!-- off -->
  <span
    v-show="DarkModeisOff"
    @click="DarkModeOff"
    class="border rounded-full border-grey flex items-center cursor-pointer w-12 justify-start"
  >
    <span
      class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"
    >

    </span>
  </span>
  <!-- On -->
  <span
    v-show="DarkModeisOn"
    @click="DarkModeOn"
    class="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green-400 justify-end"
  >
    <span
      class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"
    >
    </span>
  </span>
</template>


<script>
export default {
  data() {
      return{
          DarkModeisOff: true,
          DarkModeisOn: false
      }
  },
  components: {
  },
  methods:{
      DarkModeOff(){
          this.DarkModeisOff = false
          this.DarkModeisOn = true
      },
      DarkModeOn(){
          this.DarkModeisOn = false,
           this.DarkModeisOff = true
      }
  }
};
</script>