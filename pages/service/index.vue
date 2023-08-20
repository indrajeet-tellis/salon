<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="heading">
            <h2 class="Feature-head">Services</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="sub-hedaing">
            <h3>Digital salon Kickstarter package</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="bg-img"
          :style="{ backgroundImage: 'url(/assets/Fbanner.png)' }"
        >
          <div class="col">
            <div class="F-main">
              <h4 class="fMain-heading">
                All-in-one package for your meeting all your salon
                digitalization
              </h4>
              <swiper
                :slidesPerView="'auto'"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
                :space-between="20"
              >
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/one.png" />

                    <p class="F-para mb-0">
                      Branded salon app with your own logo
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/two.png" />

                    <p class="F-para mb-0">
                      New awesome looking website or upgrade your existing
                      website
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/three.png" />

                    <p class="F-para mb-0">
                      Online booking option on the website
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/four.png" />

                    <p class="F-para mb-0">
                      App promotion in social media with images / video content
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/five.png" />

                    <p class="F-para mb-0">Review & Reputation management</p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="item-main">
            <div class="item d-flex align-items-center position-relative">
              <div class="left">
                <img src="/assets/service-one.png" />
              </div>
              <div class="right">
                <h3 class="website-tittle mb-0">Website Design</h3>
                <p class="website-para mb-0">
                  We follow a strategic approach to give an elegant look to your
                  website.
                </p>
                <div class="read-text" style="color: #ed0046">
                  <i
                    class="fa-solid fa-arrow-up-right-from-square read-text-icon"
                  ></i
                  ><span class="read-text-red">Read More</span>
                </div>
              </div>
            </div>
            <!-- <div class="item d-flex align-items-center">
              <div class="left">
                <img src="/assets/service-one.png" />
              </div>
              <div class="right">
                <h3 class="website-tittle mb-0">Website Design</h3>
                <p class="website-para mb-0">
                  We follow a strategic approach to give an elegant look to your
                  website.
                </p>
                <div class="read-text" style="color: #ed0046">
                  <i
                    class="fa-solid fa-arrow-up-right-from-square read-text-icon"
                  ></i
                  ><span class="read-text-red">Read More</span>
                </div>
              </div>
            </div>
            <div class="item d-flex align-items-center">
              <div class="left">
                <img src="/assets/service-one.png" />
              </div>
              <div class="right">
                <h3 class="website-tittle mb-0">Website Design</h3>
                <p class="website-para mb-0">
                  We follow a strategic approach to give an elegant look to your
                  website.
                </p>
                <div class="read-text" style="color: #ed0046">
                  <i
                    class="fa-solid fa-arrow-up-right-from-square read-text-icon"
                  ></i
                  ><span class="read-text-red">Read More</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRoute } from "vue-router";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
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
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.heading {
  padding: 20px;
}
.Feature-head {
  font-size: 20px !important;
  font-weight: 700 !important;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  text-align: center;
}
.fMain-heading {
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  color: #333333;
  text-align: center;
  width: 273px;
  margin: 0 auto !important;
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
  padding-top: 20px;
  /* padding-bottom: 40px; */
}
.box {
  border-radius: 10px;
  margin-bottom: 38px;
  background: #fff;
  height: 160px;
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
}
.F-header {
  color: #2c3b91;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
}
.F-para {
  color: #333333;
  font-size: 11px !important;
  font-weight: 400 !important;
  font-family: "Roboto", sans-serif;
  width: 107px;
  margin: 6px auto;
}
.swiper-slide {
  width: 35% !important;
}
.swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid #ed0046;
}
.swiper-pagination-bullet-active {
  background: #ed0046 !important;
  width: 13px;
  border-radius: 100px;
}
.item-main {
  margin-bottom: 200px;
  margin-top: 30px;
}
.item::after {
  position: absolute;
  bottom: -12%;
  left: 8%;
  content: "";
  border-bottom: 1px dotted red;
  widows: 80%;
  width: 86%;
}
.item .left {
  width: 30%;
  text-align: center;
}
.item .right {
  width: 70%;
  padding-left: 5%;
}
.website-tittle {
  font-size: 18px;
  font-weight: 500;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
}
.website-para {
  font-size: 12px;
  font-weight: 400;
  color: #232323;
  font-family: "Roboto", sans-serif;
  width: 212px;
  margin-top: 7px;
}
.read-text-icon {
  display: inline-block;
  font-size: 6px;
}
.read-text-red {
  display: inline-block;
  font-size: 8px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin-left: 5px;
}
</style>
