<template>
  <section
    class="demoBG"
    :style="{ backgroundImage: 'url(/assets/demo-bg.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <lottie-animation />
          <div class="text-center" style="margin-top: 19px">
            <h1 class="mb-0 demo-text">Thank You !!!</h1>
            <p class="mb-0 demo-subText">
              You have successfully book your demo request
            </p>
          </div>
          <demo-button name="OK" class="ok-btn" style="margin: 0 auto" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DemoButton from "../../../components/demo-button.vue";
import LottieAnimation from "../../../components/lottie-animation.vue";

export default {
  components: {
    DemoButton,
    LottieAnimation,
  },

  setup() {
    let database = ref([
      {
        name: "string",
      },
    ]);
  },
};
</script>
<style scoped>
.demoBG {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 100px;
  padding: 190px 0;
  position: relative;
  height: auto;
}
.ok-btn {
  position: fixed;
  bottom: 23%;
  left: 22%;
}
.demo-text {
  font-size: 40px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
}
.demo-subText {
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 221px;
  margin: 20px auto 0 auto;
  line-height: 20px;
}
</style>
