<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading class="" name="Our Pricing" />
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
  <div class="container" style="margin-top: 130px">
    <div class="row">
      <div class="col">
        <div class="package">
          <div class="package-main">
            <h2 class="package-text mb-0">Digital Salon Package</h2>
            <p class="subpackage-text mb-0">
              Since not every business are the same, we have a unique and custom
              pricing for different salons depending upon several factors that
              are mainly :
            </p>
            <ul style="margin-top: 41px">
              <li>
                <img src="/assets/Ftik.png" style="margin-right: 10px" />Number
                of staffs
              </li>
              <li>
                <img src="/assets/Ftik.png" style="margin-right: 10px" /> Number
                of services
              </li>
              <li>
                <img src="/assets/Ftik.png" style="margin-right: 10px" />Have
                any websites or not
              </li>
              <li>
                <img src="/assets/Ftik.png" style="margin-right: 10px" />Custom
                requirements and features
              </li>
              <li>
                <img src="/assets/Ftik.png" style="margin-right: 10px" />Needs
                digital marketing service or not
              </li>
            </ul>
            <div class="quotes-btn">
              <DemoButton name="Request Quotes" />
            </div>
          </div>
        </div>
        <h3 class="faq-text">FAQ</h3>
        <div class="accMain"><FAQaccordian /></div>
      </div>
    </div>
  </div>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import FAQaccordian from "../../../components/FAQaccordian.vue";
import DemoButton from "../../../components/demo-button.vue";
import "../../../style/main.css";
export default {
  components: {
    MobileHeading,
    FAQaccordian,
    DemoButton,
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
.package {
  padding: 10px;
  position: relative;
}
.package::after {
  width: 94%;
  height: 1px;
  border: 0.5px dashed #737373;
  content: "";
  position: absolute;
  top: 166px;
  left: 10px;
}
.package::before {
  width: 94%;
  height: 1px;
  border: 0.5px dashed #737373;
  content: "";
  position: absolute;
  top: 401px;
  left: 10px;
}
.quotes-btn {
  position: absolute;
  bottom: 33px;
  left: 21px;
}
ul li {
  color: #333;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin-top: 20px;
}

.accMain {
  margin-top: 10px;
  margin-bottom: 90px;
}
.package-main {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    linear-gradient(135deg, #ffb7dc 0%, #85aeff 100%), #ffb9d1;
  padding: 20px 10px 115px 10px;
  border-radius: 20px;
}
.package-text {
  color: #2c3b91;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-align: center;
}
.subpackage-text {
  color: #333;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  width: 255px;
  margin: 11px auto 0 auto;
}
.faq-text {
  color: #2c3b91;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.36px;
  text-align: center;
  margin-bottom: 0 !important;
  margin-top: 20px;
}
</style>
