<template>
    <div>
      <header class="header">
        <div class="header-left">
          <img src="/logo-white.png" alt="Logo" class="logo" />
          <nav class="nav">
            <a href="#">Accueil</a>
            <a href="#">Votre journal</a>
            <a href="#">Notre équipe</a>
            <a href="#">FAQ</a>
          </nav>
        </div>
        <div class="header-right">
          <span class="cart-icon">🛒</span>
        </div>
      </header>
  
      <main class="main">
        <button class="nav-arrow left" @click="prevImage">❮</button>
  
        <div class="image-container">
          <img :src="images[currentImage]" alt="Journal" class="journal-image" />
        </div>
  
        <button class="nav-arrow right" @click="nextImage">❯</button>
  
        <aside class="custom-panel">
          <h2>Ajouter ...</h2>
          <label for="date">Date :</label>
          <select id="date">
            <option>Sélectionner une option...</option>
          </select>
  
          <label for="theme">Thème :</label>
          <select id="theme">
            <option>Sélectionner une option...</option>
          </select>
  
          <button class="custom-button">Continuer la personnalisation</button>
        </aside>
      </main>
  
      <footer class="footer">
        <div class="footer-section">
          <h3>Assistance</h3>
          <ul>
            <li><a href="#">Service-Client</a></li>
            <li><a href="#">Aide</a></li>
            <li><a href="#">Satisfait au refait</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Nous suivre</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">FaceBook</a></li>
          </ul>
        </div>
        <div class="footer-logo">
          <img src="/logo-white.png" alt="Logo" />
        </div>
      </footer>
      <div class="footer-bottom">
        VoyageDePapier.Com 2025 - Mentions légales - Conditions générales de vente - Politique de confidentialité
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentImage: 0,
        images: [
          '/images/journal1.svg',
          '/images/journal2.png',
          '/images/journal3.png'
        ]
      };
    },
    methods: {
      nextImage() {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      },
      prevImage() {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: url('/background.jpg') center/cover no-repeat;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
  }
  
  .header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .logo {
    height: 40px;
  }
  
  .nav a {
    margin-right: 1rem;
    text-decoration: none;
    color: white;
  }
  
  .cart-icon {
    font-size: 1.5rem;
  }
  
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
  }
  
  .nav-arrow {
    font-size: 2rem;
    background: none;
    border: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10;
  }
  
  .left {
    left: 10px;
  }
  
  .right {
    right: 10px;
  }
  
  .image-container {
    background: white;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 600px;
    height: auto;
  }
  
  .journal-image {
    width: 100%;
    border-radius: 10px;
  }
  
  .custom-panel {
    position: absolute;
    right: 50px;
    width: 300px;
    background: #f3f1ee;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .custom-panel h2 {
    margin-bottom: 1rem;
  }
  
  .custom-panel label {
    display: block;
    margin-top: 1rem;
    font-weight: 600;
  }
  
  .custom-panel select {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .custom-button {
    margin-top: 1.5rem;
    padding: 0.75rem;
    background: #d62828;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    background: #4a1212;
    color: white;
    padding: 2rem;
  }
  
  .footer-section h3 {
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
  
  .footer-logo img {
    height: 40px;
  }
  
  .footer-bottom {
    text-align: center;
    background: #4a1212;
    color: white;
    font-size: 0.75rem;
    padding: 0.5rem;
  }
  </style>
  