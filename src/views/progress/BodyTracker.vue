<template>
  <div class="">
    <div class="w-full md:w-3/4 m-auto h-auto mt-10 p-4 text-white light-blue-bg dark-blue-text">
      <h1 class="text-center text-2xl md:text-4xl">BMR</h1>
    </div>
    <!-- BMR -->
    <div
      class="w-full h-auto md:w-3/4 m-auto p-5 dark-blue-bg text-white rounded-br-lg rounded-bl-lg"
    >
      <div class="flex flex-row justify-around">
        <h1 class="text-left mt-1 text-xl md:text-3xl">Age:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="99"
        />
      </div>
      <div class="w-46 flex flex-row justify-around mt-5 ml-10">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Genre:</h1>
        <input
          class="w-5 h-5 mt-1"
          type="radio"
          id="male"
          name="gender"
          value="male"
        />
        <label class="md:text-3xl" for="male">Male</label><br />
        <input
          class="w-5 h-5 mt-1"
          type="radio"
          id="male"
          name="gender"
          value="male"
        />
        <label class="md:text-3xl" for="male">Female</label><br />
      </div>
      <div class="flex flex-row justify-around mt-5">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Height:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="999"
        />
      </div>
      <div class="flex flex-row justify-around mt-5">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Weight:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="99"
        />
      </div>

      <div
        class="w-3/5 h-10 m-auto text-center mt-10 text-xl light-blue-bg rounded-3xl flex flex-col justify-center font-medium md:w-1/3 md:h-14 md:text-4xl dark-blue-text"
      >
        Calculate
      </div>
    </div>
    <!-- BMI -->
    <div class="w-full h-auto md:w-3/4 m-auto mt-10 lg:mt-20 p-4 text-white light-blue-bg dark-blue-text">
      <h1 class="text-center text-2xl md:text-4xl">BMI</h1>
    </div>
    <div
      class="w-full h-auto md:w-3/4 m-auto p-5 dark-blue-bg text-white rounded-br-lg rounded-bl-lg"
    >
      <div class="flex flex-row justify-around">
        <h1 class="text-left mt-1 text-xl md:text-3xl">Age:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="99"
        />
      </div>
      <div class="w-46 flex flex-row justify-around mt-5 ml-10">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Genre:</h1>
        <input
          class="w-5 h-5 mt-1"
          type="radio"
          id="male"
          name="gender"
          value="male"
        />
        <label class="md:text-3xl" for="male">Male</label><br />
        <input
          class="w-5 h-5 mt-1"
          type="radio"
          id="male"
          name="gender"
          value="male"
        />
        <label class="md:text-3xl" for="male">Female</label><br />
      </div>
      <div class="flex flex-row justify-around mt-5">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Height:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="999"
        />
      </div>
      <div class="flex flex-row justify-around mt-5">
        <h1 class="text-center mt-1 text-xl md:text-3xl">Weight:</h1>
        <input
          class="w-20 h-8 rounded-xl inputWeigtCalculator text-center"
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="99"
        />
      </div>

      <div
        class="w-3/5 h-10 m-auto text-center mt-10 text-xl light-blue-bg rounded-3xl flex flex-col justify-center font-medium md:w-1/3 md:h-14 md:text-4xl dark-blue-text"
      >
        Calculate
      </div>
    </div>
           <div class="h-28"></div>
  </div>
</template>