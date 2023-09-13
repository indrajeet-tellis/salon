<template>
  <section
    class="demoBG"
    :style="{ backgroundImage: 'url(/assets/demo-bg.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <i
            class="fa-solid fa-xmark icon"
            @click="handleCurrentCross('update')"
          ></i>
          <lottie-animation />
          <div class="text-center" style="margin-top: 19px">
            <h1 class="mb-0 demo-text">Thank You !!!</h1>
            <p class="mb-0 demo-subText">
              You have successfully book your demo request
            </p>
          </div>
          <demo-button
            name="OK"
            class="ok-btn"
            style="margin: 0 auto"
            @click="handleCurrentCalendar"
          />
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
  data() {
    return {
      CurrentCalendar: "send",
      CurrentCross: "send",
    };
  },

  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentCalendar(params) {
      this.currentCalendar = params;
      navigateTo("/requestDemo/demoAppointment-Confirmed");
    },
  },
  setup() {
    // definePageMeta({
    //   navigation: false,
    // });
    let database = ref([
      {
        name: "string",
      },
    ]);
  },
};
</script>
<style scoped>
.icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: #a7a7a7;
}
.demoBG {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 220px 0 236px 0;
  position: relative;
}
.ok-btn {
  position: fixed;
  bottom: 3%;
  left: 16%;
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
