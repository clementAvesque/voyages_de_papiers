<template>
  <div>
    <main class="main">
      <div class="left-panel">
        <button class="nav-arrow left" @click="prevImage"><img src="/src/images/fleche-gauche.svg" alt="fleche" /></button>
        <div class="image-container">
          <img :src="images[currentImage]" alt="Journal" class="journal-image" />
        </div>

        <button class="nav-arrow right" @click="nextImage"><img src="/src/images/fleche-droite.svg" alt="fleche" /></button>
      </div>

      <aside class="custom-panel">
        <h2>Personnaliser ...</h2>
      <div>
          <label for="message">Votre Texte</label>
              <textarea id="message" name="message" placeholder="écrire ici..." required></textarea>
      </div>
      <label for="message">Votre Image</label>
      <form>
      <div class="file-input-wrapper">
          <input type="file" name="image" id="image" accept="image/*" required>
          <img src="/src/images/photo.svg" alt="Cliquez ici pour télécharger une image" onclick="document.getElementById('image').click();">
      </div>
      <br><br>
      </form>
      <button class="custom-button" @click="goToPanier">Continuer vers l'achat</button>
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
    goToPanier() {
      this.$router.push('/Panier');
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: url('/src/images/fond-papier.svg') center/cover no-repeat;
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
  border-radius: 10px;
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
  background: #C04D55;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.file-input-wrapper {
          position: relative;
          display: inline-block;
}
.file-input-wrapper input[type="file"] {
    display: none;
}
.file-input-wrapper img {
    cursor: pointer;
    width: 100px; 
    height: auto;
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
  