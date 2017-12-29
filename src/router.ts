import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import topPage from './pages/TopPage.vue'
import editPage from './pages/EditPage.vue'
import createPage from './pages/CreatePage.vue'
import deletePage from './pages/DeletePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: topPage,
    },
    {
      path: '/create/',
      name: 'create',
      component: createPage,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: editPage,
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: deletePage,
    },
  ],
});
