//========================== IMPORTS =================================
import axios from 'axios'
import { useApiStore } from '../stores/apiStore'
import { useFavStore } from '@/stores/faviStore'

// API VARIABLE
const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

//========================== FUNCTIONS =================================

// Function to get all characters from the API
export async function getCharacters() {
  // Get Variables
  const apiStore = useApiStore()
  const page = apiStore.page

  // Fetch characters from the API using the current page
  const response = await api.get(`/character?page=${page}`)

  // Return the results from the response
  return response.data.results
}

// Function to get a character by its ID from the API
export async function getCharacterById(id) {
  // Get Variables
  const apiStore = useApiStore()
  const favStore = useFavStore()

  try {
    // Fetch the character by ID from the API
    const response = await api.get(`/character/${id}`)

    // Check if the character is already in the favorite list
    const alredyFav = favStore.favList.some((character) => character.id === id)

    // Create a new variable to hold the character data with the favorite status
    let faviCharactersId = {}

    // If the character is already a favorite, set favorite to true, otherwise false
    if (alredyFav) {
      faviCharactersId = {
        ...response.data,
        favorite: true, // Adicionando a propriedade favorite como verdadeira
      }
    } else {
      faviCharactersId = {
        ...response.data,
        favorite: false, // Adicionando a propriedade favorite como falsa
      }
    }

    // Set the selected character in the apiStore with the character i found by ID
    apiStore.selectedCharacter = faviCharactersId

    // Return the character data with the favorite status
    return faviCharactersId
  } catch (error) {
    console.error('Error fetching character:', error)
    throw error
  }
}
