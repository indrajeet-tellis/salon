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
      <div class="scroll-container">
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
        <div class="row">
          <div class="col d-flex justify-content-between">
            <div class="box"></div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-one.png" />
                <p class="itemText mb-0">Google Meet</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-two.png" />
                <p class="itemText mb-0">Zoom</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box"></div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-between">
            <div class="box"></div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-three.png" />
                <p class="itemText mb-0">Desktop</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-four.png" />
                <p class="itemText mb-0">Mobile</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box"></div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-between">
            <div class="box"></div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-five.png" />
                <p class="itemText mb-0">Audio Call</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box">
              <div class="item">
                <img src="/assets/channel-six.png" />
                <p class="itemText mb-0">Video Call</p>
                <i class="fa-solid fa-check item-icon"></i>
              </div>
            </div>
            <div class="box"></div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="d-flex both-btn" style="gap: 70px; margin-top: 90px">
              <demo-button name="Previous" style="margin-left: 30px" />
              <demo-button
                name="Next"
                style="margin-right: 30px"
                @click="handleCurrentSuccess(update)"
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
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
import "../../../style/main.css";

export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
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
      navigateTo("/requestDemo/demo-successfully");
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
.both-btn {
  gap: 25px;
  margin-top: 90px;
  position: fixed;
  bottom: 95px;
  width: 100%;
  left: 0;
}
.demoCommunicationText {
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 0;
}
.demoText {
  font-size: 12px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #002478;
  margin-bottom: 0;
  width: 335px;
  margin: 0 auto;
}
.demoText-bg {
  background: #e8ecfd;
  padding: 11px;
  text-align: center;
  border-radius: 5px;
  margin-top: 17px;
}
.box {
  width: 20%;
  margin-top: 35px;
}
.item {
  width: 95%;
  background: #fff;
  margin: 0 auto;
  padding: 7px 6px;
  text-align: center;
  border: 2px solid transparent;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.35);
  position: relative;
  height: 100px;
}
.item:hover {
  border: 2px solid #2c3b91;
  box-shadow: none;
}
.itemText {
  font-size: 12px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
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
.item:hover .item-icon {
  display: block;
}
</style>
