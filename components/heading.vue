<template>
  <div class="heading">{{ name }}</div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>
<style scoped>
.heading {
  font-size: 14px;
  font-weight: 700;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
}
</style>
