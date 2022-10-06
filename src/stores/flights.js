import { defineStore } from 'pinia'
import { ref } from 'vue'
import Repository from 'repo/RepositoryFactory.js'

const getFlights = Repository.get()

export const useFlightsStore = defineStore('flights', () => {
  const allFlights = ref({})

  const getFlights = async () => {
    await getFlights().then((res) => console.log(res))
  }

  return { allFlights }
})
