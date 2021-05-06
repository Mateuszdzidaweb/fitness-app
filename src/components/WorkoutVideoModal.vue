<template>
  <div class="modal-backdrop">
    <div class="modal w-full h-full flex flex-col justify-center">
      <header class="modal-header">
        <slot name="header">
        <h1 class="text-xl md:text-2xl main-blue-font">  {{ workoutTitle }} </h1>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section v-if="videoURL" class="modal-body">
        <slot name="body">

        

          <iframe class="w-full h-60 md:h-96 " width="560" height="315" :src="videoURL" title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>

 
         <!-- <video-embed :src="videoURL"></video-embed> -->

        </slot>
       </section>

      <!-- <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer> -->
    </div>
  </div>
</template>

<script>


  export default {
       props: ["videoURL", "workoutTitle", "image"],
      data(){
          return
      },
      components:{
   
      },
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 80%);
    /* background-color: #01012480; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    /* background: #FFFFFF; */
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  /* .wrap iframe{opacity:0;} */


  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    border-bottom: 1px solid #eeeeee;
  }

  .btn-close {
    position: absolute;
    top: -18px;
    right: 0;
    border: none;
    font-size: 35px;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    color: #25d3ed;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #25d3ed;
    border: 1px solid #25d3ed;
    border-radius: 2px;
  }
</style>
 
