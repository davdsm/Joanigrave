import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutViewVue from "@/views/AboutPage.vue";
import ContactsPage from "@/views/ContactsPage.vue"
import ServicesPageVue from "@/views/ServicesPage.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import TermsView from "@/views/TermsView.vue";


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
      path: "/privacy",
      name: "Privacy",
      component: PrivacyView,
    },
    {
      path: "/terms",
      name: "Terms",
      component: TermsView,
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
