<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Book Demo" />
            <div class="mt-3"><select-box /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="position-relative">
    <div class="container" style="margin-bottom: 100px">
      <h3 class="demo-book-subHeading">Select your salon type</h3>
      <div class="row mt-4">
        <div class="col-6 text-center">
          <div class="item">
            <div class="type-img"><img src="/assets/type-one.png" /></div>
            <h4 class="item-text">Hair</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-three.png" /></div>
            <h4 class="item-text">Barbershop</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-five.png" /></div>
            <h4 class="item-text">Spa</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-seven.png" /></div>
            <h4 class="item-text">Waxing</h4>
          </div>
        </div>
        <div class="col-6 text-center">
          <div class="item">
            <div class="type-img"><img src="/assets/type-two.png" /></div>
            <h4 class="item-text">Beauty</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-four.png" /></div>
            <h4 class="item-text">Nails</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-six.png" /></div>
            <h4 class="item-text">Eyebrow</h4>
          </div>
          <div class="item">
            <div class="type-img"><img src="/assets/type-eight.png" /></div>
            <h4 class="item-text">Massage</h4>
          </div>
        </div>
      </div>
      <demo-button class="mx-auto btn" name="Next" />
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
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
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.demo-book-subHeading {
  color: #2c3b91;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 10px auto;
}
.label-box {
  margin-top: 20px;
}
.item {
  width: 45%;
  background: #fff;
  margin: 0 auto;
  padding: 8px 10px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  margin-top: 20px;
  border-radius: 5px;
  transition: 0.4s;
}
.item:hover {
  background: #2c3b91;
}
.item:hover h4 {
  color: #fff;
}

.type-img img {
  width: 100%;
}
.item-text {
  font-size: 15px;
  font-weight: 500;
  color: #2c3b91;
  margin-top: 9px;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 0 !important;
}
.btn {
  position: fixed;
  bottom: 20%;
  left: 20%;
}
</style>
