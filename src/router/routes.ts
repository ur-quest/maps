import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'IndexPage',
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
];

export default routes;
