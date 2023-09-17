<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="text-center" name="Book Demo" />
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
  <section style="margin-bottom: 100px">
    <div class="container position-relative">
      <div class="scroll-container chanel-scroll-container">
        <div class="row">
          <div class="col">
            <h2 class="demoCommunicationText">
              Communication channel you preferred
            </h2>
            <div class="demoText-bg">
              <p class="demoText">
                *For a better communication and explanation we recommend you to
                prefer video with laptop/desktop and a proper headset.
              </p>
            </div>
          </div>
        </div>

        <CommunicationChanel
          textOne="Google Meet"
          textTwo="Zoom"
          imgSrcOne="/assets/channel-one.png"
          imgSrcTwo="/assets/channel-two.png"
        />
        <CommunicationChanel
          textOne="Desktop"
          textTwo="Mobile"
          imgSrcOne="/assets/channel-three.png"
          imgSrcTwo="/assets/channel-four.png"
        />
        <CommunicationChanel
          textOne="Audio Call"
          textTwo="Video Call"
          imgSrcOne="/assets/channel-five.png"
          imgSrcTwo="/assets/channel-six.png"
        />
        <div class="d-flex both-btn">
          <demo-button name="Previous" />
          <demo-button
            name="Next"
            style="margin-right: 30px"
            @click="handleCurrentSuccess(update)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
import "../../../style/main.css";
import CommunicationChanel from "../../../components/CommunicationChanel.vue";

export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
    CommunicationChanel,
  },
  data() {
    return {
      CurrentCross: "send",
      CurrentSuccess: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentSuccess(params) {
      this.currentSuccess = params;
      navigateTo("/requestDemo/review-confirm");
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
.chanel-scroll-container {
  height: 75vh !important;
}
.both-btn {
  gap: 25px;
  margin-top: 90px;
  position: fixed;
  bottom: 15px;
  width: 100%;
  left: 14px;
}
.demoCommunicationText {
  font-size: 18px;
  font-weight: 700;
  color: #2c3b91;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 0;
}
.demoText {
  font-size: 12px;
  font-weight: 400;
  color: #002478;
  margin-bottom: 0;
  width: 320px;
  margin: 0 auto;
}
.demoText-bg {
  background: #e8ecfd;
  padding: 7px;
  text-align: center;
  border-radius: 5px;
  margin-top: 17px;
}

.itemText {
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  width: 68px;
  margin-top: 10px;
}
.item-icon {
  display: inline-block;
  color: #fff;
  position: absolute;
  top: -7%;
  right: -9%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #002478;
  font-size: 10px;
  text-align: center;
  padding: 3px;
  display: none;
  transition: 0.4s;
  z-index: 999;
}
</style>
