//================================== IMPORTS ============================================
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCharacters } from '../services/api'

export const useApiStore = defineStore(
  'apiStore',
  () => {
    //================================== VARIABLES ============================================
    const page = ref(1)
    const selectedCharacter = ref([])
    const itens = ref([])

    //================================== FUNCTIONS ============================================
    // Function to show all characters, getting them from the API
    async function showCharacters() {
      // Set itens to the result of the getCharacters function
      itens.value = await getCharacters()
    }

    // Function to hide all characters
    function hideCharacters() {
      itens.value = []
    }

    // Function to see the next page of characters
    async function addPage() {
      // Increment the page number and fetch characters for that page
      this.page++

      //Needed to update the itens with the new page characters
      itens.value = await getCharacters(this.page)
    }

    // Function to go back to the previous page of characters
    async function backPage() {
      // If on the first page, do not decrement the page number
      if (this.page === 1) {
        this.page = 1
      } else {
        // Decrement the page number and fetch characters for that page
        this.page--
        itens.value = await getCharacters(this.page)
      }
    }

    //================================== RETURN ============================================
    return {
      page,
      selectedCharacter,
      itens,
      showCharacters,
      hideCharacters,
      addPage,
      backPage,
    }
  },
  { persist: true },
)
