<template>
  <h4 class="heading">{{ name }}</h4>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
<style scoped>
.heading {
  font-size: 16px;
  font-weight: 800;
  color: #2c3b91;
}
</style>
