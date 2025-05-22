<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
  
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
          <label for="message">Votre Texte*</label>
          <textarea
            id="message"
            name="message"
            placeholder="écrire ici... : Joyeux anniversaire, Mamie ! Merci pour toutes ces douceurs que seul ton cœur sait offrir : tes histoires racontées au coin du feu, tes plats réconfortants, ton rire qui berce nos souvenirs d’enfance."
            required
            v-model="texte"
          ></textarea>
        </div>

        <label for="image">Votre Image*</label>
        <form>
          <div class="file-input-wrapper">
            <input type="file" name="image" id="image" accept="image/*" required @change="handleImageUpload">
            <img
              v-if="!imagePreview"
              class="image-preview"
              src="/src/images/photo.svg"
              alt="Cliquez ici pour télécharger une image"
              @click="triggerFileInput"
            />
          </div>
          <img v-if="imagePreview" :src="imagePreview" alt="Aperçu" class="image-preview" />
        </form>

        <div v-if="imagePreview && texte" class="ia-selection">
          <label for="aideIA">Aidez-vous de l'IA</label>
          <select id="aideIA" v-model="aideIA" class="ia-select">
            <option disabled value="">Choisissez</option>
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </div>
        <div><p>*Obligatoire pour passer à la suite</p></div>
        <button v-if="aideIA === 'non'" class="custom-button" @click="goToPanier">
          Confirmer l'achat
        </button>
      </aside>
    </main>

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <button class="close-button" @click="closePopup">×</button>
        <h3>Choisissez une option</h3>

        <label for="choixIA">Choix</label>
        <select id="choixIA" v-model="choixIA">
          <option disabled value="">Choisissez</option>
          <option value="poeme">Poème</option>
        </select>

        <label for="userInput">Expliquez votre idée</label>
        <textarea
          id="userInput"
          v-model="ideeIA"
          placeholder="Décrivez votre idée ici..."
        ></textarea>

        <button class="custom-button" @click="sendData">
          Générer avec l'IA
        </button>

        <div id="response" class="ia-response">{{ iaResponse }}</div>

        <button class="custom-button" @click="goToPanier">
          Finaliser la préparation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/CartStore.js';

export default {
  data() {
    return {
      currentImage: 0,
      images: [
        'src/images/Automobile-1977-1.svg',
        'src/images/Automobile-1977-2.svg',
        'src/images/Automobile-1977-3.svg',
        'src/images/Automobile-1977-4.svg'
      ],
      imagePreview: null,
      texte: '',
      aideIA: '',
      choixIA: '',
      ideeIA: '',
      iaResponse: '',
      showPopup: false
    };
  },
  watch: {
    aideIA(newValue) {
      this.showPopup = newValue === 'oui';
    }
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
      cartStore.setAideIA?.(this.aideIA);
      cartStore.setChoixIA?.(this.choixIA);
      cartStore.setIdeeIA?.(this.ideeIA);
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
    },
    closePopup() {
      this.showPopup = false;
      this.aideIA = '';
    },
    async sendData() {
      const userInput = this.ideeIA;

      try {
        const response = await fetch('https://dav74-poeme.hf.space/request', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ txt: userInput })
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        this.iaResponse = data.response;
      } catch (error) {
        this.iaResponse = 'Erreur : ' + error.message;
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
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
  width: 350px;
  height: auto;
}

.journal-image {
  width: 100%;
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

.custom-panel h2 {
  font-size: 1.5rem;
}

.custom-panel label {
  font-family: "Lato", sans-serif;
  font-weight: 100;
  font-style: normal;
  margin-bottom: 1rem;
  font-size: 1rem;
  display: block;
  margin-top: 1rem;
  font-weight: 600;
}

p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  height: 100px;
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
  height: 150px;
  width: 150px;
  align-items: center;
}

.ia-selection {
  margin-top: 2rem;
}

.ia-select {
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  color: #421318;
  border: 1px solid #ccc;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
}

.ia-select:focus {
  outline: none;
  border-color: #C04D55;
  box-shadow: 0 0 0 3px rgba(192, 77, 85, 0.3);
}

.popup-overlay {
  position: fixed;
  top: 65px;
  right: 0;
  width: 28%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.popup {
  position: relative;
  background: #421318;
  color: white;
  padding: 2rem;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popup select,
.popup textarea {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.ia-response {
  background: white;
  color: black;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  white-space: pre-line;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}
</style>
