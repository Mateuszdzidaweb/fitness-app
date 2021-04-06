<template>
  <div class="mt-2">
    <span @click="goBack"
    class="material-icons"> arrow_back_ios </span>
  </div>
</template>


<script>
export default {
    methods:{
        goBack(){
            return this.$router.go(-1);
        }
    }
}
</script>