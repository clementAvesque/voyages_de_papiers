import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    date: '',
    theme: '',
    image: '', // Image pour le panier
  }),
  actions: {
    setDate(date) {
      this.date = date;
    },
    setTheme(theme) {
      this.theme = theme;
    },
    setImage(image) {
      this.image = image; // Mise à jour de l'image dans le store
    },
  },
});
