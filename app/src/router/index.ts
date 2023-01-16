import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutViewVue from "@/views/AboutPage.vue";
import ContactsPage from "@/views/ContactsPage.vue"
import ServicesPageVue from "@/views/ServicesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: AboutViewVue,
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesPageVue,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: ContactsPage,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
});

export default router;
