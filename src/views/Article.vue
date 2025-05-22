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
        <h2>Ajouter ...</h2>
        <label for="date">Date :</label>
        <select id="date" v-model="selectedDate">
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
          <div>
            <div class="custom-select" @click="toggleDropdown">
              <span>{{ selectedTheme }}</span>
              <div v-if="dropdownVisible" class="dropdown-menu">
                <div v-for="(theme, index) in themeImages" :key="index" class="dropdown-item" @click="selectTheme(theme)">
                  <img :src="theme.src" alt="Theme image" />
                  <span>{{ theme.title }}</span>
                </div>
              </div>
            </div>
            <button class="custom-button" @click="goToPersonnalisation">Continuer la personnalisation</button>
          </div>

        
      </aside>
    </main>
  </div>
</template>

<script>
import { useCartStore } from '/src/stores/CartStore.js'; 

export default {
  data() {
    return {
      selectedDate: 'Sélectionner une option...',
      selectedTheme: 'Sélectionner une option...',
      dropdownVisible: false,
      currentImage: 0,
      defaultImages: [
        'src/images/journal1.svg',
        'src/images/journal2.svg',
        'src/images/journal3.svg',
        'src/images/journal4.svg'
      ],
      autoImages2005: [
        'src/images/auto2006-1.svg',
        'src/images/auto2006-2.svg',
        'src/images/auto2006-3.svg',
        'src/images/auto2006-4.svg'
      ],
      themeImages: [
        { src: '/src/images/1.svg', title: 'Gastronomie' },
        { src: '/src/images/2.svg', title: 'Culture et Art' },
        { src: '/src/images/3.svg', title: 'Mode' },
        { src: '/src/images/4.svg', title: 'Voyage' },
        { src: '/src/images/5.svg', title: 'Article Numérique' },
        { src: '/src/images/6.svg', title: 'Série et Film' },
        { src: '/src/images/7.svg', title: 'People' },
        { src: '/src/images/8.svg', title: 'Automobile' },
        { src: '/src/images/9.svg', title: 'Sport' },
        { src: '/src/images/10.svg', title: 'Fait Divers' },
        { src: '/src/images/11.svg', title: 'Politique' }
      ]
    };
  },

  computed: {
    images() {
      if (this.selectedDate === '2006' && this.selectedTheme === 'Automobile') {
        return this.autoImages2005;
      }
      return this.defaultImages;
    }
  },

  methods: {
    nextImage() {
      if (this.images.length > 0) {
        this.currentImage = (this.currentImage + 1) % this.images.length;
      }
    },
    prevImage() {
      if (this.images.length > 0) {
        this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
      }
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    selectTheme(theme) {
      this.selectedTheme = theme.title;
      this.dropdownVisible = false;
      this.currentImage = 0;
    },
    goToPersonnalisation() {
      const cartStore = useCartStore();
      cartStore.setDate(this.selectedDate);
      cartStore.setTheme(this.selectedTheme);
      this.$router.push('/Personnalisation');
    }
  },

  watch: {
    selectedDate() {
      this.currentImage = 0;
    }
  }
};
</script>



<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
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
.custom-panel label,
.custom-panel span {
  color: white;
}

.custom-panel label {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
}

.custom-panel select {
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  margin-top: 0.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  font-weight: 600;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20,50 70,100 120,50' fill='none' stroke='white' stroke-width='15'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}

.custom-panel select option {
  color: black;
  background-color: white;
}

.custom-panel select:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
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
  border: 1px solid white;
  padding: 0.5rem;
  width: 100%;
  background-color: transparent;
  border-radius: 4px;
  color: white;
  font-weight: 600;
}

.custom-select::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0.75rem;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid white;
  transform: translateY(-50%);
  pointer-events: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 4px; 
  z-index: 1000;
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

.dropdown-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
}

.dropdown-item span {
  text-align: center;
  color: black;
}


</style>
