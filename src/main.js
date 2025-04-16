import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // Import de Pinia
import router from './router'; // Import de Vue Router

const app = createApp(App);

const pinia = createPinia(); // Créez une instance de Pinia
app.use(pinia); // Utilisez Pinia dans l'application
app.use(router); // Utilisez Vue Router dans l'application

app.mount('#app');
