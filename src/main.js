import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import routes from "./routes";
import { store } from "./stores";
import * as VueGoogleMaps from "vue2-google-maps";
import axios from "axios";

import "vuetify/dist/vuetify.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAPS_KEY,
    libraries: "places"
  },
  installComponents: true
});

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://nekolaapp.herokuapp.com";

new Vue({
  render: h => h(App),
  store,
  router: routes
}).$mount("#app");
