<template>
  <div class="container-landing">
    <!-- ========================================= BTN ==================================================== -->
    <div class="container-btn">
      <button
        v-show="apiStore.itens.length === 0"
        class="btn-show"
        @click="apiStore.showCharacters"
      >
        Show Characters
      </button>

      <button
        v-show="apiStore.itens.length !== 0"
        class="btn-show"
        @click="apiStore.hideCharacters"
      >
        Hide Characters
      </button>

      <buton class="btn-show" @click="goToFavorites">Favorites</buton>
    </div>
    <!-- ========================================= BTN END ==================================================== -->

    <!-- ========================================= API ==================================================== -->
    <div class="container-api">
      <div
        v-for="characters in apiStore.itens"
        :key="characters.id"
        :style="{ backgroundImage: `url(${characters.image})` }"
        class="character-card"
        @click="seeInfo(characters.id)"
      >
        {{ characters.name }}
      </div>
    </div>
    <!-- ========================================= API END ==================================================== -->

    <!-- ========================================= ARROWS ==================================================== -->
    <div class="container-arrows">
      <ArrowComponent @nextPage="nextPage" @returnPage="returnPage" />
    </div>
    <!-- ========================================= ARROWS END ==================================================== -->
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { getCharacterById } from '../../services/api'
import { useApiStore } from '../../stores/apiStore'
import { useRouter } from 'vue-router'
import ArrowComponent from '@/components/Landing/ArrowComponent.vue'

//================================== VARIABLES ============================================
const apiStore = useApiStore()
const router = useRouter()

//================================== FUNCTIONS ============================================
// Go to the next page of characters
async function nextPage() {
  apiStore.addPage()
}

// Go back to the previous page of characters
async function returnPage() {
  apiStore.backPage()
}

// Show character details when clicked and navigate to the dashboard
async function seeInfo(id) {
  getCharacterById(id)
  router.push('/dashboard')
}

// Navigate to the favorites page
function goToFavorites() {
  router.push('/favorites')
}
</script>

<style scoped>
/* ========================================= BTN ==================================================== */
.btn-show {
  background-color: #03ce1e;
  border: none;
  color: rgb(43, 38, 38);
  margin-top: 170px;
  padding: 10px 20px;
  opacity: 0.8;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-show:hover {
  opacity: 1;
}

/* ========================================= Containers ==================================================== */
.container-landing {
  position: absolute;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-api {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  background-color: rgb(41, 39, 39);
}

.container-arrows {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  background-color: rgb(41, 39, 39);
  width: 100%;
}

.container-btn {
  display: flex;
  gap: 15px;
}

/* ========================================= Cards ==================================================== */
.character-card {
  width: 230px;
  height: 300px;
  margin: 10px;
  padding: 4px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-weight: bold;
  text-shadow: 1.5px 1.5px black;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.character-card:hover {
  transform: scale(1.04);
  transition: transform 0.3s;
}
</style>
