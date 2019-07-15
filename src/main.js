import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import routes from "./routes";

import "vuetify/dist/vuetify.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: routes
}).$mount("#app");
