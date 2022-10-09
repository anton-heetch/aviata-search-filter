<script setup>
import axios from 'axios'
import ItemsContainer from 'organism/ItemsContainer.vue'
import FiltersContainer from 'organism/FiltersContainer.vue'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  await axios
    .get('http://localhost:9000/flights', {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
    .then((res) => console.log(res.data))

  await axios
    .get('http://localhost:9000/airlines')
    .then((res) => console.log(res.data))
})
</script>

<template>
  <main>
    <FiltersContainer />
    <ItemsContainer />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
