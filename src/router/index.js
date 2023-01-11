import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Applications from '../views/Applications.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/candidatures',
    name: 'Applications',
    component: Applications,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
