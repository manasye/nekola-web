import Home from "./pages/Home";
import Search from "./pages/Schools";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/compare", component: Search },
  { path: "/schools", component: Search },
  { path: "/school/:id", component: Search },
  { path: "/teachers", component: Search },
  { path: "/teacher/:id", component: Search },
  { path: "/review/school/:id", component: Search },
  { path: "/review/teacher/:id", component: Search }
];

export default new VueRouter({ routes });
