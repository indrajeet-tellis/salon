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
  width: 22%;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #fff;
  text-align: center;
  border-radius: 12px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
}
p {
  font-size: 10px !important;
  font-weight: 400 !important;

  color: #2c3b91;
  margin-top: 8px;
}
</style>
