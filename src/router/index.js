import { createRouter, createWebHistory } from 'vue-router'
import Article from '../views/Article.vue'
import Home from '../views/HomePage.vue'

const routes = [
  {
    path: '/article', // URL que tu veux, par ex. /article
    name: 'Article',
    component: Article
  },
  {
    path: '/', 
    name: 'HomePage',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
