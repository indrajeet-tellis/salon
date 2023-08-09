<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Accordian from "../components/Accordian.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Accordian,
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
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<template>
  <section
    class="banner"
    :style="{ backgroundImage: 'url(/assets/banner.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="main mt-4">
            <div class="head d-flex justify-content-between align-items-center">
              <h1 class="heading fw-bold">Hello Marcel,</h1>
              <div class="icon">
                <i class="fa-regular fa-bell"></i>
              </div>
            </div>
            <p class="para fw-normal">
              Welcome to Salonnz, your salon digital partner
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="">
          <swiper
            :slidesPerView="'auto'"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            :space-between="20"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <div
                  class="subBan-main d-flex position-relative"
                  style="padding-left: 13px; padding-bottom: 20px; text"
                >
                  <div class="left w-75">
                    <h3
                      class="mb-0"
                      style="
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                        margin-top: 24px;
                        width: 206px;
                      "
                    >
                      Elevate Your Online Presence with Stunning and Functional
                      Designs
                    </h3>
                    <div
                      class="subBan-btn"
                      style="
                        width: 110px;
                        padding-bottom: 8px;
                        background: #ed0046;
                        margin-top: 55px;
                        border-radius: 50px;
                      "
                    >
                      <a
                        style="
                          color: #fff !important;
                          font-family: 'Roboto', sans-serif;
                          font-size: 10px;
                          font-weight: 500;
                          padding: 20px;
                        "
                        href="#"
                      >
                        Request Demo
                      </a>
                    </div>
                  </div>
                  <div
                    class="right w-25 position-absolute"
                    style="left: 54%; bottom: 7%"
                  >
                    <img src="/assets/subBan-One.png" />
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <div
                  class="subBan-main d-flex position-relative"
                  style="padding-left: 13px; padding-bottom: 20px; text"
                >
                  <div class="left w-75">
                    <h3
                      class="mb-0"
                      style="
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                        margin-top: 24px;
                        width: 206px;
                      "
                    >
                      Elevate Your Online Presence with Stunning and Functional
                      Designs
                    </h3>
                    <div
                      class="subBan-btn"
                      style="
                        width: 110px;
                        padding-bottom: 8px;
                        background: #ed0046;
                        margin-top: 55px;
                        border-radius: 50px;
                      "
                    >
                      <a
                        style="
                          color: #fff !important;
                          font-family: 'Roboto', sans-serif;
                          font-size: 10px;
                          font-weight: 500;
                          padding: 20px;
                        "
                        href="#"
                      >
                        Request Demo
                      </a>
                    </div>
                  </div>
                  <div
                    class="right w-25 position-absolute"
                    style="left: 54%; bottom: 7%"
                  >
                    <img src="/assets/subBan-One.png" />
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <div
                  class="subBan-main d-flex position-relative"
                  style="padding-left: 13px; padding-bottom: 20px; text"
                >
                  <div class="left w-75">
                    <h3
                      class="mb-0"
                      style="
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                        margin-top: 24px;
                        width: 206px;
                      "
                    >
                      Elevate Your Online Presence with Stunning and Functional
                      Designs
                    </h3>
                    <div
                      class="subBan-btn"
                      style="
                        width: 110px;
                        padding-bottom: 8px;
                        background: #ed0046;
                        margin-top: 55px;
                        border-radius: 50px;
                      "
                    >
                      <a
                        style="
                          color: #fff !important;
                          font-family: 'Roboto', sans-serif;
                          font-size: 10px;
                          font-weight: 500;
                          padding: 20px;
                        "
                        href="#"
                      >
                        Request Demo
                      </a>
                    </div>
                  </div>
                  <div
                    class="right w-25 position-absolute"
                    style="left: 54%; bottom: 7%"
                  >
                    <img src="/assets/subBan-One.png" />
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <div
                  class="subBan-main d-flex position-relative"
                  style="padding-left: 13px; padding-bottom: 20px; text"
                >
                  <div class="left w-75">
                    <h3
                      class="mb-0"
                      style="
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                        margin-top: 24px;
                        width: 206px;
                      "
                    >
                      Elevate Your Online Presence with Stunning and Functional
                      Designs
                    </h3>
                    <div
                      class="subBan-btn"
                      style="
                        width: 110px;
                        padding-bottom: 8px;
                        background: #ed0046;
                        margin-top: 55px;
                        border-radius: 50px;
                      "
                    >
                      <a
                        style="
                          color: #fff !important;
                          font-family: 'Roboto', sans-serif;
                          font-size: 10px;
                          font-weight: 500;
                          padding: 20px;
                        "
                        href="#"
                      >
                        Request Demo
                      </a>
                    </div>
                  </div>
                  <div
                    class="right w-25 position-absolute"
                    style="left: 54%; bottom: 7%"
                  >
                    <img src="/assets/subBan-One.png" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <!-- bannner end -->

  <!-- software start -->
  <section class="software">
    <div class="container">
      <div class="row">
        <div class="col">
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
            <div class="item">
              <div class="round">
                <img src="/assets/s-one.png" />
              </div>
              <p class="para mt-2 fw-normal">Website design</p>
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
    <div class="container bg-ad">
      <div class="row">
        <div class="col">
          <div class="main d-flex justify-content-between align-items-center">
            <h2
              style="
                font-weight: 700;
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                color: #2c3b91;
              "
            >
              Advantages of having your own salon app
            </h2>
            <Button />
          </div>
          <div class="pic mt-4">
            <img src="/assets/ad-main.png" alt="advantage" />
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="">
          <swiper
            :slidesPerView="'auto'"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
            :space-between="20"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide
              ><div class="box mb-4 text-center mt-3 px-2 py-3">
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
                <img src="/assets/ad-two.png" alt="add-two" />
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
                <img src="/assets/ad-three.png" alt="ad-one" />
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
                <img src="/assets/ad-four.png" alt="ad-one" />
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
              <div class="box mb-5 text-center mt-3 px-2 py-3">
                <img src="/assets/ad-five.png" alt="ad-one" />
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
    </div>
  </section>
  <!-- advantage end -->

  <!-- marketing start -->

  <section
    class="marketing pb-3"
    :style="{ backgroundImage: 'url(/assets/mar-banner.png)' }"
  >
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <h2
            class="head fw-bold text-center mt-3 mb-4"
            style="
              color: #2c3b91;
              width: 312px;
              font-size: 14px;
              font-weight: 700;
              font-family: 'Roboto', sans-serif;
              margin: 0 auto;
            "
          >
            Marketing Features For Your Salon App
          </h2>
          <div class="mar-main mt-3 text-center">
            <img src="/assets/maImg.png" alt="mar-img" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- marketing end -->

  <!-- Features start -->
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="head fw-bold text-center mt-3">
            Features For Your Salon Website
          </h2>
          <div class="d-flex">
            <div class="left d-flex align-items-center">
              <ul class="mt-1 mb-0">
                <li class="fw-normal">
                  <img class="tik" src="/assets/Ftik.png" alt="Ftik.png" />Cool
                  & Attractive Minimal Designs
                </li>
                <li class="fw-normal">
                  <img
                    class="tik"
                    src="/assets/Ftik.png"
                    alt="Ftik.png"
                  />Online Booking Options
                </li>
                <li class="fw-normal">
                  <img
                    class="tik"
                    src="/assets/Ftik.png"
                    alt="Ftik.png"
                  />Displays Google & Facebook Reviews
                </li>
                <li class="fw-normal">
                  <img class="tik" src="/assets/Ftik.png" alt="Ftik.png" />SEO
                  Optimized & Mobile Friendly
                </li>
              </ul>
            </div>
            <div class="right">
              <img src="/assets/feature.png" alt="feature.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Features end -->

  <!-- appointment start -->
  <section class="appointment">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="heading d-flex justify-content-between">
            <div class="left">
              <h2 class="header fw-bold">
                Features of our appointment management solution
              </h2>
            </div>
            <div class="right">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="up d-flex justify-content-between">
          <div class="box text-center">
            <img src="/assets/appo-one.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Dashboard</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-two.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Calender</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-three.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Sales</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-four.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Apointment</p>
          </div>
        </div>

        <div class="up d-flex justify-content-between">
          <div class="box text-center">
            <img src="/assets/appo-five.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Coupones</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-six.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Staff</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-seven.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Payroll</p>
          </div>

          <div class="box text-center">
            <img src="/assets/appo-eight.png" alt="appo-one.png" />
            <p class="para mb-0 fw-normal mt-1">Discount</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- appointment end -->

  <!-- package start -->
  <section
    class="package mb-5"
    :style="{ backgroundImage: 'url(/assets/que-bg.png)' }"
  >
    <div class="container pack-bg mt-5">
      <div class="row">
        <div class="col">
          <div class="header">
            <h2 class="head fw-bold">Digital salon Kickstarter package</h2>
            <p class="para fw-normal">
              All-in-one package for your for your meeting all your salon
              digitalization
            </p>
          </div>
          <div class="main mt-3">
            <div class="item">
              <div class="line"></div>
              <div class="d-flex">
                <div class="left pb-1 pe-1 ps-2">
                  <img src="/assets/digi-one.png" alt="digi-one" />
                </div>
                <div class="right">
                  <h3 class="sub-header fw-bold mb-0">
                    Branded salon app with your own logo
                  </h3>
                  <p class="sub-para fw-normal mb-0 mt-1">
                    Lorem Ipsum is simply dummy text of the printing and type
                    esetting industry lorem Ipsum has.
                  </p>
                </div>
              </div>
            </div>
            <div class="item mt-5 d-flex">
              <div class="line"></div>
              <div class="left pb-1 pe-1 ps-2">
                <img src="/assets/digi-two.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3 class="sub-header fw-bold mb-0">
                  New awesome looking website or upgrade your existing website
                </h3>
                <p class="sub-para fw-normal mb-0 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and type
                  esetting industry lorem Ipsum has.
                </p>
              </div>
            </div>
            <div class="item mt-5 d-flex">
              <div class="line"></div>
              <div class="left pb-1 pe-1 ps-2">
                <img src="/assets/digi-four.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3 class="sub-header fw-bold mb-0">
                  Online booking option on the website
                </h3>
                <p class="sub-para fw-normal mb-0 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and type
                  esetting industry lorem Ipsum has.
                </p>
              </div>
            </div>
            <div class="item mt-5 d-flex">
              <div class="line"></div>
              <div class="left pb-1 pe-1 ps-2">
                <img src="/assets/digi-five.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3 class="sub-header fw-bold mb-0">
                  App promotion in social media with images/video content
                </h3>
                <p class="sub-para fw-normal mb-0 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and type
                  esetting industry lorem Ipsum has.
                </p>
              </div>
            </div>
            <div class="item mt-5 d-flex">
              <div class="left pb-1 pe-1 ps-2">
                <img src="/assets/digi-six.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3 class="sub-header fw-bold mb-0">
                  Review and Reputation management
                </h3>
                <p class="sub-para fw-normal mb-0 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and type
                  esetting industry lorem Ipsum has.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- package end -->

  <!-- works start -->
  <section class="works">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="head fw-bold text-center">How it works</h2>
          <div class="main">
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
                <div class="box text-center mt-4">
                  <img src="../public/assets/w-five.png" />
                  <h3 class="sub-header fw-bold mb-0 mt-2">Request Demo</h3>
                  <p class="sub-para fw-normal mb-0 mt-2">
                    Submit and request a demo online on our website.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box text-center mt-4">
                  <img src="../public/assets/w-four.png" />
                  <h3 class="sub-header fw-bold mb-0 mt-2">
                    We will contact you
                  </h3>
                  <p class="sub-para fw-normal mb-0 mt-2">
                    We will contact you on the date and time you requested and
                    show you same demo design and template
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box text-center mt-4">
                  <img src="../public/assets/w-three.png" />
                  <h3 class="sub-header fw-bold mb-0 mt-2">
                    Features and functionality Consultation
                  </h3>
                  <p class="sub-para fw-normal mb-0 mt-2">
                    Once you check our demo design and solutions,you can request
                    design changes and modify and customize features and
                    functionallity according to your requirement.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box text-center mt-4">
                  <img src="../public/assets/w-two.png" />
                  <h3 class="sub-header fw-bold mb-0 mt-2">
                    Review the App and Website
                  </h3>
                  <p class="sub-para fw-normal mb-0 mt-2">
                    Once we review all the content and images for your website
                    and the app for you to review before publishing it live.
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box text-center mt-4">
                  <img src="../public/assets/w-one.png" />
                  <h3 class="sub-header fw-bold mb-0 mt-2">
                    Publish the app and website live.
                  </h3>
                  <p class="sub-para fw-normal mb-0 mt-2">
                    Once you finalize your website and app the webiste will be
                    published the same day. But your salon app will take 3-10
                    days by Apple and google store
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- works end -->

  <!-- question start -->
  <section
    class="question mt-5"
    :style="{ backgroundImage: 'url(/assets/que-bg.png)' }"
  >
    <div class="container que-bg">
      <div class="row">
        <div class="col">
          <h1 class="head fw-bold">Frequently Asked Questions</h1>
        </div>
        <Accordian />
      </div>
    </div>
  </section>
  <!-- question end -->
  <bottom-nav />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}

