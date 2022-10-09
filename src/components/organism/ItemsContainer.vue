<script setup>
import FlightItem from 'molecules/FlightsItem.vue'
</script>
<template>
  <div class="flightsItems__container">
    <h1>Flights Container</h1>
    <FlightItem />
  </div>
</template>
<style lang="scss" scoped>
.flightsItems__container {
  max-width: 880px;
  width: 100%;
}
</style>
