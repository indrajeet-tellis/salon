<template>
  <div>
    <vue3-star-ratings />
  </div>
</template>
<script setup>
import vue3StarRatings from "vue3-star-ratings";
</script>

<style scoped>
.vue3-star-ratings > button {
  display: none !important;
}
</style>

<!-- <template>
  <div class="text-center">
    <v-rating
      v-model="rating"
      bg-color="orange-lighten-1"
      color="blue"
    ></v-rating>
  </div>
</template>
<script>
export default {
  data: () => ({ rating: 3 }),
};
</script> -->
