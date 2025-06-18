//================================== IMPORTS ============================================
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApiStore } from './apiStore'

export const useFavStore = defineStore(
  'favStore',
  () => {
    //================================== VARIABLES ============================================
    const apiStore = useApiStore()
    const favList = ref([])

    //================================== FUNCTIONS ============================================
    // Function to add a character to the favorite list
    function addFav() {
      // Set the favorite property of the selected character to true
      apiStore.selectedCharacter.favorite = true

      // Add the character to the favList
      favList.value.push(apiStore.selectedCharacter)
    }

    // Function to remove a character from the favorite list
    function removeFav() {
      // Set the favorite property of the selected character to false
      apiStore.selectedCharacter.favorite = false

      // Remove the character from the favList based on its id
      favList.value = favList.value.filter(
        (character) => character.id !== apiStore.selectedCharacter.id,
      )
    }

    //================================== RETURN ============================================
    return {
      favList,
      addFav,
      removeFav,
    }
  },
  { persist: true },
)
