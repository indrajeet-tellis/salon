<template>
  <div class="advantage-main">
    <img :src="imgSrc" />

    <h4 class="">{{ text }}</h4>
    <p class="">
      {{ subText }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  text: String,
  subText: String,
  imgSrc: String,
});
</script>
<style scoped>
h4 {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #2c3b91;
  text-align: center;
  width: 224px;
  margin: 7px auto;
}
p {
  font-size: 11px !important;
  font-weight: 400 !important;
  color: #5a5a5a;
  text-align: center;
  width: 287px;
  margin: 7px auto 0 auto;
}

.advantage-main {
  text-align: center;
  margin-top: 25px;
  position: relative;
}
.advantage-main::after {
  width: 65%;
  border: 1px dashed #979797;
  position: absolute;
  bottom: -11%;
  left: 17%;
  content: "";
}
.advantage-main img {
  margin-top: 15px;
}
</style>
