<template>
  <div class="">
    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/food-tracker"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 diet-bg-color"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Food Tracker
          </h2>
          <img
            class="w-auto h-32"
            src="../assets/nav-icons/diet.svg"
            alt=""
          />
        </div>
      </router-link>
    </div>

    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 diet-bg-color"
        style="background-color: #0d19a3"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Food Planer
          </h2>
          <img
            class="w-auto h-32"
            src="../assets/nav-icons/foodPlaner.svg"
            alt=""
          />
        </div>
      </router-link>
    </div>

    <div class="mb-5 mt-5 md:w-2/3 m-auto">
      <router-link
        to="/"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95 diet-bg-color"
        style="background-color: #0d19a3"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
            Nutrition Recipes
          </h2>
          <img
            class="w-auto h-32"
            src="../assets/nav-icons/foodRecipe.svg"
            alt=""
          />
        </div>
      </router-link>
    </div>

    <!-- <div class="pb-32 md:w-2/3 m-auto">
      <router-link
        to="/"
        class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
        style="background-color: #0d19a3"
      >
        <div class="flex flex-row justify-between">
          <h2
            class="text-white text-2xl md:text-4xl font-bold leading-tight mb-3 pr-1 self-end"
          >
           Goals
          </h2>
          <img
            class="w-auto h-44"
            src="../assets/fitness-img/caloriesButnrIMG.png"
            alt=""
          />
        </div>
      </router-link>
    </div> -->
  </div>
</template>