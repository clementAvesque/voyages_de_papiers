<template>
    <component
      :is="tag"
      v-bind="attrs"
      :href="to"
      @click="handleClick"
      class="btn"
    >
      {{ text }}
    </component>
  </template>
  
  <script setup>
  import { computed, useAttrs, defineProps, defineEmits } from 'vue'
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: null
    }
  })
  
  const emit = defineEmits(['click'])
  
  const attrs = useAttrs()
  const router = useRouter()
  
  // Détermine si on utilise <a> (avec href) ou <button>
  const tag = computed(() => (props.to ? 'a' : 'button'))
  
  const handleClick = (event) => {
    // Si on veut naviguer via Vue Router
    if (props.to) {
      event.preventDefault()
      router.push(props.to)
    }
  
    emit('click', event) // Émet l'événement click si besoin
  }
  </script>

  

<style scoped>
.btn {
    margin-top: 50px;
    height: 7vh;
    width: 30vw;
    font-size: clamp(1vw, 2.22vw, 3vw);
    font-family: "Cormorant Garamond", serif;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(192, 77, 85, 1);
    border: none;
    color: white;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    text-decoration: none;
}
</style>