<template>
  <div class="mobile-heading">
    {{ name }}
  </div>
</template>
<script setup>
defineProps({
  name: String,
});
</script>
<style scoped>
.mobile-heading {
  font-size: 20px !important;
  font-weight: 700 !important;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
}
</style>
