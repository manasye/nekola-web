import Home from "./pages/Home";
import Search from "./pages/Search";
import School from "./pages/School";
import Compare from "./pages/Compare";
import VueRouter from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/compare", component: Compare },
  { path: "/school/:id", component: School },
  { path: "/teacher/:id", component: Search },
  { path: "/review/school/:id", component: Search },
  { path: "/review/teacher/:id", component: Search }
];

export default new VueRouter({ mode: "history", routes });
