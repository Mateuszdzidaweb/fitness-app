<template>
  <div class="weight-tracker">
    <div class="content-center">
      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-text dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col"
      >
        <h1 class="text-center text-2xl md:text-4xl text-white">
          Food Tracker
        </h1>
        <div class="w-full flex justify-around py-10 text-white">
          <h1
            class="text-2xl text-center border-b-2"
            style="border-color: #86c232"
          >
            Daily
          </h1>
          <h1 class="text-2xl text-center">Weekly</h1>
          <h1 class="text-2xl text-center">Monthly</h1>
        </div>
      </div>

      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col pb-20"
      ></div>

      <div
        class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-bg rounded-br-lg rounded-bl-lg flex flex-col pb-20"
      >
        <div
          class="w-full h-auto md:w-3/4 m-auto mt-5 p-5 dark-blue-text rounded-br-lg rounded-bl-lg flex flex-col"
        >
          <h1 class="text-center text-2xl md:text-4xl text-white">
            Add Your Calories
          </h1>
          <div
            class="flex flex-row h-10 w-2/4 m-auto rounded-lg relative bg-transparent mt-5"
          >
            <button
              data-action="decrement"
              class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none"
              name="custom-input-number"
              value="0"
            />

            <button
              data-action="increment"
              class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
          <button
            type="submit"
            class="material-icons mt-5 m-auto add-icon"
            style="color: #86c232"
          >
            add_circle_outline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="less">
.add-icon {
  font-size: 52px !important;
}
</style>