<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<template>
  <section class="banner">
    <div
      class="container ba-bg"
      :style="{ backgroundImage: 'url(/assets/Frame.png)' }"
    >
      <div class="row">
        <div class="col-sm">
          <div class="main mt-4">
            <h1 class="heading fw-bold">Hello Marcel,</h1>
            <div class="icon"><i class="fa-regular fa-bell"></i></div>
            <p class="para fw-normal">
              Welcome to Salonnz, your salon digital partner
            </p>
            <div class="pic col-sm:m-auto">
              <img class="pb-5" src="/assets/Background.png" alt="Background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- bannner end -->

  <!-- software start -->
  <section class="software">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="main">
            <div class="heading mt-3">
              <h2 class="fw-bold">What we can do for your salon?</h2>
            </div>
            <Button />
          </div>
          <div class="up">
            <div class="item">
              <div class="round">
                <img src="/assets/s-one.png" />
              </div>
              <p class="para mt-2 fw-normal">Website design</p>
            </div>
            <div class="item">
              <div class="round">
                <img src="/assets/s-two.png" />
              </div>
              <p class="para mt-2 fw-normal">Digital marketing</p>
            </div>
            <div class="item">
              <div class="round">
                <img src="/assets/s-three.png" />
              </div>
              <p class="para mt-2 fw-normal">Logo & Graphics</p>
            </div>
          </div>
          <div class="down">
            <div class="item">
              <div class="round">
                <img src="/assets/s-four.png" />
              </div>
              <p class="para mt-2 fw-normal">Custom Salon Apps</p>
            </div>
            <div class="item">
              <div class="round">
                <img src="/assets/s-five.png" />
              </div>
              <p class="para mt-2 fw-normal">Salon Software</p>
            </div>
            <div class="item">
              <div class="round">
                <img src="/assets/s-six.png" />
              </div>
              <p class="para paraTwo mt-2 fw-normal">SEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- software end -->

  <!-- advantage start -->
  <section class="advantage pt-5">
    <div
      class="container bg-ad"
      :style="{ backgroundImage: 'url(/assets/group.png)' }"
    >
      <div class="row">
        <div class="col-sm">
          <div class="main">
            <h2>Advantages of having your own salon app</h2>
            <Button />
          </div>
          <div class="pic mt-4">
            <img src="/assets/ad-phn.png" alt="Advertisement Phone" />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm">
          <swiper
            :freeMode="true"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
            }"
            :modules="modules"
            class="mySwiper"
            :slides-per-view="1"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              ><div class="box text-center mt-3 px-2 py-3">
                <img src="/assets/ad-one.png" alt="ad-one" />
                <h3 class="sub-header fw-bold mt-3">
                  Increasing a customer loyalty
                </h3>
                <p class="ad-para fw-light">
                  People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows.
                </p>
              </div>
            </swiper-slide>

            <swiper-slide
              ><div class="box text-center mt-3 px-2 py-3">
                <img src="/assets/ad-five.png" alt="add-two" />
                <h3 class="sub-header fw-bold mt-3">
                  Attracting and retaining an audience
                </h3>
                <p class="ad-para fw-light">
                  People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows.
                </p>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="box text-center mt-3 px-2 py-3">
                <img src="/assets/add-four.png" alt="ad-one" />
                <h3 class="sub-header fw-bold mt-3">
                  Optimization and automation of business
                </h3>
                <p class="ad-para fw-light">
                  People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows.
                </p>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="box text-center mt-3 px-2 py-3">
                <img src="/assets/add-three.png" alt="ad-one" />
                <h3 class="sub-header fw-bold mt-3">
                  You get a powerful communication channel with your customer
                </h3>
                <p class="ad-para fw-light">
                  People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows.
                </p>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="box text-center mt-3 px-2 py-3">
                <img src="/assets/add-two.png" alt="ad-one" />
                <h3 class="sub-header fw-bold mt-3">Brand Awareness</h3>
                <p class="ad-para fw-light">
                  People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows.
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm">
          <div class="marketing-part">
            <h2 class="head fw-bold">Marketing features of our app</h2>
            <div class="mar-main mt-3">
              <div class="left">
                <img src="/assets/ma-phn.png" alt="ma-phn" />
              </div>
              <div class="right">
                <img src="/assets/ad-right.png" alt="ma-phn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- advantage end -->

  <!-- marketing start -->

  <!-- <section class="marketing">
    <div class="container"></div>
  </section> -->

  <!-- marketing end -->
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 350px !important;
}
a {
  text-decoration: none !important;
}
.banner .ba-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.banner .heading {
  font-family: "DM Sans", sans-serif;
  font-size: 22px;
  color: #fff;
  display: inline-block;
}
.banner .icon {
  color: #fff;
  display: inline-block;
  padding-left: 172px;
  font-size: 20px;
}
.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
}
.banner .para {
  color: #d4dbff;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
}
/* banner end */

/* software start*/
.software .heading h2 {
  font-family: "DM Sans", sans-serif;
  font-size: 17px;
  color: #1c2d57;
}
.software .main {
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
}
.software .main .button {
  margin-top: 9px;
}
.software .up {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}

.software .up .item .round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
}
.software .up .item .round img {
  padding: 10px;
}
.software .up .item .para {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  color: #232323;
}
.software .down {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}

.software .down .item .round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
}
.software .down .item .round img {
  padding: 10px;
}
.software .down .item .para {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  color: #232323;
}

.software .down .item .paraTwo {
  padding-left: 16px;
}
/* software end */

/* advantage start */
.advantage {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.advantage .bg-ad {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 55px;
}
.advantage .main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.advantage .main h2 {
  font-size: 18px;
  font-weight: 500;
  color: #1c2d57;
  width: 257px;
}
.advantage .main .button a {
  font-size: 12px;
  font-weight: 500;
  color: #ed0046;
}
.advantage .pic {
  box-sizing: border-box;
}
.advantage .pic img {
  width: 100%;
}
.advantage .box {
  border: 1px solid #e4e3e3;
  border-radius: 23px;
}
.advantage .box .sub-header {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #ed0046;
}
.advantage .box .ad-para {
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  color: #232323;
  width: 235px;
  margin: 0 auto;
}
.advantage .marketing-part .mar-main {
  display: flex;
  position: relative;
}

.advantage .marketing-part .head {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #1c2d57;
  text-align: center;
}
.advantage .marketing-part .mar-main .left {
  width: 50%;
  box-sizing: border-box;
  padding-left: 15px;
}
.advantage .marketing-part .mar-main .left img {
  width: 100%;
}
.advantage .marketing-part .mar-main .right {
  width: 50%;
  box-sizing: border-box;
  position: absolute;
  top: 35px;
  left: 120px;
}
.advantage .marketing-part .mar-main .right img {
  width: 115%;
}
/* advantage end */

/* marketing start */
/* .main {
  display: flex;
} */
/* marketing end */
</style>
