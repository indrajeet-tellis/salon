<template>
  <div class="review-box d-flex justify-content-between align-items-center">
    <div class="left">
      <img :src="imageSource" :alt="altText" />
    </div>
    <div class="right d-flex justify-content-between">
      <div class="text-box">
        <h4>{{ personName }}</h4>
        <p>
          {{ personText }}
        </p>
        <!-- <StarRating /> -->
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";
import StarRating from "../components/star-rating.vue";
defineProps({
  personName: String,
  personText: String,
  imageSource: String,
  altText: String,
});
</script>
<style scoped>
.review-box .left {
  width: 15%;
}
.review-box .right {
  width: 80%;
}
.text-box h4 {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0 !important;
}
.text-box p {
  color: #333;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 257px;
  margin-bottom: 0 !important;
  margin-top: 9px;
}
.rating {
  padding-left: 0px !important;
  font-size: 0.5rem !important;
}
</style>
