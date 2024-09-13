<template>
  <section id="about" class="container mx-auto px-8">
    <div
      class="entry delay2 gap-8 items-center mb-20 mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16"
    >
      <img class="w-full rounded" src="/joanigrave.jpg" alt="dashboard image" />
      <div class="mt-4 md:mt-0">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Joanigrave, V.N Famalicão, Portugal.
        </h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Desde a sua fundação, temos trabalhado com dedicação e
          profissionalismo para oferecer serviços de impressão de alta qualidade
          a nossos clientes. Somos especialistas em serigrafia numa grande
          variedade de materiais, incluindo tecido, papel, madeira e vidro,
          trabalhamos com clientes de todos os tamanhos, desde pequenas empresas
          até grandes corporações.
        </p>
        <router-link
          to="/contacts"
          class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Contactos
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
