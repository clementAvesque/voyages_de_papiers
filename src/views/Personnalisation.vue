<template>
  <div>
    <main class="main">
      <div class="left-panel">
        <button class="nav-arrow left" @click="prevImage">
          <img src="/src/images/fleche-gauche.svg" alt="fleche" />
        </button>
        <div class="image-container">
          <img :src="images[currentImage]" alt="Journal" class="journal-image" />
        </div>
        <button class="nav-arrow right" @click="nextImage">
          <img src="/src/images/fleche-droite.svg" alt="fleche" />
        </button>
      </div>

      <aside class="custom-panel">
        <h2>Personnaliser ...</h2>
        <div>
          <label for="message">Votre Texte</label>
          <textarea
            id="message"
            name="message"
            placeholder="écrire ici..."
            required
            v-model="texte"
          ></textarea>
        </div>

        <label for="image">Votre Image</label>
        <form>
          <div class="file-input-wrapper">
            <input type="file" name="image" id="image" accept="image/*" required @change="handleImageUpload">
            <img
              v-if="!imagePreview"
              src="/src/images/photo.svg"
              alt="Cliquez ici pour télécharger une image"
              @click="triggerFileInput"
            />
          </div>
          <img v-if="imagePreview" :src="imagePreview" alt="Aperçu" class="image-preview" />
        </form>

        <button class="custom-button" @click="goToPanier">Continuer vers l'achat</button>
      </aside>
    </main>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/CartStore.js';

export default {
  data() {
    return {
      currentImage: 0,
      images: [
        'src/images/auto2006-1.svg',
        'src/images/auto2006-2.svg',
        'src/images/auto2006-3.svg',
        'src/images/auto2006-4.svg'
      ],
      imagePreview: null,
      texte: ''
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    goToPanier() {
      const cartStore = useCartStore();
      cartStore.setImage(this.imagePreview);
      cartStore.setTexte(this.texte);
      this.$router.push('/Panier');
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    triggerFileInput() {
      document.getElementById('image').click();
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
  background: url('/src/images/fond-papier.svg') center center / cover no-repeat;
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
  background: #421318;
  padding: 2rem;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
  color: white;
}

.custom-panel h2,
.custom-panel label {
  color: white;
}

.custom-panel label {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
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

.image-preview {
  margin-top: 1rem;
  max-width: 100%;
  border-radius: 10px;
}
</style>
