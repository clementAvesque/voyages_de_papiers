import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    date: '',
    theme: '',
    image: '', // Image pour le panier
    gameFinish: false
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
  },
  computed: {
  cartStore() {
    return useCartStore();
  },
}
});
