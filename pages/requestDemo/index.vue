<template>
  <section class="demo-advantage">
    <div class="container position-relative">
      <div class="row">
        <div class="col">
          <div class="demoAd-main text-center">
            <div
              class="d-flex align-items-center justify-content-between demo-advantage-header"
            >
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="text-center py-5" name="Book Demo" />
              <i
                class="fa-solid fa-xmark"
                @click="handleCurrentCross('update')"
              ></i>
            </div>
            <div class="scroll-container">
              <img src="/assets/demoAd-img.png" />
              <h3 class="demoAd-main-heading">
                Complete Salon Digitalization Consultation
              </h3>
              <p class="demoAd-main-para">
                So when you book a request demo. We not only show you how we can
                help you to transform your business digitally but also offer you
                a complete salon consultation for giving us your valuable time.
              </p>
              <demo-button
                class="mx-auto advantange-btn"
                name="Book Demo"
                @click="handleCurrentBookdemo('update')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../components/mobile-heading.vue";
import DemoButton from "../../components/demo-button.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
  },
  data() {
    return {
      CurrentBookdemo: "send",
      CurrentCross: "send",
    };
  },

  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/");
    },
    handleCurrentBookdemo(params) {
      this.currentBookdemo = params;
      navigateTo("/requestDemo/demo-book");
    },
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
.advantange-btn {
  position: fixed;
  bottom: 98px;
  left: 68px;
}
.demo-advantage-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111;
  width: 100%;
  background: white;
  padding: 0 1rem;
}
.demo-advantage {
  margin-bottom: 103px;
}
.demoAd-main-heading {
  color: #2c3b91;
  font-size: 22px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  width: 351px;
  text-align: center;
  margin: 50px auto 20px auto;
}
.demoAd-main-para {
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  width: 335px;
  text-align: center;
  margin: 0 auto 160px auto;
}
</style>
