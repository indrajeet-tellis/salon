<template>
  <section class="demo-advantage">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="demoAd-main text-center">
            <mobile-heading class="text-center py-5" name="Advantages" />
            <img src="/assets/demoAd-img.png" />
            <h3 class="demoAd-main-heading">
              Complete Salon Digitalization Consultation
            </h3>
            <p class="demoAd-main-para">
              So when you book a request demo. We not only show you how we can
              help you to transform your business digitally but also offer you a
              complete salon consultation for giving us your valuable time.
            </p>
            <demo-button class="mx-auto" name="Book Demo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
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
