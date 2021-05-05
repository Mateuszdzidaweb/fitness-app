<template>
  <div v-if="workoutTip">
    <div
      class="relative pb-6 w-full h-64 main-bg-color workout-image-bg"
      :style="{
        background:
          'linear-gradient(rgb(0 0 0 / 0%), rgb(0 0 29)), url(' +
          require('@/assets/fitness-img/workoutTips/' +
            workoutTip.workoutTipImg) +
          ') center',
      }"
    >
      <div class="text-center absolute w-full" style="bottom: -20px">
        <div class="mb-4">
          <p class="text-white p-5 tracking-wide text-xl font-bold md:text-3xl">
            {{ workoutTip.subtitle }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="p-5 mb-20">
      <ol class="text-white p-5 list-decimal text-xl">
        <li class="text-white text-2xl">{{ workoutTip.tip1Title }}</li>
        <p class="text-md mt-3">
          {{ workoutTip.tip1Descrription }}
        </p>
        <li class="text-white text-2xl mt-3">{{ workoutTip.tip2Title }}</li>
        <p class="text-md mt-3">
          {{ workoutTip.tip2Description }}
        </p>
        <li class="text-white text-2xl mt-3">{{ workoutTip.tip3Title }}</li>
        <p class="text-md mt-3">
          {{ workoutTip.tip3Descrtiption }}
        </p>
      </ol>
      <h1 class="text-white p-5 text-xl"></h1>
    </div> -->

    <main class="w-full p-3 mx-auto text-white mb-40">
      <!-- <h1 class="mb-4">tailwind collapsible</h1> -->
      <section class="shadow">
        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header
              @click="openAccordion1"
              class="flex justify-between items-center py-5 p-4 pr-4 cursor-pointer select-none"
            >
              <span class="text-grey-darkest text-xl">
                {{ workoutTip.tip1Title }}
              </span>
              <div
                class="rounded-full border border-grey w-7 h-7 flex items-center justify-center ml-5"
              >
                <!-- icon by feathericons.com -->
                <svg
                  v-if="isOpenAccordion1 == false"
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>

                <svg
                  v-if="isOpenAccordion1 == true"
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
             <collapse-transition>
            <div v-show="isOpenAccordion1">
              <div class="px-3 pb-5 text-grey-darkest">
                <ul class="py-2">
                  <li class="pb-2 text-md text-justify">
                    {{ workoutTip.tip1Description }}
                  </li>
                </ul>
                <div v-if="workoutTip.tip1Gif"
                  class="h-80 w-full bg-cover"
                  :style="{
                    background:
                      'url(' +
                      require('@/assets/fitness-img/workoutTips/' +
                        workoutTip.tip1Gif) +
                      ') center no-repeat',
                  }"
                ></div>
              </div>
            </div>
             </collapse-transition>
          </div>
        </article>

        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header
              @click="openAccordion2"
              class="flex justify-between items-center py-5 p-4 pr-4 cursor-pointer select-none"
            >
              <span class="text-grey-darkest text-xl">
                {{ workoutTip.tip2Title }}
              </span>
              <div
                class="rounded-full border border-grey w-7 h-7 flex items-center justify-center ml-5"
              >
                <!-- icon by feathericons.com -->
                <svg
                  v-if="isOpenAccordion2 == false"
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>

                <svg
                  v-if="isOpenAccordion2 == true"
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
            <div v-show="isOpenAccordion2">
              <div class="px-3 pb-5 text-grey-darkest">
                <ul class="py-2">
                  <li class="pb-2">{{ workoutTip.tip2Description }}</li>
                </ul>
                <div v-if="workoutTip.tip2Gif"
                  class="h-80 w-full bg-cover"
                  :style="{
                    background:
                      'url(' +
                      require('@/assets/fitness-img/workoutTips/' +
                        workoutTip.tip2Gif) +
                      ') center no-repeat',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </article>

        <article class="border-b">
          <div class="border-l-2 border-transparent">
            <header
              @click="openAccordion3"
              class="flex justify-between items-center py-5 p-4 pr-4 cursor-pointer select-none"
            >
              <span class="text-grey-darkest text-xl">
                {{ workoutTip.tip3Title }}
              </span>
              <div
                class="rounded-full border border-grey w-7 h-7 flex items-center justify-center ml-5"
              >
                <!-- icon by feathericons.com -->
                <svg
                  v-if="isOpenAccordion3 == false"
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>

                <svg
                  v-if="isOpenAccordion3 == true"
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
            <div v-show="isOpenAccordion3">
              <div class="px-3 pb-5 text-grey-darkest">
                <ul class="py-2">
                  <li class="pb-2">{{ workoutTip.tip3Description }}</li>
                </ul>
                <div v-if="workoutTip.tip3Gif"
                  class="h-80 w-full bg-cover"
                  :style="{
                    background:
                      'url(' +
                      require('@/assets/fitness-img/workoutTips/' +
                        workoutTip.tip3Gif) +
                      ') center no-repeat',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </article>

        <article v-if="workoutTip.tip4Title" class="border-b">
          <div class="border-l-2 border-transparent">
            <header
              @click="openAccordion4"
              class="flex justify-between items-center py-5 p-4 pr-4 cursor-pointer select-none"
            >
              <span class="text-grey-darkest text-xl">
                {{ workoutTip.tip4Title }}
              </span>
              <div
                class="rounded-full border border-grey w-7 h-7 flex items-center justify-center ml-5"
              >
                <!-- icon by feathericons.com -->
                <svg
                  v-if="isOpenAccordion4 == false"
                  aria-hidden="true"
                  class=""
                  data-reactid="266"
                  fill="none"
                  height="24"
                  stroke="#606F7B"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>

                <svg
                  v-if="isOpenAccordion4 == true"
                  aria-hidden="true"
                  data-reactid="281"
                  fill="none"
                  height="24"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewbox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </div>
            </header>
            <div v-show="isOpenAccordion4">
              <div class="px-3 pb-5 text-grey-darkest">
                <ul class="py-2">
                  <li class="pb-2">{{ workoutTip.tip4Description }}</li>
                </ul>
                <div v-if="workoutTip.tip4Gif"
                  class="h-80 w-full"
                  :style="{
                    background:
                      'url(' +
                      require('@/assets/fitness-img/workoutTips/' +
                        workoutTip.tip4Gif) +
                      ') center no-repeat',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>




