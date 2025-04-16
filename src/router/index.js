import { createRouter, createWebHistory } from 'vue-router'
import Article from '../views/Article.vue'
import Home from '../views/HomePage.vue'
import FAQ from '../views/FAQ.vue'

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
  },
  {
    path: '/FAQ', 
    name: 'FAQ',
    component: FAQ
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
