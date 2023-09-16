<template>
  <div
    class="advantage-head"
    :style="{ backgroundImage: 'url(/assets/banner.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Feature-head py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Advantage" />
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
  <section>
    <div class="container">
      <div class="scroll-container advantage-scroll-container">
        <div class="row">
          <div class="col">
            <div class="Advantage-main">
              <h3 class="Advantage-header mb-0">
                Advantages of having your own salon app
              </h3>
              <AdvantageItem
                imgSrc="assets/cardImg.png"
                text="Increasing a customer loyalty"
                subText=" People like attention, and your customers are no exception. Continuous
                interaction with your customers make them feel special, and their trust in
                you grows."
              />
              <AdvantageItem
                imgSrc="assets/ad-two.png"
                text="Attracting and retaining an audience"
                subText="Your customers will start recommending your application to their friends and acquaintances, thereby, attracting new customers. By sending relevant and useful information, you expand your reach."
              />
              <AdvantageItem
                imgSrc="assets/cardImg-two.png"
                text="Optimization and automation of business"
                subText="Besides marketing benefits, the application controls the work of employees, simplifies all daily activities, increases productivity."
              />
              <AdvantageItem
                imgSrc="assets/ad-three.png"
                text="You get a powerful communication channel with your customer"
                subText="Sending push-up notifications, providing information about special offers, discounts and promotions motivate your customers to use your services more often."
              />
              <AdvantageItem
                imgSrc="assets/ad-four.png"
                class="last"
                text="Brand Awareness"
                subText="The development of a business application also contributes to the fact that more and more people get to know about your brand. It works as a kind of advertisement for your services your brand becomes more recognizable and your reputation grows in such a way."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MobileHeading from "../../components/mobile-heading.vue";
import "../../style/main.css";
import AdvantageItem from "../../components/AdvantageItem.vue";
export default {
  components: {
    MobileHeading,
    AdvantageItem,
  },
  data() {
    return {
      CurrentCross: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/");
    },
  },
  setup() {
    let database = ref([
      {
        name: "string",
      },
    ]);
    const route = useRoute();
    console.log(route.params.id);
  },
};
</script>

<style scoped>
.advantage-scroll-container {
  margin-top: 0px !important;
  height: 78vh !important;
}
.advantage-head {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* .Advantage-item {
  text-align: center;
  margin-top: 25px;
  position: relative;
} */
/* .Advantage-item::after {
  width: 65%;
  border: 1px dashed #979797;
  position: absolute;
  bottom: -11%;
  left: 17%;
  content: "";
} */
.Advantage-header {
  font-size: 18px !important;
  font-weight: 500 !important;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 215px;
  margin: 10px auto;
}
/* .adItem-heading {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #2c3b91;
  text-align: center;
  width: 215px;
  margin: 7px auto;
}
.adItem-para {
  font-size: 8px !important;
  font-weight: 400 !important;
  color: #5a5a5a;
  text-align: center;
  width: 215px;
  margin: 0 auto;
} */
.one {
  margin-top: 35px;
}
.last::after {
  border: none !important;
}
</style>