<script>
 import { CollapseTransition } from "@ivanv/vue-collapse-transition"
const axios = require("axios");
export default {
  props: ["id"],
  data() {
    return {
      accordionClasses: {
        // 'isOpenAccordion': ,
        // 'isClosedAccordion': false,
      },
      isOpenAccordion1: false,
      isOpenAccordion2: false,
      isOpenAccordion3: false,
      isOpenAccordion4: false,
      workoutTip: null,
    };
  },
  component: {
      CollapseTransition,
  },
  mounted() {
    axios
      .get(
        "https://fintess-app-863f3-default-rtdb.firebaseio.com/workoutTips/" +
          this.id +
          ".json"
      )
      .then((response) => {
        this.workoutTip = response.data;
        console.log(this.workoutTip);
      });
  },
  methods: {
    openAccordion1() {
      if (this.isOpenAccordion1 == false) {
        this.isOpenAccordion1 = true;
      } else if (this.isOpenAccordion1 == true) {
        this.isOpenAccordion1 = false;
      }
    },
    openAccordion2() {
      if (this.isOpenAccordion2 == false) {
        this.isOpenAccordion2 = true;
      } else if (this.isOpenAccordion2 == true) {
        this.isOpenAccordion2 = false;
      }
    },
    openAccordion3() {
      if (this.isOpenAccordion3 == false) {
        this.isOpenAccordion3 = true;
      } else if (this.isOpenAccordion3 == true) {
        this.isOpenAccordion3 = false;
      }
    },
    openAccordion4() {
      if (this.isOpenAccordion4 == false) {
        this.isOpenAccordion4 = true;
      } else if (this.isOpenAccordion4 == true) {
        this.isOpenAccordion4 = false;
      }
    },
  },
};
</script>


<style lang="less">

.bg-cover{
    background-size: cover !important;
}
.isOpenAccordion {
  display: block;
}

.isClosedAccordion {
  display: none;
}

// .testt{
// //   background-image:url(https://media.self.com/photos/57aa008ad077f2273cf20475/master/w_1200,c_limit/squat_2.gif);
//   background-repeat:no-repeat;

//   background-color: transparent; background-image: url("https://media.self.com/photos/57aa008ad077f2273cf20475/master/w_1200,c_limit/squat_2.gif");
// }
</style>