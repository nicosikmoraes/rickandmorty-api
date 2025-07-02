<template>
  <div class="container_dashboard">
    <!-- Title and Favorite Icon -->
    <FavoriteComponent />

    <div class="info">
      <!-- ================================== IMAGE ============================================ -->
      <img
        id="character_image"
        v-if="apiStore.selectedCharacter.image"
        :src="apiStore.selectedCharacter.image"
        alt="Character Image"
      />
      <!-- ================================== DETAILS ============================================ -->
      <div class="details">
        <DetailsComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { useApiStore } from '../stores/apiStore'
import DetailsComponent from '@/components/Dashboard/DetailsComponent.vue'
import FavoriteComponent from '@/components/Dashboard/FavoriteComponent.vue'

//================================== VARIABLES ============================================
const apiStore = useApiStore()
</script>

<style scoped>
/* ========================================= CONTAINERS ==================================================== */
.container_dashboard {
  width: 100%;
  position: absolute;
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(41, 39, 39);
}

.info {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 90px;
}

/* ========================================= IMAGE ==================================================== */
#character_image {
  height: 350px;
  border-radius: 12px;
  margin-left: -280px;
  margin-top: 40px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
