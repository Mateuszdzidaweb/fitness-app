<template>
  <div
    class="w-full h-14 flex items-center top-0 sticky z-10 top-bar bg-dark-blue px-3 md:h-20"
  >
  <GoBack></GoBack>
    <h1 class="text-2xl md:text-3xl text-center route-name-width">{{$route.name}}</h1>

    <router-link class="material-icons right-3 absolute" to="/settings">
   settings
    </router-link>
    <span class="material-icons right-14 absolute"> notifications_none </span>
  </div>

  
</template>



<style>
.material-icons{
    font-size: 32px !important;
}

.route-name-width{
    width: calc(100% + -74px);
}
    
</style>



<script>
import GoBack from "@/components/GoBack.vue";

export default{
    data(){
        return{

        }
    },
    components:{
        GoBack
    }
}

</script>


