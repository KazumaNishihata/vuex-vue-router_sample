import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import topPage from './pages/TopPage'
import editPage from './pages/EditPage'
import createPage from './pages/CreatePage'
import deletePage from './pages/DeletePage'

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
