<template>
  <section
    class="demoBG"
    :style="{ backgroundImage: 'url(/assets/demo-bg.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div style="margin-top: 40px; text-align: center">
            <img src="/assets/calendar-check.png" />
          </div>
          <div class="text-center">
            <h1 class="mb-0 header-text">Already Booked An Appointment</h1>
            <p class="mb-0 confirm-text">
              You already booked your demo request appointment you can see your
              appointment details below
            </p>
            <h2 class="mb-0 subheader-text">
              Tuesday, 13 Oct 2022 at 11:30 AM
            </h2>
            <h3 class="mb-0 reminder-text">Prefered communication channel</h3>
          </div>
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
          <div class="both-btn">
            <demo-button name="Reschedule Appointment" class="mx-auto" />
            <demo-border-button
              name="Cancel Appointment"
              class="mx-auto mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DemoButton from "../../../components/demo-button.vue";
import DemoBorderButton from "../../../components/demo-border-button.vue";

export default {
  components: {
    DemoButton,
    DemoBorderButton,
  },

  setup() {
    let database = ref([
      {
        name: "string",
        name: "string",
      },
    ]);
  },
};
</script>
<style scoped>
.demoBG {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 97px;
  position: relative;
  height: auto;
  padding: 0 0 203px 0;
}
.header-text {
  font-size: 30px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 324px;
  margin: 18px auto 0 auto;
}
.subheader-text {
  font-size: 20px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  margin: 52px auto 0 auto;
  width: 309px;
}
.confirm-text {
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 321px;
  margin: 26px auto 0 auto;
  line-height: 26px;
}
.reminder-text {
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 367px;
  margin: 15px auto 0 auto;
}
.both-btn {
  position: fixed;
  bottom: 30%;
  left: 21%;
}
.item {
  width: 28%;
  height: 100px;
  text-align: center;
}
.item-p {
  font-size: 14px;
  font-weight: 500;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
}
</style>
