<template>
  <div class="title_info">
    <!-- ================================== STAR ICON ============================================ -->
    <img
      v-if="apiStore.selectedCharacter.favorite === false"
      @click="favStore.addFav"
      class="title_img"
      src="@/assets/images/star.png"
      alt="star"
    />
    <img
      v-if="apiStore.selectedCharacter.favorite === true"
      @click="favStore.removeFav"
      class="title_img"
      src="@/assets/images/starFavi.png"
      alt="star"
    />

    <!-- ================================== CHARACTER NAME ============================================ -->
    <h1>{{ apiStore.selectedCharacter.name }}</h1>
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { useFavStore } from '@/stores/faviStore'
import { useApiStore } from '@/stores/apiStore'

//================================== VARIABLES ============================================
const apiStore = useApiStore()
const favStore = useFavStore()
</script>

<style scoped>
/* ========================================= Title ==================================================== */
.title_info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.title_img {
  width: 50px;
  height: 50px;
  transition: 0.3s;
  cursor: pointer;
}

.title_img:hover {
  transform: scale(1.1);
}

h1 {
  color: white;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
}
</style>
