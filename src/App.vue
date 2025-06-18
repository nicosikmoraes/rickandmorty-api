<template>
  <div class="container">
    <!-- Title -->
    <h1 id="title" @click="goHome()">Rick and Morty Characters</h1>

    <!-- Router View (Pages) -->
    <router-view />
  </div>
</template>

<script setup>
//================================== IMPORTS ============================================
import { useRouter } from 'vue-router'

//================================== VARIABLES ============================================
const router = useRouter()

//================================== FUNCTIONS ============================================
function goHome() {
  router.push('/')
}
</script>

<style>
/* ========================================= GLOBAL STYLES ==================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto;
  font-size: 15px;
}

/* ========================================= CONTAINERS ==================================================== */
.container {
  min-height: 100vh;
  background-color: rgb(41, 39, 39);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ========================================= TITLE ==================================================== */
#title {
  font-family: 'Get Schwifty';
  margin-top: 70px;
  font-size: 43px;
  font-weight: bold;
  font-style: italic;
  color: #03ce1e;
  opacity: 0.8;
  cursor: pointer;
}

#title:hover {
  opacity: 1;
}

/* ========================================= FONTS ==================================================== */
@font-face {
  font-family: 'Get Schwifty';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3089507/get-schwifty.woff') format('woff');
}
</style>
