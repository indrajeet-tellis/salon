<template>
  <div class="demo-button">
    <a href="#">
      {{ name }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>

<style scoped>
.demo-button {
  background: transparent;
  text-align: center;
  width: 260px;
  border-radius: 1050px;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 2px solid #ed0046;
}
.demo-button a {
  display: inline-block;
  color: #ed0046;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
}
</style>
