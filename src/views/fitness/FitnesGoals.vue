<template>
    <div class="flex flex-col h-full">
        <!-- <h1 class="text-white m-auto">Goals</h1> -->
            
    <button 
    @click="showGoalNameModal"
    class="h-10 m-auto text-center mt-7 px-10 text-xl rounded-3xl flex flex-col justify-center font-medium light-blue-bg">
        Create Goals
    </button>

    <h1 class="text white"> {{ currentDocID }} </h1>

    <app-NameGoalModal
        v-show="isGoalNameModalVisible"
        @close="closeGoalNameModal"
    ></app-NameGoalModal>
    </div>

</template>

<script>
import NameGoalModal from "@/components/goals-modal/Name-goalModal.vue";
export default {
    data(){
        return{
            isGoalNameModalVisible: false
        }
    },
    components:{
        appNameGoalModal: NameGoalModal
    },
    methods:{
        showGoalNameModal(){
            this.isGoalNameModalVisible = true;
            console.log('name goal modal open');
        },
        closeGoalNameModal(){
            this.isGoalNameModalVisible = false;
        },
    }
}
</script>


<style lang="less">
    
</style> 