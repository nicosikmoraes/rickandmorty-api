<template>
  <div class="container-details">
    <!-- ================================== CHARACTER INFO ============================================ -->
    <h2>Name: {{ apiStore.selectedCharacter.name }}</h2>
    <h2>Status: {{ apiStore.selectedCharacter.status }}</h2>
    <h2>Species: {{ apiStore.selectedCharacter.species }}</h2>
    <h2>Gender: {{ apiStore.selectedCharacter.gender }}</h2>
    <h2>Origin: {{ apiStore.selectedCharacter.origin.name }}</h2>
    <h2>Location: {{ apiStore.selectedCharacter.location.name }}</h2>
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { useApiStore } from '../../stores/apiStore'

//================================== VARIABLES ============================================
const apiStore = useApiStore()
</script>

<style scoped>
/* ========================================= CONTAINERS ==================================================== */
.container-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
}

/* ========================================= TEXTS ==================================================== */
h2 {
  color: white;
  font-size: 24px;
  font-weight: 250;
  text-shadow: 1.5px 1.5px black;
}
</style>
