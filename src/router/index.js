import { createRouter, createWebHistory } from 'vue-router'
import Article from '/src/views/Article.vue'
import Personnalisation from '/src/views/Personnalisation.vue'
import Panier from '/src/views/Panier.vue'
import Paiment from '/src/views/Paiment.vue'
import FAQ  from '../views/FAQ.vue'

import Home from '../views/HomePage.vue'
import team from '../views/equipe.vue'

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
    path: '/team', 
    name: 'team',
    component: team
  },
  {
    path: '/Personnalisation', 
    name: 'Personnalisation',
    component: Personnalisation
  },
  {
    path: '/Panier', 
    name: 'Panier',
    component: Panier
  },
  {
    path: '/Paiement', 
    name: 'Paiement',
    component: Paiment
  },
  {
    path:'/FAQ',
    name:'FAQ',
    component: FAQ
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
