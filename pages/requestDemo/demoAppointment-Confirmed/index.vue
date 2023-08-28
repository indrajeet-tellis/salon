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
            <h1 class="mb-0 header-text">Appointment Confirmed</h1>
            <h2 class="mb-0 subheader-text">
              Tuesday, 13 Oct 2022 at 11:30 AM
            </h2>
            <p class="mb-0 confirm-text">
              Your demo request appointment is successfully confirmed
            </p>
            <h3 class="mb-0 reminder-text">
              You’r done! We will send you a text reminder before your
              appointment
            </h3>
          </div>
          <div class="both-btn">
            <demo-button name="Add to calendar" class="mx-auto" />
            <demo-border-button name="OK, got it" class="mx-auto mt-3" />
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
  margin: 18px auto 0 auto;
  width: 309px;
}
.confirm-text {
  font-size: 22px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 321px;
  margin: 53px auto 0 auto;
  line-height: 26px;
}
.reminder-text {
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  width: 367px;
  margin: 147px auto 0 auto;
}
.both-btn {
  position: fixed;
  bottom: 30%;
  left: 21%;
}
</style>
