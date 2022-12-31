<template>
  <section class="container px-8 mx-auto pt-72 pb-40 max-sm:pt-48">
    <div class="entry w-2/4 text-center mx-auto max-sm:w-full">
      <h1
        class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
      >
        <span
          class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >Envia</span
        >
        mensagem hoje.
      </h1>
      <p
        class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
      >
        Responderemos o mais breve possível e estamos ansiosos para ajudá-lo a
        alcançar os seus objetivos. Não perca mais tempo e entre em contato
        conosco agora mesmo!
      </p>
    </div>
    <div class="entry delay1 sm:flex gap-4 pt-36 max-sm:pt-20">
      <div class="sm:w-2/4"></div>
      <div class="sm:w-2/4">
        <form action="#" class="space-y-8">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Nome</label
            >
            <input
              type="text"
              id="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="Nome"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="email@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Assunto</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="Em que podemos ajudar?"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >A sua mensagem.</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Deixe aqui a sua mensagem."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
