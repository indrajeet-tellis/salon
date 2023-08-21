<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Feature-head py-5">
            <mobile-heading class="text-center" name="Feature" />
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
            <h3>Features of our appointment management solution</h3>
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
              <swiper
                :slidesPerView="'auto'"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
                :space-between="30"
              >
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fOne.png" />
                    <h3 class="F-header mb-0">Online booking</h3>
                    <p class="F-para mb-0">
                      It is a digital appointment book, where your clients can
                      plan, reschedule, or drop arrangements from anywhere and
                      anytime.
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fTwo.png" />
                    <h3 class="F-header mb-0">Slot blockers</h3>
                    <p class="F-para mb-0">
                      Use the Slot blockers and get rid of excessive
                      appointments within a particular period. And, your clients
                      are also able to see which slots are available for them.
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fThree.png" />
                    <h3 class="F-header mb-0">Off hours booking</h3>
                    <p class="F-para mb-0">
                      Now you don't worry when you are offline! Your clients
                      will have more flexibility to book appointments during
                      non-working hours as well.
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fFour.png" />
                    <h3 class="F-header mb-0">Package booking</h3>
                    <p class="F-para mb-0">
                      Engage your customers with exciting salon packages. Using
                      Salonnz, have a facility in creating packages for
                      different services, which will also multiply the sale and
                      revenue in your business.
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fFive.png" />
                    <h3 class="F-header mb-0">Membership booking</h3>
                    <p class="F-para mb-0">
                      On Salonnz, salon owner can arrange membership program for
                      faithful customers through which they can avail discounts
                      for specific services
                    </p>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="box">
                    <img src="/assets/fSix.png" />
                    <h3 class="F-header mb-0">Accept payment</h3>
                    <p class="F-para mb-0">
                      Salonnz comes with an online booking widget connected with
                      Paypal. Salon owners can get payments for your services by
                      simply synchronizing purchases with this widget.
                    </p>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          <div class="m-items d-flex justify-content-between">
            <div class="item">
              <img src="/assets/appo-one.png" />
              <p class="item-para mb-0">Dashboard</p>
            </div>
            <div class="item">
              <img src="/assets/appo-two.png" />
              <p class="item-para mb-0">Calender</p>
            </div>
            <div class="item">
              <img src="/assets/appo-three.png" />
              <p class="item-para mb-0">Sales</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m-items d-flex justify-content-between">
            <div class="item">
              <img src="/assets/appo-four.png" />
              <p class="item-para mb-0">Appointment</p>
            </div>
            <div class="item">
              <img src="/assets/appo-five.png" />
              <p class="item-para mb-0">Coupones</p>
            </div>
            <div class="item">
              <img src="/assets/appo-six.png" />
              <p class="item-para mb-0">Staff</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m-items d-flex justify-content-between">
            <div class="item">
              <img src="/assets/appo-seven.png" />
              <p class="item-para mb-0">Payroll</p>
            </div>
            <div class="item">
              <img src="/assets/appo-eight.png" />
              <p class="item-para mb-0">Discount</p>
            </div>
            <div class="item">
              <img src="/assets/dash-nine.png" />
              <p class="item-para mb-0">Services</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m-items d-flex justify-content-between">
            <div class="item">
              <img src="/assets/dash-ele.png" />
              <p class="item-para mb-0">Expenses</p>
            </div>
            <div class="item">
              <img src="/assets/dash-twe.png" />
              <p class="item-para mb-0">Inventory</p>
            </div>
            <div class="item">
              <img src="/assets/dash-thr.png" />
              <p class="item-para mb-0">File Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m-items d-flex justify-content-between">
            <div class="item">
              <img src="/assets/dash-forth.png" />
              <p class="item-para mb-0">E-commerce</p>
            </div>
            <div class="item">
              <img src="/assets/mar-six.png" />
              <p class="item-para mb-0">Review</p>
            </div>
            <div class="item">
              <img src="/assets/dash-fif.png" />
              <p class="item-para mb-0">Forms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

export default {
  components: {
    Swiper,
    SwiperSlide,
    Heading,
    MobileHeading,
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
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
  padding-top: 40px;
  /* padding-bottom: 40px; */
  margin-bottom: 18px;
}
.box {
  border-radius: 20px;
  padding: 15px 10px;
  margin-bottom: 38px;
  background: #fff;
  height: 230px;
  text-align: center;
}
.F-header {
  color: #2c3b91;
  font-size: 14px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
}
.F-para {
  color: #201f1f;
  font-size: 10px !important;
  font-weight: 400 !important;
  font-family: "Roboto", sans-serif;
  width: 172px;
  margin: 6px auto;
}
.swiper-slide {
  width: 60% !important;
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
.menu-main .D-heading {
  color: #2c3b91;
  font-size: 18px !important;
  font-weight: 500 !important;
  font-family: "Roboto", sans-serif;
  text-align: center;
}
.dashboard {
  margin-top: 20px;
  margin-bottom: 100px;
}
.item {
  width: 22%;
  padding-top: 15px;
  padding-bottom: 15px;
  background: #fff;
  text-align: center;
  border-radius: 12px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.32);
}
.m-items {
  margin-bottom: 20px;
}

.item-para {
  font-size: 10px !important;
  font-weight: 400 !important;
  font-family: "Roboto", sans-serif;
  color: #2c3b91;
  margin-top: 8px;
}
</style>
