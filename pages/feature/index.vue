<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Feature-head py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Feature" />
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
    <div class="">
      <div class="scroll-container feature-scroll-container">
        <div class="row">
          <div class="col">
            <div class="sub-hedaing">
              <h3>Features of our appointment management solution</h3>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 9px">
          <div
            class="bg-img"
            :style="{ backgroundImage: 'url(/assets/Fbanner.png)' }"
          >
            <div class="col">
              <div class="F-main">
                <swiper
                  :slidesPerView="'auto'"
                  :pagination="false"
                  :modules="modules"
                  class="mySwiper"
                  :space-between="18"
                >
                  <swiper-slide>
                    <FeatureBox
                      text="Online booking"
                      subText=" It is a digital appointment book, where your clients can
                        plan, reschedule, or drop arrangements from anywhere and
                        anytime."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <FeatureBox
                      text="Slot blockers"
                      subText="Use the Slot blockers and get rid of excessive
                        appointments within a particular period. And, your
                        clients are also able to see which slots are available
                        for them."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <FeatureBox
                      text="Off hours booking"
                      subText="Now you don't worry when you are offline! Your clients
                        will have more flexibility to book appointments during
                        non-working hours as well."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <FeatureBox
                      text="Package booking"
                      subText="Engage your customers with exciting salon packages.
                        Using Salonnz, have a facility in creating packages for
                        different services, which will also multiply the sale
                        and revenue in your business."
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <FeatureBox
                      text="Membership booking"
                      subText="On Salonnz, salon owner can arrange membership program
                        for faithful customers through which they can avail
                        discounts for specific services"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <FeatureBox
                      text="Accept payment"
                      subText=" Salonnz comes with an online booking widget connected
                        with Paypal. Salon owners can get payments for your
                        services by simply synchronizing purchases with this
                        widget."
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="menu-main">
                  <h2 class="D-heading mb-0">Dashboard Menu</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <FeatureDashBox
                  text="Dashboard"
                  textTwo="Calender"
                  textThree="Sales"
                />
                <FeatureDashBox
                  text="Appointment"
                  textTwo="Coupones"
                  textThree="Staff"
                />
                <FeatureDashBox
                  text="Payroll"
                  textTwo="Discount"
                  textThree="Services"
                />
                <FeatureDashBox
                  text="Expenses"
                  textTwo="Inventory"
                  textThree="File Manager"
                />
                <FeatureDashBox
                  text="E-commerce"
                  textTwo="Review"
                  textThree="Forms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../../components/heading.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ref } from "vue";
import MobileHeading from "../../components/mobile-heading.vue";
import "../../style/main.css";
import FeatureBox from "../../components/FeatureBox.vue";
import FeatureDashBox from "../../components/FeatureDashBox.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Heading,
    MobileHeading,
    FeatureBox,
    FeatureDashBox,
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
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.feature-scroll-container {
  margin-top: 124px !important;
  height: 82vh !important;
}
.heading {
  padding: 20px;
}

.sub-hedaing {
  font-size: 18px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  text-align: center;
  margin-top: 11px;
}
.F-main {
  padding-top: 21px;
  margin-bottom: 18px;
}

.swiper-slide {
  width: 60% !important;
  margin-left: 15px !important;
}

.swiper-pagination-bullet-active {
  background: #ed0046 !important;
  width: 13px;
  border-radius: 100px;
}
.menu-main .D-heading {
  color: #2c3b91;
  font-size: 18px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
.dashboard {
  margin-top: 20px;
}

/* .item-para {
  font-size: 10px !important;
  font-weight: 400 !important;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  margin-top: 8px;
} */
</style>
