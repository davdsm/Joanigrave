<template>
  <div
    id="entry"
    class="entry w-screen h-screen relative flex justify-start items-center"
  >
    <img
      class="w-full h-full object-cover absolute"
      src="/intro.jpg"
      alt="image description"
    />
    <h1
      class="text-left entry delay2 mb-4 text-6xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-8xl z-10 mx-60 max-sm:mx-5"
    >
      Mais de{{ " " }}<br class="sm:hidden" />
      <mark
        class="px-2 mb-5 text-white bg-primary-700 rounded leading-10 font-extrabold"
        >30 anos</mark
      ><br />
      na pré impressão.
    </h1>
    <a
      href="#aboutSection"
      class="entry delay3 mx-60 max-sm:mx-5 bottom-40 max-sm:bottom-30 absolute z-10 flex items-center px-5 py-2.5 text-lg font-medium text-white bg-primary-700 rounded-lg hover:bg-sky-700 dark:bg-primary-500 dark:hover:bg-primary-600"
    >
      Saber Mais
      <span
        class="inline-flex justify-center items-center ml-2 w-6 h-6 text-xs font-semibold text-blue-800 bg-sky-600 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </span>
    </a>
    <div
      class="bg-gradient-to-br from-green-400 to-blue-600 w-full h-full absolute top-0 opacity-60 hover:opacity-70 ease-in duration-300 dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500"
    ></div>
  </div>
</template>
