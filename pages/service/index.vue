<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Feature-head py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Services" />
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
    <div class="scroll-container service-scroll-container">
      <div class="row">
        <div class="col">
          <div class="sub-hedaing">
            <h3>Digital salon Kickstarter package</h3>
          </div>
        </div>
      </div>
      <div class="service-main">
        <div
          class="bg-img"
          :style="{ backgroundImage: 'url(/assets/Fbanner.png)' }"
        >
          <div class="service-main-inner">
            <div class="F-main">
              <h4 class="fMain-heading">
                All-in-one package for your meeting all your salon
                digitalization
              </h4>
              <div class="service-slider">
                <swiper
                  :slidesPerView="'auto'"
                  :pagination="{
                    clickable: true,
                  }"
                  :modules="modules"
                  class="mySwiper"
                  :space-between="5"
                >
                  <swiper-slide>
                    <ServiceSliderBox
                      imgSrc="assets/one.png"
                      title=" Branded salon app with your own logo"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <ServiceSliderBox
                      imgSrc="assets/two.png"
                      title="New awesome looking website or upgrade your existing website"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <ServiceSliderBox
                      imgSrc="assets/three.png"
                      title="Online booking option on the website"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <ServiceSliderBox
                      imgSrc="assets/four.png"
                      title="App promotion in social media with images / video content"
                    />
                  </swiper-slide>
                  <swiper-slide>
                    <ServiceSliderBox
                      imgSrc="assets/five.png"
                      title="Review & Reputation management"
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ServiceItems />
        </div>
      </div>
    </div>

    <BottomNav />
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRoute } from "vue-router";
import MobileHeading from "../../components/mobile-heading.vue";
import "../../style/main.css";
import BottomNav from "../../components/bottom-nav.vue";
import ServiceSliderBox from "../../components/ServiceSliderBox.vue";
import ServiceItems from "../../components/ServiceItems.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    MobileHeading,
    BottomNav,
    ServiceSliderBox,
    ServiceItems,
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
    };
  },
};
</script>

<style scoped>
.service-main-inner {
  margin-top: 15px;
}
.bg-img {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.service-scroll-container {
  margin-top: 133px !important;
  height: 72vh !important;
}
.heading {
  padding: 20px;
}

.fMain-heading {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #333333;
  text-align: center;
  width: 273px;
  margin: 0 auto !important;
}
.sub-hedaing {
  font-size: 18px !important;
  font-weight: 700 !important;
  color: #2c3b91;
  text-align: center;
  margin-top: 11px;
}
.F-main {
  padding-top: 20px;
}

.swiper-slide {
  width: 35% !important;
  margin-left: 10px;
}
</style>
