import { createRouter, createWebHistory } from 'vue-router';
import Courses from '@/views/Courses.vue';
import Summary from '@/views/Summary.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    }
  ]
});

export default router;