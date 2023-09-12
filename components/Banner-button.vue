<template>
  <div class="banner-btn-main">
    <a href="#">{{ name }}</a>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  name: String,
});
</script>
<style scoped>
.banner-btn-main {
  width: 110px;
  padding-bottom: 8px;
  background: #ed0046;
  border-radius: 50px;
}
.banner-btn-main a {
  color: #fff !important;
  font-size: 10px;
  font-weight: 500;
  padding: 20px;
  text-decoration: none !important;
}
</style>
