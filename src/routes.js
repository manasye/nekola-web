import VueRouter from "vue-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import School from "./pages/School";
import Compare from "./pages/Compare";
import Teacher from "./pages/Teacher";
import ReviewSchool from "./pages/ReviewSchool";
import ReviewTeacher from "./pages/ReviewTeacher";

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/compare", component: Compare },
  { path: "/school/:id", component: School },
  { path: "/teacher/:id", component: Teacher },
  { path: "/review/school/:id", component: ReviewSchool },
  { path: "/review/teacher/:id", component: ReviewTeacher }
];

export default new VueRouter({ mode: "history", routes });
