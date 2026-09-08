import { createRouter, createWebHistory } from "vue-router";
import Courses from "../views/Courses.vue";
import Summary from "../views/Summary.vue";

// MARK: / = Course List, /summary = หน้าสรุปชื่อ + จำนวนโปรด
const routes = [
  { path: "/", component: Courses },
  { path: "/summary", component: Summary },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