a {
  text-decoration: none !important;
}

/* marketing start */
.marketing {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* marketing end */
.banner .banItem {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
}

.banner .ba-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.banner .heading {
  font-family: "DM Sans", sans-serif;
  font-size: 22px;
  color: #2c3b91;
}
.banner .icon {
  color: #333333;
  display: inline-block;

  font-size: 20px;
}
.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
  padding-bottom: 50px;
}
.banner .para {
  color: #333333;
  margin-bottom: 20px;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
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
.advantage .swiper-slide {
  width: 65%;
}
.advantage .swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid #ed0046;
}
.advantage .swiper-pagination-bullet-active {
  background: #ed0046 !important;
  width: 13px;
  border-radius: 100px;
}

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

.advantage .pic {
  box-sizing: border-box;
}
.advantage .pic img {
  width: 100%;
}
.advantage .box {
  border: 1px solid #e4e3e3;
  border-radius: 23px;
  height: 234px;
}
.advantage .box .sub-header {
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #ed0046;
  width: 197px;
}
.advantage .box .ad-para {
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  color: #232323;
  width: 162px;
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
  top: 12%;
  left: 36%;
}
.advantage .marketing-part .mar-main .right img {
  width: 115%;
}
/* advantage end */

/* features start */
.features .head {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #1c2d57;
}
.features .left {
  width: 60%;
  box-sizing: border-box;
}
.features .left ul li {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  color: #232323;
  margin-left: 8px;
  line-height: 23px;
}
.features .left .tik {
  margin-left: -33px;
  margin-right: 7px;
}
.features .right img {
  width: 100%;
}
.features .right {
  width: 40%;
}

