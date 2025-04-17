<template>
  <div class="container">

    <main class="main">
      <h1>Votre Panier</h1>
      <div class="cart">
        <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
          <div class="item-info">
            <img :src="item.image" alt="Logo" />
            <div class="text">
              <p><strong>Date :</strong> {{ item.date }}</p>
              <p><strong>Thème :</strong> {{ item.theme }}</p>
              <p><strong>Texte :</strong> <span class="recap">Récapitulatif</span></p>
            </div>
          </div>
          <div class="item-actions">
            <input type="number" v-model.number="item.quantity" min="1" />
            <button @click="goToModifyPage(index)">Modifier</button>
            <button @click="removeItem(index)">Supprimer</button>
          </div>
        </div>
        <button class="final-btn" @click="goToPayment">Finaliser la commande</button>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-section">
        <h2>Assistance</h2>
        <ul>
          <li><a href="#">Service-Client</a></li>
          <li><a href="#">Aide</a></li>
          <li><a href="#">Satisfait ou refait</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>Nous suivre</h2>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
      <div class="footer-logo">
      <img src="/src/images/logo-white.svg" alt="Logo" />
    </div>
      <div class="footer-bottom">
        VoyageDePapier.Com 2025 - Mentions légales - Conditions générales de vente - Politique de confidentialité
      </div>
    </footer>
  </div>
</template>
  
<script setup>
import { useCartStore } from '/src/stores/CartStore.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const cartStore = useCartStore();
const cartItems = ref([
{ 
  image: '/src/images/logo-white.svg', 
  date: cartStore.date, 
  theme: cartStore.theme, 
  quantity: 1 
}
]);
  function removeItem(index) {
  cartItems.value.splice(index, 1);
}
  function goToModifyPage(index) {
  router.push({ name: 'PaiementPage', params: { article: JSON.stringify(cartItems.value[index]) } });
}
  function goToPayment() {
  router.push({ name: 'Paiement', query: { articles: JSON.stringify(cartItems.value) } });
}
</script>
  
  
<style scoped>
.container {
  font-family: Georgia, serif;
  background-image: url('/src/images/fond-panier.svg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background: #600D1D;
color: white;
}

.header-left {
  display: flex;
  align-items: center; 
  gap: 10rem; 
}

.nav {
  display: flex;
  align-items: center;
  gap: 10rem; 
}

.nav a {
  text-decoration: none;
  color: white;
}

.logo {
  height: 40px;
}
.main {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.cart {
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.75);
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.cart-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.item-info {
  display: flex;
  gap: 1rem;
}

.item-info img {
  width: 96px;
  border-radius: 0.5rem;
}

.text p {
  margin: 0.25rem 0;
}

.recap {
  background-color: #A41D36;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.item-actions input {
  width: 40px;
  text-align: center;
  padding: 0.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.final-btn {
  background-color: #A41D36;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin: 1rem auto 0;
}

.footer {
  background-color: #600D1D;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  flex-wrap: wrap;
}

.footer-section h2 {
  margin-bottom: 0.5rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li a {
  color: white;
  text-decoration: none;
}

.footer-bottom {
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>