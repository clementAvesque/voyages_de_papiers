import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    date: null,
    theme: null,
    image: null,
    texte: '' 
  }),
  actions: {
    setDate(date) {
      this.date = date;
    },
    setTheme(theme) {
      this.theme = theme;
    },
    setImage(image) {
      this.image = image;
    },
    setTexte(texte) {
      this.texte = texte;
    }
  }
});
