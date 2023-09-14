<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading class="" name="Reviews" />
              <i
                class="fa-solid fa-xmark"
                @click="handleCurrentCross('update')"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="container">
      <div class="review-scroll-container">
        <div class="row">
          <div class="col">
            <h2 class="rating-text">Ratings & Reviews (220)</h2>
            <div class="review-rating"><StarRating /></div>
            <div class="review-msg">
              <input v-model="message" placeholder="Write a review" />
            </div>
            <div style="margin-top: 32px">
              <ReviewList
                personName="Sandra"
                personText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
              />
            </div>
            <div style="margin-top: 32px">
              <ReviewList
                personName="Reah"
                personText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
              />
            </div>
            <div style="margin-top: 32px">
              <ReviewList
                personName="Lucie"
                personText=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import ReviewList from "../../../components/reviewList.vue";
import StarRating from "../../../components/star-rating.vue";
import "../../../style/main.css";
export default {
  components: {
    MobileHeading,
    ReviewList,
    StarRating,
  },
  data() {
    return {
      CurrentCross: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/account");
    },
  },
};
</script>
<style scoped>
.review-scroll-container {
  margin-top: 116px !important;
  height: 70vh !important;
}
.rating-text {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 30px;
}
.review-btn {
  width: 275px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  text-align: center;
  padding: 9px 0;
  margin: 90px auto 0 auto;
}
.review-btn a {
  color: #3e3d3d;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-block;
}
.review-msg {
  text-align: center;
}
.review-msg input {
  width: 275px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background: #fff;
}
/* .rating > label::before {
  font-size: 1.25em !important;
} */

.rating > label::before {
  font-size: 1.25em !important;
}
.rating {
  padding-left: 105px !important;
  font-size: 1rem !important;
}
</style>