/* features end */

/* appointment start */
.appointment .heading {
  margin-top: 50px;
}
.appointment .heading .left {
  width: 80%;
}
.appointment .heading .right {
  width: 20%;
  margin-top: -4px;
}
.appointment .heading .left .header {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #1c2d57;
  width: 300px;
}
.appointment .box {
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.42);
  margin-bottom: 12px;
  margin-top: 22px;
  width: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.appointment .box .para {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  color: #102c56;
  font-weight: 400 !important;
}
/* appointment end */

/* package start */
.package {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.package .pack-bg {
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 20px;
  padding-bottom: 70px;
}
.package .header {
  text-align: center;
}
.package .header .head {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #102c56;
  width: 284px;
  margin: 0 auto;
  margin-top: 10px;
}
.package .header .para {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  color: #0c1740;
  width: 230px;
  margin: 0 auto;
  margin-top: 11px;
}
.package .main .item {
  position: relative;
}
.package .main .item .line {
  position: absolute;
  bottom: -23px;
  left: 0;
  width: 100%;
  border: 1px dashed #232323;
}
.package .main .item .left {
  width: 20%;
  padding-top: 1px;
}
.package .main .item .right {
  width: 80%;
}
.package .main .item .right .sub-header {
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: #232323;
}
.package .main .item .right .sub-para {
  font-family: "DM Sans", sans-serif;
  font-size: 8px;
  color: #232323;
}
/* package end */

/* works start */
.works .head {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #1c2d57;
}
.works .swiper-slide {
  width: 63%;
}
.works .main .box .sub-header {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  color: #ed0046;
}
.works .main .box .sub-para {
  font-family: "DM Sans", sans-serif;
  font-size: 9px;
  color: #000000;
  width: 201px;
  margin: 0 auto;
}
.works .swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid #ed0046;
}
.works .swiper-pagination-bullet-active {
  background: #ed0046 !important;
  width: 13px;
  border-radius: 100px;
}
.works .box {
  margin-bottom: 30px !important;
}
/* works end */

/* question start */
.question {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.question .que-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 20px;
  padding-bottom: 100px;
}
.question .head {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #1c2d57;
  text-align: center;
}
/* question end */
</style>
