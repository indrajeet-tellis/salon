<template>
  <div class="featureitems d-flex justify-content-between">
    <div class="item">
      <img :src="imgSrcOne" />
      <p class="">{{ text }}</p>
    </div>
    <div class="item">
      <img :src="imgSrcTwo" />
      <p class="">{{ textTwo }}</p>
    </div>
    <div class="item">
      <img :src="imgSrcThree" />
      <p class="">{{ textThree }}</p>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  text: String,
  textTwo: String,
  textThree: String,
  imgSrcOne: String,
  imgSrcTwo: String,
  imgSrcThree: String,
});
</script>
<style scoped>
.featureitems {
  margin-bottom: 20px;
}

.item {
  padding: 10px 2px;
  background: #fff;
  text-align: center;
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
  width: 74px;
  height: 73px;
}
p {
  font-size: 12px !important;
  font-weight: 400 !important;
  color: #2c3b91;
  margin-top: 3px;
}
</style>
