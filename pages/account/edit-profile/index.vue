<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading class="" name="Edit profile" />
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
  <div class="container" style="margin-bottom: 100px">
    <div class="row">
      <div class="col">
        <div
          class=""
          style="text-align: center; margin-top: 135px; position: relative"
        >
          <img src="/assets/profile-img.png" class="edit-img" />
          <div class="camera-icon-bg">
            <label>
              <div class="camera-icon"><i class="fa-solid fa-camera"></i></div>
              <input type="file" hidden />
            </label>
          </div>
        </div>
        <div class="inputs-box" style="margin-top: 20px">
          <div class="box">
            <label for="exampleFormControlInput1" class="form-label"
              >Name</label
            >
            <input
              type="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Marcel Dalima"
            />
          </div>
          <div class="box">
            <label for="exampleFormControlInput1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="limadacell@gmail.com"
            />
          </div>
          <div class="box">
            <label for="exampleFormControlInput1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="+21-35678942"
            />
          </div>
        </div>
        <div class="save-btn">
          <DemoButton name="Save" @click="handleCurrentSave" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DemoButton from "../../../components/demo-button.vue";
import "../../../style/main.css";
export default {
  components: {
    DemoButton,
  },
  data() {
    return {
      CurrentCross: "send",
      CurrentSave: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/account");
    },
    handleCurrentSave(params) {
      this.currentSave = params;
      navigateTo("/account");
    },
  },
};
</script>
<style scoped>
.save-btn {
  position: fixed;
  bottom: 23px;
  left: 32px;
}
.camera-icon-bg {
  bottom: 5px;
  left: 56%;
  background: #2c3b91;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  padding: 2px;
  z-index: 2;
  position: absolute;
}
.camera-icon {
  position: absolute;
}
.camera-icon i {
  font-size: 7px;
  color: #fff;
  display: inline-block;
  position: absolute;
  top: -17px;
  left: -3px;
}
.edit-img {
  position: relative;
}
.box {
  margin-top: 26px;
}
.form-label {
  margin-bottom: 0.5rem;
  color: #2c3b91;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
.form-control:focus {
  border-color: #2c3b91 !important;
  box-shadow: none !important;
}
.form-control::placeholder {
  color: rgba(35, 35, 35, 0.5);
  font-size: 14px;
  font-weight: 400;
}
</style>
