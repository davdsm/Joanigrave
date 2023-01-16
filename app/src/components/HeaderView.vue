<script lang="ts">
import { getServices } from "@/redux/calls";

export default {
  data() {
    return {
      services: <boolean>false,
      list: <any>[],
      hamburger: <boolean>false,
      dark: <boolean>false,
    };
  },
  methods: {
    handleDark(): void {
      if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      this.dark = localStorage.theme === "dark";
      document.documentElement.classList.toggle("dark");
    },
    handleClick(e: any): void {
      this.services = false;
    }
  },
  async beforeMount() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.dark = true;
    } else {
      this.dark = false;
      document.documentElement.classList.remove("dark");
    }

    this.list = await getServices();
  },
};
</script>
<template>
  <div class="container max-sm:px-4 relative w-full flex justify-center">
    <nav
      class="absolute p-3 sm:w-4/5 max-sm:w-full border-gray-200 rounded bg-slate-200 dark:bg-gray-900 dark:border-gray-700 shadow-xl"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
      >
        <router-link to="/" class="flex items-center">
          <img
            src="/square_logo.png"
            class="h-10 mr-3 sm:h-16"
            alt="JoaniGrave Logo"
          />
        </router-link>
        <button
          id="theme-toggle"
          type="button"
          @click="handleDark"
          class="sm:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm"
        >
          <svg
            id="theme-toggle-dark-icon"
            class="w-5 h-5"
            :class="{ hidden: dark }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            class="w-5 h-5"
            :class="{ hidden: !dark }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
          @click="() => (hamburger = !hamburger)"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          id="mega-menu-full"
          :class="{ hidden: !hamburger }"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 max-sm:items-baseline"
          >
            <li class="max-sm:hidden">
              <button
                id="theme-toggle"
                type="button"
                @click="handleDark"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  class="w-5 h-5"
                  :class="{ hidden: dark }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  class="w-5 h-5"
                  :class="{ hidden: !dark }"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            <li>
              <router-link
                to="/"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >Início</router-link
              >
            </li>
            <li>
              <router-link
                to="/about"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                >Sobre</router-link
              >
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                @click="() => (services = !services)"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Serviços
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  :class="{ 'rotate-180': !services }"
                  class="ml-2 w-4 h-4 transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            </li>
            <li>
              <router-link
                to="/contacts"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >Contactos</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        :class="{ hidden: !services }"
        class="w-full left-0 mt-1 border-gray-200 shadow-sm bg-gray-50 border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div
          class="fixed top-0 left-0 w-full h-screen z-0"
          @click="() => (services = false)"
        ></div>
        <div
          class="max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6 z-10"
        >
          <ul class="grid sm:grid-cols-2">
            <li v-for="service in list" :key="service.id">
              <router-link
                @click="(e) => handleClick(e)"
                to="/services"
                class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                ><div class="font-semibold">{{ service.name }}</div>
                <span
                  class="text-sm font-light text-gray-500 dark:text-gray-400 ellipsis"
                  >{{ service.description }}</span
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
