<template>
  <div class="container_favorite_show">
    <h1>Favorites:</h1>
    <!-- ========================================= API ==================================================== -->
    <div class="container_api">
      <div
        v-for="characters in favStore.favList"
        :key="characters.id"
        :style="{ backgroundImage: `url(${characters.image})` }"
        class="character_card"
        @click="seeInfo(characters.id)"
      >
        {{ characters.name }}
      </div>
    </div>
    <!-- ========================================= API END ==================================================== -->
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { useFavStore } from '@/stores/faviStore'
import { useRouter } from 'vue-router'
import { getCharacterById } from '@/services/api'

//================================== VARIABLES ============================================
const favStore = useFavStore()
const router = useRouter()

//================================== FUNCTIONS ============================================
// Show the details of a character when clicked and navigate to the dashboard
async function seeInfo(id) {
  getCharacterById(id)
  router.push('/dashboard')
}
</script>

<style scoped>
/* ========================================= CONTAINERS ==================================================== */
.container_favorite_show {
  margin-top: 50px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.container_api {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  background-color: rgb(41, 39, 39);
}

/* ========================================= CHARACTER CARD ==================================================== */
.character_card {
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

.character_card:hover {
  transform: scale(1.04);
  transition: transform 0.3s;
}

/* ========================================= TITLE ==================================================== */
h1 {
  color: white;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0px;
}
</style>
