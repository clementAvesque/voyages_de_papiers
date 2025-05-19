<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <img src="../images/logo-white.svg" alt="Logo">
    <RouterLink to="/" style="text-decoration: none; color: white;">Accueil</RouterLink>
    <RouterLink to="/Article" style="text-decoration: none; color: white;">Votre journal</RouterLink>
    <RouterLink to="/team" style="text-decoration: none; color: white;">Notre équipe</RouterLink>
    <RouterLink to="/FAQ" style="text-decoration: none; color: white;">FAQ</RouterLink>
    <RouterLink to="/Panier" style="text-decoration: none; color: white;">
      <img src="../images/logo-panier.svg" alt="panier" style="height: 5vh;">
    </RouterLink>
  </header>
</template>

<style scoped>

.lato-black- {
    font-family: "Lato", sans-serif;
    font-weight: auto;
    font-style: normal;
}

header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 10vh;
    background-color: rgba(66, 19, 24, 1);
    font-size: 16pt;
    font-family: "Lato", sans-serif;
}   
header img{
    height: 5vh;
}

</style>