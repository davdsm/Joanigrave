<script lang="ts">
import { sendEmail } from "@/redux/calls";

export default {
  data() {
    return {
      success: <string>"",
      error: <string>"",
      name: <string>"",
      email: <string>"",
      subject: <string>"",
      message: <string>"",
    };
  },
  methods: {
    async send(e): Promise<void> {
      e.preventDefault();
      this.success = "";
      this.error = "";
      if (
        this.name.length > 1 &&
        this.email.length > 1 &&
        this.message.length > 1
      ) {
        const emailSended: number = await sendEmail(
          this.name,
          this.email,
          this.subject,
          this.message
        );
        if (emailSended === 200) {
          this.success = "Mensagem Enviada!";
          this.error = "";
        } else {
          this.success = "";
          this.error = "Erro interno, contactar admin.";
        }
      } else {
        this.success = "";
        this.error = "Os campos são obrigatórios.";
      }
    },
  },
};
</script>
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
    <div class="entry delay1 sm:flex gap-12 pt-36 max-sm:pt-20">
      <div class="sm:w-2/4 flex flex-wrap pb-32">
        <div
          class="sm:w-2/4 max-sm:w-full max-sm:pb-4 text-center dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto w-12 h-12 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <a class="font-bold text-lg" href="mailto:geral@joanigrave.com"
            >geral@joanigrave.com</a
          >
        </div>
        <div
          class="sm:w-2/4 max-sm:w-full max-sm:pb-4 text-center dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto w-12 h-12 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
          <a class="font-bold text-lg" href="tel:+351 931 611 755"
            >+351 931 611 755<br /><b
              ><span>Chamada para rede móvel nacional.</span></b
            ></a
          >
        </div>
        <div class="w-full text-center dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto w-12 h-12 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <a
            target="_blank"
            class="font-bold text-lg"
            href="https://www.google.com/maps/place/Joanitel/@41.4451561,-8.4162531,17z/data=!3m1!4b1!4m5!3m4!1s0xd24f75c89e7d9b1:0xc167b6b0e38ca67d!8m2!3d41.4451917!4d-8.414066"
            >Avenida Dr. Mário Soares, Nº 1900 <br />
            4770-258 Joane, Vila Nova de Famalicão</a
          >
        </div>
      </div>
      <div class="sm:w-2/4">
        <form @submit="send" class="space-y-8">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Nome</label
            >
            <input
              type="text"
              id="name"
              v-model="name"
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
              v-model="email"
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
              v-model="subject"
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
              v-model="message"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Deixe aqui a sua mensagem."
            ></textarea>
          </div>

          <div class="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              required
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Eu concordo com os
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >termos e condições</a
              >
              e
              <a
                href="#"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >política de privacidade</a
              >.</label
            >
          </div>

          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Enviar Mensagem
          </button>
          <div
            v-if="error.length > 0"
            class="w-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">Erro!</span> {{ error }}
          </div>
          <span></span>
          <div
            v-if="success.length > 0"
            class="p-4 mb-4 w-auto text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-900 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">Sucesso!</span> {{ success }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
