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

    <main class="main">
      <div class="left-panel">
        <button class="nav-arrow left" @click="prevImage">❮</button>

        <div class="image-container">
          <img :src="images[currentImage]" alt="Journal" class="journal-image" />
        </div>

        <button class="nav-arrow right" @click="nextImage">❯</button>
      </div>

      <aside class="custom-panel">
        <h2>Ajouter ...</h2>
        <label for="date">Date :</label>
        <select id="date">
          <option>Sélectionner une option...</option>
          <option>2000</option>
          <option>2001</option>
          <option>2002</option>
          <option>2003</option> 
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
        </select>

        <label for="theme">Thème :</label>
        <div class="custom-select" @click="toggleDropdown">
          <span>{{ selectedTheme }}</span>
          <div v-if="dropdownVisible" class="dropdown-menu">
            <div v-for="(image, index) in themeImages" :key="index" class="dropdown-item" @click="selectTheme(image)">
              <img :src="image" alt="Theme image" />
            </div>
          </div>
        </div>

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
        <img src="/src/images/logo-white.svg" alt="Logo" />
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
        'src/images/journal1.svg',
        'src/images/journal2.svg',
        'src/images/journal3.svg',
        'src/images/journal4.svg'
      ],
      selectedTheme: 'Sélectionner une option...',
      dropdownVisible: false,
      themeImages: [
        '/src/images/1.svg',
        '/src/images/2.svg',
        '/src/images/3.svg',
        '/src/images/4.svg',
        '/src/images/5.svg',
        '/src/images/6.svg',
        '/src/images/7.svg',
        '/src/images/8.svg',
        '/src/images/9.svg',
        '/src/images/10.svg',
        '/src/images/11.svg',
      ]
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectTheme(image) {
      this.selectedTheme = image;
      this.dropdownVisible = false;
    },
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
  height: calc(100vh - 120px); 
}

.left-panel {
  flex: 3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  height: auto;
}

.journal-image {
  width: 100%;
  border-radius: 10px;
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

.custom-panel {
  flex: 1;
  background: #f3f1ee;
  padding: 2rem;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
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
  margin-top: 2rem;
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

.custom-select {
  position: relative;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 200px;
  background-color: #fff;
  border-radius: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2px; 
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%; 
}

.dropdown-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.dropdown-item span {
  text-align: center;
}

</style>
