<template>
  <div class="weight-tracker">
    <div class="content-center">
      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-text dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col"
      >
        <h1 class="text-center text-2xl md:text-4xl text-white">
          Calories Burner
        </h1>
        <div class="w-full flex justify-around py-10 text-white">
          <h1
            class="text-2xl text-center border-b-2"
            style="border-color: #25d3ed"
          >
            Daily
          </h1>
          <h1 class="text-2xl text-center">Weekly</h1>
          <h1 class="text-2xl text-center">Monthly</h1>
        </div>
      </div>

      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col pb-20"
      >
        <div class="flex justify-around mt-5 md:mt-10">
          <h1 class="text-2xl md:text-3xl uppercase text-white">Move</h1>
          <h1 class="text-2xl md:text-3xl uppercase text-white">Exercise</h1>
        </div>
        <div class="flex justify-around">
          <input
            type="number"
            id="inputWeight"
            name="inputWeight"
            value="500"
            min="1"
            max="999"
            class="w-24 md:w-32 h-10 md:h-12 rounded-3xl mt-2 inputWeightBox main-bg-color text-white text-center text-2xl"
          />
          <input
            type="number"
            id="inputWeight"
            name="inputWeight"
            value="35"
            min="1"
            max="999"
            class="w-24 md:w-32 h-10 md:h-12 rounded-3xl mt-2 inputWeightBox main-bg-color text-white text-center text-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
