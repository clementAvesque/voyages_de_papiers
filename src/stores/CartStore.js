// src/stores/CartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    date: '',
    theme: '',
  }),
  actions: {
    setDate(date) {
      this.date = date;
    },
    setTheme(theme) {
      this.theme = theme;
    },
  },
});
