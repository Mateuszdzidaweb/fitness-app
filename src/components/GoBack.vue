<template>
  <div class="mt-2">
    <span @click="goBack"
    class="material-icons go-back-icon md:text-5xl md:pl-4"> arrow_back_ios </span>
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

<style lang="less">

@media only screen and (min-width: 768px) {
    .go-back-icon{
        font-size: 42px !important;
    }
}
    
</style>