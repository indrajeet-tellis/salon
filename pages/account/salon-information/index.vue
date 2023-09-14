<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading class="" name="My Salon" />
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
  <section style="margin-top: 116px">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="salon-info-text">Fill the salon information</h3>
          <div class="image-edit">
            <img src="/assets/salon-info-img.png" class="edit-img" />
            <div class="camera-icon-bg">
              <label>
                <i class="fa-solid fa-camera camera-icon"></i>
                <input type="file" hidden />
              </label>
            </div>
          </div>
          <div class="inputs-box" style="margin-top: 31px">
            <div class="box">
              <label for="exampleFormControlInput1" class="form-label"
                >Salon Name</label
              >
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="ABC"
              />
            </div>
            <div class="box">
              <label for="exampleFormControlInput1" class="form-label"
                >Salon Email</label
              >
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="abc.mail.com"
              />
            </div>
          </div>
          <div class="select" style="margin-top: 20px">
            <!-- <div>Picked: {{ picked }}</div> -->
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">Single Location</label>
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Multi Location</label>
          </div>
          <div style="margin-top: 25px">
            <label for="exampleFormControlInput1" class="form-label"
              >Select number of Location</label
            >
            <div class="select-box">
              <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option placeholder="ABC">ABC</option>
                <option>XYZ</option>
                <option>PQR</option>
              </select>
            </div>
          </div>
          <div style="margin-top: 25px">
            <label for="exampleFormControlInput1" class="form-label"
              >Select number of Staff</label
            >
            <div class="select-box">
              <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>
          </div>
          <div class="web" style="margin-top: 20px">
            <label id="exampleFormControlInput1" class="form-label"
              >Do you have website?</label
            >
            <div class="web-select">
              <input type="radio" id="one" value="One" v-model="picked" />
              <label for="one">Yes</label>
              <input type="radio" id="two" value="Two" v-model="picked" />
              <label for="two">No</label>
            </div>
            <div style="margin-top: 13px">
              <input
                type="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="www.abc.com"
              />
            </div>
          </div>
          <div class="web" style="margin-top: 20px">
            <label id="exampleFormControlInput1" class="form-label"
              >Currently using any software?</label
            >
            <div class="web-select">
              <input type="radio" id="one" value="One" v-model="picked" />
              <label for="one">Yes</label>
              <input type="radio" id="two" value="Two" v-model="picked" />
              <label for="two">No</label>
            </div>
            <div style="margin-top: 25px">
              <label for="exampleFormControlInput1" class="form-label"
                >Choose software</label
              >
            </div>
            <div class="select-box">
              <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option placeholder="ABC">ABC</option>
                <option>XYZ</option>
                <option>PQR</option>
              </select>
            </div>
            <div class="software" style="margin-top: 20px">
              <label for="exampleFormControlInput1" class="form-label"
                >Other</label
              >
              <div class="software-name">
                <input
                  v-model="message"
                  placeholder="Place the name of software you used"
                />
              </div>
            </div>
            <div style="margin-top: 20px">
              <label for="exampleFormControlInput1" class="form-label"
                >Notes</label
              >

              <div class="notes-text">
                <textarea
                  v-model="message"
                  placeholder="Write something about your salon..."
                ></textarea>
              </div>
            </div>
            <div class="" style="margin-top: 26px">
              <demo-button
                name="Save"
                class="save-btn"
                style="margin: 0 auto"
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
import "../../../style/main.css";
export default {
  components: {
    MobileHeading,
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
.image-edit {
  text-align: center;
  margin-top: 20px;
  position: relative;
}
.camera-icon-bg {
  bottom: 16%;
  left: 61%;
  background: #2c3b91;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  padding: 3px;
}
.camera-icon {
  color: #fff;
  font-size: 7px;
  top: 3px;
  left: 5px;
  position: absolute;
}
.edit-img {
  position: relative;
}
.salon-info-text {
  color: #2c3b91;
  text-align: center;

  font-size: 18px;

  font-weight: 500;

  margin-top: 19px;
}
.form-label {
  color: #2c3b91;
  text-align: center;

  font-size: 16px;

  font-weight: 400;
}
.form-control::placeholder {
  color: rgba(35, 35, 35, 0.5);
  font-family: Roboto;
  font-size: 12px;

  font-weight: 400;
}
.box {
  margin-top: 20px;
}
.select label {
  margin-left: 9px;
  margin-right: 15px;
  color: #2c3b91;

  font-size: 16px;

  font-weight: 400;
}
.select-box select {
  border: 1px solid #d9d9d9;
  border-radius: 5px !important;
  width: 309px !important;
}
.select-box select option {
  color: rgba(35, 35, 35, 0.5);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
}
.web-select input {
  margin-right: 7px !important;
}
.web-select label {
  margin-right: 112px !important;
  color: #2c3b91;
  font-family: Roboto;
  font-size: 16px;

  font-weight: 400;
}
.software-name input {
  width: 309px !important;
  border-radius: 5px !important;
  border: 1px solid #d9d9d9 !important;
  padding: 3px 5px !important;
}
.software-name input::placeholder {
  color: rgba(35, 35, 35, 0.5);
  font-family: Roboto;
  font-size: 12px;

  font-weight: 400;
}
.notes-text textarea {
  width: 309px !important;
  border-radius: 5px !important;
  border: 1px solid #d9d9d9 !important;
  height: 118px !important;
  padding: 12px 0 0 4px !important;
}
.notes-text textarea::placeholder {
  color: rgba(35, 35, 35, 0.5);
  font-family: Roboto;
  font-size: 12px;

  font-weight: 400;
}
</style>
