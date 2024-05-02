import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './HelloView.vue'
import AboutView from './AmeBritView.vue'

const routes = [
  { path: '/', component: HelloView },
  { path: '/britto', component: AmeBritView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})