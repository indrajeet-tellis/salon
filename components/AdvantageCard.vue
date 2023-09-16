<template>
  <div class="box text-center">
    <img :src="imgSrc" />
    <h3 class="">
      {{ tittle }}
    </h3>
    <p class="">
      {{ subtittle }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";

defineProps({
  tittle: String,
  subtittle: String,
  imgSrc: String,
});
</script>
<style scoped>
.box {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  padding: 0.313rem 0.5rem 1rem 0.5rem;
  height: 285px;
  border: 1px solid #e4e3e3;
  border-radius: 23px;
  width: 108%;
}
h3 {
  font-size: 14px;
  color: #ed0046;
  margin: 9px auto 0 auto;
  width: 223px;
}
p {
  font-size: 12px;
  color: #232323;
  width: 212px;
  margin: 20px auto;
}
</style>
