<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Feedback & Suggestion" />
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 100px">
    <div class="container">
      <div class="row">
        <div class="col">
          <h4 class="feedback-text">
            Do you have any feedback or suggestions?
          </h4>
          <h3 class="important-text">Your feedback is important to us</h3>
          <h4 class="rate-text">Rate your experience</h4>
          <!-- <star-rating /> -->
          <h4 class="app-text">Do you like our app ?</h4>
          <MazRadioButtons
            v-model="selectedOption"
            :options="selecteYourOption"
          />
          <h4 class="txt-area">Would you like to share something with us ?</h4>
          <MazTextarea
            v-model="value"
            name="comment"
            id="comment"
            label="Write your message here..."
          />
          <DemoButton name="Submit" style="margin: 100px auto 0 auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MazTextarea from "maz-ui/components/MazTextarea";
import MobileHeading from "../../../components/mobile-heading.vue";
import "maz-ui/css/main.css";
import DemoButton from "../../../components/demo-button.vue";
import MazRadioButtons from "maz-ui/components/MazRadioButtons";

const value = ref();
components: ({ MobileHeading, DemoButton });

const selectedOption = ref<string>();

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
</script>

<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  margin-top: 70px;
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
</style>
