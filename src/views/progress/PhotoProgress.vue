<template>
  <div class="flex flex-col">
    <div
      class="flex w-full mt-5 items-center justify-center"
    >
      <label
        class="w-3/4 md:w-2/4 flex flex-col items-center px-4 py-6 dark-blue-bg main-blue-font rounded-lg shadow-lg tracking-wide uppercase upload-file-box cursor-pointer hover:bg-blue hover:text-white"
      >
        <svg
          class="w-8 h-8 upload-icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base md:text-2xl leading-normal">Select a file</span>
        <input type="file" class="hidden" />
      </label>
    </div>
    <button class="light-blue-bg rounded-lg mt-5 m-auto font-bold text-center px-4 py-3 transition duration-300 ease-in-out md:text-2xl">Upload File</button>
  </div>
</template>

<style lang="less">

.upload-file-box{
    border: 1px solid #25d3ed;
}

button{
    color: #010124;
}

@media only screen and (min-width: 768px) {
    .upload-icon{
        font-size: 42px !important;
    }
}
    
</style>