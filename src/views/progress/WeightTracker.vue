<template>
  <div>
    <div
      class="w-full h-auto m-auto mt-5 p-5 dark-blue-text rounded-br-lg rounded-bl-lg flex flex-col"
    >
      <h1 class="text-center text-2xl text-white">Input Your Current Weight</h1>
      <input
        type="number"
        id="inputWeight"
        name="inputWeight"
        value="0"
        min="1"
        max="999"
        class="w-24 h-10 rounded-3xl m-auto mt-5 inputWeightBox main-bg-color text-white text-center text-2xl"
      />

      <button
        type="submit"
        class="material-icons mt-5 m-auto"
        style="font-size: 45px !important; color: #25d3ed"
      >
        add_circle_outline
      </button>
    </div>

    <div
      class="w-full h-auto m-auto mt-5 p-5 dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col pb-20"
    >
      <h1 class="text-center text-2xl text-white">Weight Tracker</h1>
      <!-- <div id="weightProgress" class="top-4 m-auto"></div> -->
      <!-- <img
        class="w-1/2 h-auto m-auto"
        src="./resources/progresWeightProgressBarIMG.png"
        alt=""
      /> -->
      <div class="flex justify-around mt-5">
        <h1 class="text-2xl uppercase text-white">Start</h1>
        <h1 class="text-2xl uppercase text-white">Target</h1>
      </div>
      <div class="flex justify-around">
        <input
          type="number"
          id="inputWeight"
          name="inputWeight"
          value="0"
          min="1"
          max="999"
          class="w-24 h-10 rounded-3xl mt-2 inputWeightBox main-bg-color text-white text-center text-2xl"
        />
        <input
          type="number"
          id="inputWeight"
          name="inputWeight"
          value="0"
          min="1"
          max="999"
          class="w-24 h-10 rounded-3xl mt-2 inputWeightBox main-bg-color text-white text-center text-2xl"
        />
      </div>
    </div>
  </div>
</template>


<style lang="less">
.inputWeightBox {
  border: 2px solid #25d3ed;
}
</style>