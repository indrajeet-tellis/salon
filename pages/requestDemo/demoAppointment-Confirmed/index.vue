<template>
  <section
    class="demoBG"
    :style="{ backgroundImage: 'url(/assets/demo-bg.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <i
            class="fa-solid fa-xmark icon"
            @click="handleCurrentCross('update')"
          ></i>
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
            <demo-button
              name="Add to calendar"
              class="mx-auto"
              @click="handleCurrentBooked"
            />
            <demo-border-button
              name="OK, got it"
              class="mx-auto mt-3"
              @click="handleCurrentMain(update)"
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
import "../../../style/main.css";

export default {
  components: {
    DemoButton,
    DemoBorderButton,
  },

  data() {
    return {
      CurrentBooked: "send",
      CurrentCross: "send",
      CurrentMain: "send",
    };
  },

  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentBooked(params) {
      this.currentBooked = params;
      navigateTo("/requestDemo/demoAppointment-booked");
    },
    handleCurrentMain(params) {
      this.currentMain = params;
      navigateTo("/");
    },
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
.icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: #a7a7a7;
}
.demoBG {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0 0 208px 0;
  overflow: hidden !important;
}
.header-text {
  font-size: 30px;
  font-weight: 700;
  color: #2c3b91;
  width: 324px;
  margin: 18px auto 0 auto;
}
.subheader-text {
  font-size: 20px;
  font-weight: 600;
  color: #2c3b91;
  margin: 18px auto 0 auto;
  width: 309px;
}
.confirm-text {
  font-size: 22px;
  font-weight: 400;
  color: #2c3b91;
  width: 321px;
  margin: 53px auto 0 auto;
}
.reminder-text {
  font-size: 18px;
  font-weight: 600;
  color: #2c3b91;
  width: 346px;
  margin: 100px auto 0 auto;
}
.both-btn {
  position: fixed;
  bottom: 3%;
  left: 9%;
}
</style>
