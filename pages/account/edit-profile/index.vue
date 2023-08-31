<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Edit profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="margin-bottom: 100px">
    <div class="row">
      <div class="col">
        <div class="" style="text-align: center; margin-top: 41px">
          <i class="fa-solid fa-camera camera"></i>
          <img src="/assets/profile-img.png" class="edit-img" />
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
        <div style="margin-top: 150px">
          <DemoButton name="Save" style="margin: 0 auto" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DemoButton from "../../../components/demo-button.vue";
export default {
  components: {
    DemoButton,
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.camera {
  bottom: 16%;
  left: 56%;
  background: #2c3b91;
  color: #fff;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  font-size: 7px;
  padding: 3px;
  z-index: 2;
  position: absolute;
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
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.form-control::placeholder {
  color: rgba(35, 35, 35, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
