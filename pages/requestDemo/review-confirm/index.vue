<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Review & Confirm" />
              <i
                class="fa-solid fa-xmark"
                @click="handleCurrentCross('update')"
              ></i>
            </div>
            <div class="mt-3"><select-box /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <div style="margin-top: 190px">
          <div class="details-box">
            <div class="d-flex justify-content-between">
              <h4 class="name">Salon Name :</h4>
              <span style="font-weight: 400; color: #333">ABC Salon</span>
            </div>
            <div
              class="d-flex justify-content-between"
              style="margin-top: 30px"
            >
              <h4 class="name">Number of location :</h4>
              <span style="font-weight: 400; color: #333">3</span>
            </div>
            <div
              class="d-flex justify-content-between"
              style="margin-top: 30px"
            >
              <h4 class="name">Number of staff :</h4>
              <span style="font-weight: 400; color: #333">10</span>
            </div>
            <div
              class="d-flex justify-content-between"
              style="margin-top: 30px"
            >
              <h4 class="name">Website :</h4>
              <span style="font-weight: 400; color: #333"
                >www.abcsalon.com</span
              >
            </div>
            <div
              class="d-flex justify-content-between"
              style="margin-top: 30px"
            >
              <h4 class="name">Currently using software :</h4>
              <span style="font-weight: 400; color: #333">No</span>
            </div>
          </div>
          <div class="channel-box">
            <h2 class="mb-0 subheader-text">
              Tuesday, 13 Oct 2022 at 11:30 AM
            </h2>
            <h3 class="mb-0 reminder-text">Prefered communication channel</h3>
            <div class="d-flex justify-content-between mt-3">
              <div class="item">
                <img src="/assets/channel-one.png" />
                <p class="item-p">Google Meet</p>
              </div>
              <div class="item">
                <img src="/assets/channel-three.png" />
                <p class="item-p">Desktop</p>
              </div>
              <div class="item">
                <img src="/assets/channel-five.png" />
                <p class="item-p">Audio call</p>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex both-btn">
          <demo-button name="Previous" />
          <demo-button
            name="Submit"
            style="margin-right: 30px"
            @click="handleCurrentSubmit(update)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../style/main.css";
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
  },

  data() {
    return {
      CurrentCross: "send",
      CurrentSubmit: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentSubmit(params) {
      this.currentSubmit = params;
      navigateTo("/requestDemo/demo-successfully");
    },
  },
};
</script>
<style scoped>
.both-btn {
  gap: 25px;
  margin-top: 90px;
  position: fixed;
  bottom: 15px;
  width: 100%;
  left: 14px;
}
.subheader-text {
  font-size: 19px;
  font-weight: 600;
  color: #ed0046;
  margin: 0 auto;
  width: 294px;
}
.reminder-text {
  font-size: 16px;
  font-weight: 500;
  color: #2c3b91;
  width: 306px;
  margin: 15px auto 0 auto;
  margin-bottom: 0px;
  text-align: center;
}
.item {
  width: 28%;
  text-align: center;
}
.item-p {
  font-size: 14px;
  font-weight: 500;
  color: #2c3b91;
}
.details-box {
  border-radius: 20px;
  border: 0.5px solid #d9d9d9;
  padding: 20px;
}
.channel-box {
  border-radius: 20px;
  border: 0.5px solid #d9d9d9;
  padding: 20px;
  margin-top: 25px;
}
.details-box .name {
  color: #2c3b91;
  font-size: 14px;
  font-weight: 700;
}
</style>
