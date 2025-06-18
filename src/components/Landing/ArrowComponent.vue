<template>
  <ArrowLeft
    v-show="apiStore.itens.length !== 0"
    class="arrow"
    id="arrow-left"
    size="30"
    @click="returnPage()"
  />
  <ArrowRight
    v-show="apiStore.itens.length !== 0"
    class="arrow"
    id="arrow-right"
    size="30"
    @click="nextPage()"
  />
</template>

<script setup>
//================================== IMPORTS ============================================
import { ArrowRight, ArrowLeft } from 'lucide-vue-next'
import { defineEmits } from 'vue'
import { useApiStore } from '@/stores/apiStore'

//================================== VARIABLES ============================================
const emit = defineEmits(['nextPage', 'returnPage'])

const apiStore = useApiStore()

//================================== FUNCTIONS ============================================
// Emit the nextPage event to the parent component
function nextPage() {
  emit('nextPage')
}

// Emit the returnPage event to the parent component
function returnPage() {
  emit('returnPage')
}
</script>

<style scoped>
/* ========================================= Arrows ==================================================== */
.arrow {
  color: #03ce1e;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.3s;
  margin-top: auto;
  margin-bottom: 30px;
}

#arrow-right:hover {
  opacity: 1;
}

#arrow-left:hover {
  opacity: 1;
}

#arrow-right {
  margin-left: 5px;
}

#arrow-left {
  margin-right: 5px;
}
</style>
