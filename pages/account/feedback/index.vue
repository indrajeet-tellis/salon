<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Feedback & Suggestion" />
              <i class="fa-solid fa-xmark" @click="handleCurrentCross"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="position-relative">
    <div class="container">
      <div class="scroll-container feedback-scroll-container">
        <div class="row">
          <div class="col">
            <h4 class="feedback-text">
              Do you have any feedback or suggestions?
            </h4>
            <h3 class="important-text">Your feedback is important to us</h3>
            <h4 class="rate-text">Rate your experience</h4>
            <div class="feedback-rating"><StarRating /></div>
            <h4 class="app-text">Do you like our app ?</h4>
            <MazRadioButtons
              v-model="selectedOption"
              :options="selecteYourOption"
            />
            <h4 class="txt-area">
              Would you like to share something with us ?
            </h4>
            <MazTextarea
              v-model="value"
              name="comment"
              id="comment"
              label="Write your message here..."
            />
            <div class="feedback-btn">
              <DemoButton name="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MazTextarea from "maz-ui/components/MazTextarea";
import MobileHeading from "../../../components/mobile-heading.vue";
import "maz-ui/css/main.css";
import DemoButton from "../../../components/demo-button.vue";
import MazRadioButtons from "maz-ui/components/MazRadioButtons";
import StarRating from "../../../components/star-rating.vue";
import "../../../style/main.css";

const value = ref();
components: ({ MobileHeading, DemoButton, StarRating });

const selectedOption = ref();
const selecteYourOption = [
  {
    value: "1",
    label: "Yes",
  },
  {
    value: "2",
    label: "No",
  },
];
const handleCurrentCross = (params) => {
  navigateTo("/account");
};
</script>

<style scoped>
.feedback-scroll-container {
  margin-top: 116px !important;
}
.feedback-text {
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 23px;
}
.important-text {
  color: #2c3b91;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 11px;
}
.rate-text {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 39px;
}
.app-text {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 85px;
}
.txt-area {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 70px;
}
.m-radio-buttons__items .maz-elevation {
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.27) !important;
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.27) !important;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.27) !important;
  background: red !important;
}
/* .feedback-rating .rating > label::before {
  font-size: 2.25em !important;
} */
.rating > label {
  font-size: 2.25em !important;
}
.feedback-btn {
  position: fixed;
  bottom: 40px;
  left: 60px;
}
</style>
