<template>
  <div>
    <header class="header">
      <div class="header-left">
        <img src="/src/images/logo-white.svg" alt="Logo" />
        <nav class="nav">
          <a href="#">Accueil</a>
          <a href="#">Votre journal</a>
          <a href="#">Notre équipe</a>
          <a href="#">FAQ</a>
        </nav>
      </div>
      <div class="header-right">
        <img src="/src/images/logo-panier.svg" alt="Panier" />
      </div>
    </header>

    <div class="container">
      <div class="left-side">
        <img class="background-image" src="/src/images/fond-paiment.svg" alt="Background" />
        <div class="form-sections">
          <section class="payment">
            <h2>Mode de paiement</h2>
            <div class="payment-methods">
              <label><input type="radio" v-model="selectedPaymentMethod" value="card" /> Carte Bancaire</label>
              <label><input type="radio" v-model="selectedPaymentMethod" value="paypal" /> PayPal</label>
              <label><input type="radio" v-model="selectedPaymentMethod" value="google-apple" /> Google Pay / Apple Pay</label>
            </div>

            <div v-if="selectedPaymentMethod === 'card'">
              <div class="input-group">
                <input type="text" placeholder="Numéro de carte" />
                <input type="text" placeholder="Nom sur la carte" />
                <div class="inline-inputs">
                  <input type="text" placeholder="MM/AA" />
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </div>

            <div v-if="selectedPaymentMethod === 'paypal'">
              <p>Vous allez être redirigé vers PayPal pour compléter votre paiement.</p>
            </div>
            <div v-if="selectedPaymentMethod === 'google-apple'">
              <p>Utilisez Google Pay ou Apple Pay pour compléter votre paiement.</p>
            </div>
          </section>

          <section class="contact">
            <h2>Contact</h2>
            <div class="input-group">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Nom et prénom" />
              <input type="text" placeholder="Adresse" />
              <input type="text" placeholder="Région / Pays" />
              <input type="text" placeholder="Numéro de téléphone" />
            </div>
          </section>

        </div>
      </div>

      <div class="right-side">
        <section class="summary">
          <h2>Panier</h2>
          <div class="items">
            <div class="item" v-for="(item, index) in cartItems" :key="index">
              <img :src="item.image" alt="Article" />
              <div class="details">
                <p><strong>{{ item.theme }}</strong></p>
                <p>Date : {{ item.date }}</p>
                <p>Quantité : {{ item.quantity }}</p>
                <p>Prix unitaire : 34,99 €</p>
              </div>
            </div>
          </div>

          <div class="promo">
            <input id="promo" v-model="promoCode" type="text" placeholder="Entrez votre code" />
          </div>

          <div class="totals">
            <p>Sous-total : {{ subtotalBeforeDiscount.toFixed(2) }} €</p>
            <p v-if="promoCode === 'Journal10'">Code promo -10%</p>
            <p>Livraison : {{ delivery.toFixed(2) }} €</p>
            <p><strong>Total : {{ total.toFixed(2) }} €</strong></p>
          </div>
          <button class="pay-btn" @click="finaliserPaiement">confirmer</button>
        </section>
      </div>
    </div>

    <!-- Popup de confirmation -->
    <div v-if="showConfirmationPopup" class="confirmation-popup">
      <div class="popup-content">
        <button @click="showConfirmationPopup = false" class="close-icon" aria-label="Fermer le popup">✕</button>
        <h2>Validation de votre commande</h2>
        <p>Votre aventure personnalisée ne fait que commencer.</p>
        <p>Nous avons bien reçu votre commande et notre équipe s'apprête à lui donner vie avec soin et sens du détail.</p>
        <p>
          Un cadeau unique est en préparation, pensé pour créer l’émotion, raviver les souvenirs et marquer les esprits.
          Chaque page est conçue pour raconter une histoire, celle que vous avez choisie d’offrir.
        </p>
        <p><strong>Et maintenant ?</strong></p>
        <ul>
          <li>Un e-mail de confirmation vient de vous être envoyé</li>
          <li>Votre création sera imprimée et expédiée sous X jours</li>
          <li>Vous recevrez une notification dès son expédition par une société tiers de la nôtre</li>
        </ul>
        <p>Merci de faire confiance à Voyage de Papier.</p>
        <p>
          Nous avons hâte que cette création prenne place entre les mains de celles de la personne à qui vous la destinez.
        </p>
      </div>
    </div>

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

<script>
export default {
  name: 'PaiementPage',
  data() {
    return {
      cartItems: [],
      itemPrice: 34.99,
      delivery: 5.99,
      selectedPaymentMethod: 'card',
      promoCode: '',
      showConfirmationPopup: false,
    };
  },
  computed: {
    subtotalBeforeDiscount() {
      return this.cartItems.reduce((acc, item) => acc + this.itemPrice * item.quantity, 0);
    },
    subtotal() {
      let discount = 0;
      if (this.promoCode === 'Journal10') {
        discount = 0.10;
      }
      return this.subtotalBeforeDiscount * (1 - discount);
    },
    total() {
      return this.subtotal + this.delivery;
    },
  },
  created() {
    const queryItems = this.$route.query.articles;
    if (queryItems) {
      this.cartItems = JSON.parse(queryItems);
    }
  },
  methods: {
    applyPromo() {
      if (this.promoCode === 'Journal10') {
        alert('Code promo appliqué avec succès!');
      } else {
        alert('Code promo invalide');
      }
    },
    finaliserPaiement() {
      // Simuler un traitement, puis afficher le popup
      setTimeout(() => {
        this.showConfirmationPopup = true;
      }, 1000);
    }
  }
};
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
.container {
  display: flex;
  flex: 1;
  min-height: calc(100vh - 200px);
  overflow: hidden;
}
.left-side {
  width: 50%;
  position: relative;
  background-color: #600D1D;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.form-sections {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.payment, .contact {
  background-color: #600D1D;
  color: white;
  padding: 2rem;
  border-radius: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.input-group input {
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #aaa;
}
.inline-inputs {
  display: flex;
  gap: 1rem;
}
.finalize-btn {
  background-color: #421318;
  color: #ffffff;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
}
.right-side {
  width: 50%;
  background-color: white;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
}
.summary {
  width: 100%;
}
.items {
  margin-bottom: 1rem;
}
.item {
  display: flex;
  gap: 1rem;
}
.item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.details {
  flex: 1;
}
.promo {
  margin-top: 1rem;
}
.totals {
  margin-top: 1rem;
}
.pay-btn {
  background-color: #A41D36;
  color: white;
  padding: 0.75rem;
  border: none;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
}
.footer {
  display: flex;
  justify-content: space-between;
  background: #4a1212;
  color: white;
  padding: 2rem;
  flex-wrap: wrap;
}
.footer-section {
  flex: 1;
  min-width: 150px;
}
.footer-section h2 {
  margin-bottom: 0.5rem;
}
.footer-section ul {
  list-style: none;
  padding: 0;
}
.footer-section li {
  margin-bottom: 0.25rem;
}
.footer-section a {
  color: white;
  text-decoration: none;
}
.footer-bottom {
  text-align: center;
  background: #4a1212;
  color: white;
  font-size: 0.75rem;
  padding: 0.5rem;
  width: 100%;
  margin-top: 1rem;
}

/* Style du popup */
.confirmation-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.popup-content {
  position: relative; 
  background-color: #4a1212;
  color: white;
  padding: 2rem;
  max-width: 600px;
  border-radius: 1rem;
  text-align: center;
}

.close-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.popup-content ul {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.popup-content .close-btn {
  background-color: #a41d36;
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  cursor: pointer;
}


</style>
