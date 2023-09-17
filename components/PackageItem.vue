<template>
  <div class="package-item">
    <div class="d-flex align-items-center">
      <div class="left">
        <img :src="imgSrc" />
      </div>
      <div class="right">
        <h3 class="">
          {{ tittle }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";

defineProps({
  tittle: String,
  imgSrc: String,
});
</script>
<style scoped>
.package-item h3 {
  color: #333333;
  font-size: 14px;
  font-weight: 500;
}

.left {
  width: 20%;
  padding-top: 1px;
}
.right {
  width: 80%;
}
</style>
