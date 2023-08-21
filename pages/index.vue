<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Accordian from "../components/Accordian.vue";
import { useRoute } from "vue-router";
import Heading from "../components/heading.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Accordian,
    Heading,
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
              <h1
                class="b-heading"
                style="
                  font-size: 22px;
                  font-weight: 700;
                  font-family: 'Roboto', sans-serif;
                  color: #2c3b91;
                "
              >
                Hello Marcel,
              </h1>
              <div class="icon">
                <i class="fa-regular fa-bell"></i>
              </div>
            </div>
            <p
              class="b-para"
              style="
                font-size: 14px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                color: #333333;
              "
            >
              Welcome to Salonnz, your salon digital partner
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="ban-main">
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
                class="banItem banItem2 position-relative overflow-hidden"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <div class="subBan-main subBan-main2" style="">
                  <div
                    class="shape"
                    style="
                      width: 77px;
                      height: 56px;
                      background: red;
                      position: absolute;
                      right: -9%;
                      top: -11%;
                      rotate: 403deg;
                      text-align: center;
                      display: flex;
                    "
                  >
                    <p
                      class="b-offer align-items-end"
                      style="
                        font-family: Roboto, sans-serif;
                        font-size: 8px;
                        font-weight: 400;
                        color: #fff;
                        position: absolute;
                        bottom: -15px;
                        left: 16%;
                        width: 44px;
                        line-height: 9px;
                      "
                    >
                      Limited Offer
                    </p>
                  </div>
                  <h3
                    class="mb-0 mt-3"
                    style="
                      font-family: 'Roboto', sans-serif;
                      font-size: 18px;
                      font-weight: 700;
                      color: #002478;

                      width: 206px;
                      text-align: center;
                      margin: 0 auto;
                    "
                  >
                    Introductory Offer
                  </h3>
                  <p
                    class="b-subPara2 mt-4"
                    style="
                      font-family: 'Roboto', sans-serif;
                      font-size: 10px;
                      font-weight: 400;
                      color: #fff;

                      width: 261px;
                      text-align: center;
                      margin: 0 auto;
                    "
                  >
                    For a limited time we are offering free trial for 120 days
                    for first
                    <span
                      style="
                        color: #2c34c8;
                        text-decoration: underline;
                        font-weight: 700;
                      "
                      >25</span
                    >salons with
                    <span
                      style="
                        color: #2c34c8;
                        text-decoration: underline;
                        font-weight: 700;
                      "
                      >$0 </span
                    >set-up fees
                  </p>
                  <div
                    class="subBan-btn subBan-btn2 mt-4"
                    style="
                      width: 110px;
                      padding-bottom: 8px;
                      background: #ed0046;

                      border-radius: 50px;
                      margin: 0 auto;
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
                      Boost & increase your salon revenue with your own branded
                      Salon App
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
                  ></div>
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
                  style="
                    padding-left: 13px;
                    padding-bottom: 20px;
                    padding-top: 15px;
                  "
                >
                  <div class="left w-75">
                    <h3
                      class="mb-0"
                      style="
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;

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
                    class="right right2 w-25 position-absolute"
                    style="left: 69%; bottom: 7%"
                  >
                    <img src="/assets/subBan-two.png" />
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/sub-ban.png)' }"
              >
                <h2
                  class="b-subHead3 text-center mb-0"
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                    color: #fff;
                  "
                >
                  Digital Salon Kickstarter Package
                </h2>
                <div class="subBan-main subBan-main3 d-flex" style="">
                  <div
                    class="left left2"
                    style="width: 60%; padding-left: 32px; position: relative"
                  >
                    <ul
                      class="mb-0 ps-0"
                      style="
                        font-family: 'DM Sans', sans-serif;
                        font-size: 8px;
                        font-weight: 400;
                        color: #fff;
                        padding-bottom: 18px;
                        font-size: 7px;
                        font-weight: 400;
                        font-family: 'DM Sans', sans-serif;
                      "
                    >
                      <div
                        class="b-tikImg"
                        style="position: absolute; left: 7%; top: 10%"
                      >
                        <img src="/assets/Ftik.png" />
                      </div>
                      <li class="mt-3" style="width: 163px">
                        Branded salon app with your own logo
                      </li>
                      <div
                        class="b-tikImg2"
                        style="position: absolute; left: 7%; top: 29%"
                      >
                        <img src="/assets/Ftik.png" />
                      </div>
                      <li class="mt-3" style="width: 163px">
                        New awesome looking website or upgrade your existing
                        website
                      </li>
                      <div
                        class="b-tikImg3"
                        style="position: absolute; left: 7%; top: 48%"
                      >
                        <img src="/assets/Ftik.png" />
                      </div>
                      <li class="mt-2" style="width: 163px">
                        Online booking option on the website
                      </li>
                      <div
                        class="b-tikImg4"
                        style="position: absolute; left: 7%; top: 61%"
                      >
                        <img src="/assets/Ftik.png" />
                      </div>
                      <li class="mt-2" style="width: 163px">
                        App promotion in social media with images/video content
                      </li>
                      <div
                        class="b-tikImg5"
                        style="position: absolute; left: 7%; top: 80%"
                      >
                        <img src="/assets/Ftik.png" />
                      </div>
                      <li class="mt-2" style="width: 163px">
                        Review and Reputation management
                      </li>
                    </ul>
                  </div>
                  <div
                    class="right right2"
                    style="width: 40%; margin-top: 10px"
                  >
                    <img
                      class=""
                      style="left: 54%; bottom: 7%"
                      src="/assets/subBan-three.png"
                    />
                    <div
                      class="subBan-btn subBan-btn3"
                      style="
                        width: 110px;
                        padding-bottom: 8px;
                        background: #ed0046;
                        margin-top: 17px;
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
          <div
            class="main d-flex align-items-center justify-content-between mt-4"
          >
            <heading name="What we can do for your salon?" />
            <Button />
          </div>
        </div>
      </div>
    </div>
    <div
      class="botom-scroll-container d-flex gap-4"
      style="overflow-x: scroll; margin-top: 30px"
    >
      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-one.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          Salon Software
        </p>
      </div>
      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-two.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          Digital marketing
        </p>
      </div>
      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-three.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          Logo & Graphics
        </p>
      </div>
      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-four.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          Custom Salon Apps
        </p>
      </div>

      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-five.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          Website design
        </p>
      </div>
      <div class="item text-center">
        <div class="round">
          <img src="/assets/sof-six.png" />
        </div>
        <p
          class="para"
          style="
            color: #2c3b91;
            font-size: 10px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            color: #333333;
            width: 88px;
            margin-top: 12px;
          "
        >
          SEO
        </p>
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
            <heading name="Advantages of having your own salon app" />
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
      <div class="row">
        <div class="col">
          <heading
            class="text-center my-4"
            name="Marketing Features For Your Salon App"
          />
          <div class="text-center">
            <img src="/assets/mar-one.png" />
            <p
              class="marketing-para mt-2 mb-0"
              style="
                color: #ed2d66;
                font-size: 10px;
                font-weight: 700;
                font-family: 'Roboto', sans-serif;
              "
            >
              Push Notifications
            </p>
          </div>
          <div class="mar-main mt-3 d-flex">
            <div class="ma-one" style="width: 30%; margin-top: -13px">
              <div>
                <img src="/assets/mar-three.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Refferal Program
                </p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-two.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Packages
                </p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-four.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Membership
                </p>
              </div>
            </div>
            <div class="ma-two" style="width: 40%; text-align: center">
              <img src="/assets/mar-mobile.png" />
            </div>
            <div
              class="ma-three"
              style="width: 30%; text-align: end; margin-top: -13px"
            >
              <div>
                <img src="/assets/mar-five.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Reward Points
                </p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-six.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Review
                </p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-seven.png" />
                <p
                  class="marketing-para mb-0 mt-2"
                  style="
                    color: #ed2d66;
                    font-size: 10px;
                    font-weight: 700;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Gift Card
                </p>
              </div>
            </div>
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
          <heading
            class="text-center my-4"
            name="  Features For Your Salon Website"
          />
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

  <!-- online start -->
  <section
    class="online mt-4 pt-4"
    :style="{ backgroundImage: 'url(/assets/online.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="on-main text-center">
          <heading name=" Online Review Management for Social Ratings" />
          <p
            class=""
            style="
              color: #333333;
              font-size: 10px;
              font-weight: 400;
              font-family: 'Roboto', sans-serif;
              width: 213px;
              margin: 0 auto;
            "
          >
            Increase your new client rate with our automatic ratings and reviews
          </p>
        </div>
        <div class="text-center mt-3">
          <img src="/assets/on-img.png" alt="" />
        </div>
        <div class="main mt-4">
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
              <div
                class="box"
                style="
                  border-radius: 20px;
                  padding: 15px 10px;
                  margin-bottom: 38px;
                "
              >
                <img src="/assets/on-one.png" />
                <h3
                  class="on-header mb-0"
                  style="
                    color: #201f1f;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                    margin-top: 15px;
                  "
                >
                  Increase Visibility
                </h3>
                <p
                  class="on-para mb-0"
                  style="
                    color: #201f1f;
                    font-size: 10px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    width: 172px;
                    margin-top: 18px;
                  "
                >
                  Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="box"
                style="
                  border-radius: 20px;
                  padding: 15px 10px;
                  margin-bottom: 38px;
                "
              >
                <img src="/assets/on-two.png" />
                <h3
                  class="on-header mb-0"
                  style="
                    color: #201f1f;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                    margin-top: 15px;
                  "
                >
                  Send review request automatically
                </h3>
                <p
                  class="on-para mb-0"
                  style="
                    color: #201f1f;
                    font-size: 10px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    width: 172px;
                    margin-top: 18px;
                  "
                >
                  Our automatic review request message clients at key points in
                  their client journey, ensuring a steady stream of reviews that
                  provide valuable insight into your salon’s performance.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="box"
                style="
                  border-radius: 20px;
                  padding: 15px 10px;
                  margin-bottom: 38px;
                "
              >
                <img src="/assets/on-three.png" />
                <h3
                  class="on-header mb-0"
                  style="
                    color: #201f1f;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                    margin-top: 15px;
                  "
                >
                  Boost team morale
                </h3>
                <p
                  class="on-para mb-0"
                  style="
                    color: #201f1f;
                    font-size: 10px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    width: 172px;
                    margin-top: 18px;
                  "
                >
                  Positive review and ratings boost staff morale and motivation.
                  They provide recognition for their hard work and dedication.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="box"
                style="
                  border-radius: 20px;
                  padding: 15px 10px;
                  margin-bottom: 38px;
                "
              >
                <img src="/assets/on-four.png" />
                <h3
                  class="on-header mb-0"
                  style="
                    color: #201f1f;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                    margin-top: 15px;
                  "
                >
                  More accountability
                </h3>
                <p
                  class="on-para mb-0"
                  style="
                    color: #201f1f;
                    font-size: 10px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    width: 172px;
                    margin-top: 18px;
                  "
                >
                  Reviews and ratings provide a means for clients to hold the
                  salon and its team accountable for their performance, which
                  improves service quality.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="box"
                style="
                  border-radius: 20px;
                  padding: 15px 10px;
                  margin-bottom: 38px;
                "
              >
                <img src="/assets/on-five.png" />
                <h3
                  class="on-header mb-0"
                  style="
                    color: #201f1f;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                    margin-top: 15px;
                  "
                >
                  Cost effective
                </h3>
                <p
                  class="on-para mb-0"
                  style="
                    color: #201f1f;
                    font-size: 10px;
                    font-weight: 400;
                    font-family: 'Roboto', sans-serif;
                    width: 172px;
                    margin-top: 18px;
                  "
                >
                  Reviews and ratings are a cost effective way for you to gather
                  feedback and improve your performance, as they do not require
                  significant investments in time or money.
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
  <!-- online end -->

  <!-- appointment start -->
  <section class="appointment">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="appointment-heading d-flex justify-content-between align-items-center"
          >
            <div class="left">
              <heading name="Features of our appointment management solution" />
            </div>
            <div class="right">
              <Button />
            </div>
          </div>
          <div class="text-center position-relative" style="margin-top: 100px">
            <div
              class="round position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 5%;
                left: 16%;
              "
            >
              <img src="/assets/appo-eight.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Discount
              </p>
            </div>
            <div
              class="round round2 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 40%;
                left: 10%;
              "
            >
              <img src="/assets/appo-seven.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Payroll
              </p>
            </div>
            <div
              class="round round3 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 78%;
                left: 11%;
              "
            >
              <img src="/assets/appo-six.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Staff
              </p>
            </div>
            <div
              class="round round4 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 105%;
                left: 25%;
              "
            >
              <img src="/assets/appo-five.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                coupones
              </p>
            </div>
            <div
              class="round round5 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 111%;
                left: 44%;
              "
            >
              <img src="/assets/appo-four.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Appointment
              </p>
            </div>
            <div
              class="round round6 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 92%;
                left: 63%;
              "
            >
              <img src="/assets/appo-three.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Sales
              </p>
            </div>
            <div
              class="round round7 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 55%;
                left: 72%;
              "
            >
              <img src="/assets/appo-two.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Calender
              </p>
            </div>
            <div
              class="round round8 position-absolute"
              style="
                width: 60px;
                height: 60px;
                background: #2c3b91;
                border-radius: 50%;
                padding: 5px;
                bottom: 14%;
                left: 73%;
              "
            >
              <img src="/assets/appo-one.png" style="size: 10%" />
              <p
                class="round-para mb-0"
                style="
                  font-size: 8px;
                  font-weight: 400;
                  font-family: 'Roboto', sans-serif;
                  color: #fff;
                  margin-top: 2px;
                "
              >
                Dashboard
              </p>
            </div>
            <img class="app-img" src="/assets/appo-mainImg.png" alt="app-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- appointment end -->

  <!-- package start -->
  <section
    class="package mb-5"
    :style="{ backgroundImage: 'url(/assets/package-img.png)' }"
  >
    <div class="container pack-bg mt-5">
      <div class="row">
        <div class="col">
          <div class="header">
            <heading name="Digital salon Kickstarter package" />

            <p
              class="para"
              style="
                color: #2c3b91;
                font-size: 10px;
                font-weight: 400;
                font-family: 'Roboto', sans-serif;
                width: 333px;
                margin: 0 auto;
              "
            >
              All-in-one package for your for your meeting all your salon
              digitalization
            </p>
          </div>
          <div class="main mt-3">
            <div class="item">
              <div class="line"></div>
              <div class="d-flex align-items-center">
                <div class="left">
                  <img src="/assets/pack-one.png" alt="digi-one" />
                </div>
                <div class="right">
                  <h3
                    class="sub-header mb-0"
                    style="
                      color: #333333;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    Branded salon app with your own logo
                  </h3>
                </div>
              </div>
            </div>
            <div class="item mt-5 d-flex align-items-center">
              <div class="line"></div>
              <div class="left">
                <img src="/assets/pack-two.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3
                  class="sub-header mb-0"
                  style="
                    color: #333333;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  New awesome looking website or upgrade your existing website
                </h3>
              </div>
            </div>
            <div class="item mt-5 d-flex align-items-center">
              <div class="line"></div>
              <div class="left">
                <img src="/assets/pack-three.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3
                  class="sub-header mb-0"
                  style="
                    color: #333333;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Online booking option on the website
                </h3>
              </div>
            </div>
            <div class="item mt-5 d-flex align-items-center">
              <div class="line"></div>
              <div class="left">
                <img src="/assets/pack-four.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3
                  class="sub-header mb-0"
                  style="
                    color: #333333;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  App promotion in social media with images/video content
                </h3>
              </div>
            </div>
            <div class="item mt-5 d-flex align-items-center">
              <div class="left">
                <img src="/assets/pack-five.png" alt="digi-one" />
              </div>
              <div class="right">
                <h3
                  class="sub-header mb-0"
                  style="
                    color: #333333;
                    font-size: 12px;
                    font-weight: 500;
                    font-family: 'Roboto', sans-serif;
                  "
                >
                  Review and Reputation management
                </h3>
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
          <heading class="text-center" name="How it works" />

          <div class="main mt-4">
            <div class="item d-flex align-items-center mt-2">
              <div class="round">1</div>
              <div class="left text-center">
                <img src="/assets/w-one.png" />
              </div>
              <div class="right">
                <div class="heads">
                  <h3
                    class="w-subHeading mb-0"
                    style="
                      color: #ed0046;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    Request Demo
                  </h3>
                  <p
                    class="w-subPara mb-0"
                    style="
                      font-size: 10px;
                      font-weight: 400;
                      font-family: 'Roboto', sans-serif;
                      color: #000000;
                      margin-top: 9px;
                    "
                  >
                    Submit and request a demo online on our website.
                  </p>
                </div>
              </div>
            </div>
            <div class="item d-flex align-items-center mt-4">
              <div class="round">2</div>
              <div class="left text-end">
                <div class="headsT">
                  <h3
                    class="w-subHeading mb-0"
                    style="
                      color: #ed0046;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    We will contact you
                  </h3>
                  <p
                    class="w-subPara mb-0"
                    style="
                      font-size: 10px;
                      font-weight: 400;
                      font-family: 'Roboto', sans-serif;
                      color: #000000;
                      margin-top: 9px;
                    "
                  >
                    We will contact you on the date and time you requested and
                    show you same demo design and template
                  </p>
                </div>
              </div>
              <div class="right text-center">
                <img src="/assets/w-two.png" />
              </div>
            </div>
            <div class="item d-flex align-items-center mt-4">
              <div class="round">3</div>
              <div class="left text-center">
                <img src="/assets/w-three.png" />
              </div>
              <div class="right">
                <div class="heads">
                  <h3
                    class="w-subHeading mb-0"
                    style="
                      color: #ed0046;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    Features and functionality Consultation
                  </h3>
                  <p
                    class="w-subPara mb-0"
                    style="
                      font-size: 10px;
                      font-weight: 400;
                      font-family: 'Roboto', sans-serif;
                      color: #000000;
                      margin-top: 9px;
                    "
                  >
                    Once you check our demo design and solutions,you can request
                    design changes and modify and customize features and
                    functionallity according to your requirement.
                  </p>
                </div>
              </div>
            </div>
            <div class="item d-flex align-items-center mt-4">
              <div class="round">4</div>
              <div class="left text-end">
                <div class="headsT">
                  <h3
                    class="w-subHeading mb-0"
                    style="
                      color: #ed0046;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    Review the App and Website
                  </h3>
                  <p
                    class="w-subPara mb-0"
                    style="
                      font-size: 10px;
                      font-weight: 400;
                      font-family: 'Roboto', sans-serif;
                      color: #000000;
                      margin-top: 9px;
                    "
                  >
                    Once we review all the content and images for your website
                    and the app for you to review before publishing it live.
                  </p>
                </div>
              </div>
              <div class="right text-center">
                <img src="/assets/w-four.png" />
              </div>
            </div>
            <div class="item d-flex align-items-center mt-4">
              <div class="round">5</div>
              <div class="left text-center">
                <img src="/assets/w-five.png" />
              </div>
              <div class="right">
                <div class="heads">
                  <h3
                    class="w-subHeading mb-0"
                    style="
                      color: #ed0046;
                      font-size: 12px;
                      font-weight: 500;
                      font-family: 'Roboto', sans-serif;
                    "
                  >
                    Publish the app and website live.
                  </h3>
                  <p
                    class="w-subPara mb-0"
                    style="
                      font-size: 10px;
                      font-weight: 400;
                      font-family: 'Roboto', sans-serif;
                      color: #000000;
                      margin-top: 9px;
                    "
                  >
                    Once you finalize your website and app the webiste will be
                    published the same day. But your salon app will take 3-10
                    days by Apple and google store
                  </p>
                </div>
              </div>
            </div>
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
          <div class="q-main d-flex justify-content-between align-items-center">
            <heading name=" FAQ’s" />
            <Button />
          </div>
        </div>
        <Accordian />
      </div>
    </div>
  </section>
  <!-- question end -->
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
.banner .ban-main {
  position: absolute;
  bottom: -23%;
  left: 0%;
  margin-top: 10px;
}
.banner .banItem {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  margin-bottom: 38px;
  padding-top: 7px;
  height: 200px;
  border-radius: 20px;
}
.banner .ba-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.banner .icon {
  color: #333333;
  display: inline-block;

  font-size: 20px;
}
.banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 160px;
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
.software {
  margin-top: 42px;
}

.software .main .button {
  margin-top: 9px;
}
.software .item .round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
}
.software .item .round img {
  padding: 10px;
}
.software .item .round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
}
.software .item .round img {
  padding: 10px;
}
/* software end */

/* online start */

.online .swiper-slide {
  width: 60% !important;
}
.online .box {
  height: 222px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.38);
}
.online {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.online .swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid #ed0046;
}
.online .swiper-pagination-bullet-active {
  background: #ed0046 !important;
  width: 13px;
  border-radius: 100px;
}
/* online end */

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
  width: 100%;
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
  margin: 0 auto;
}
.advantage .box .ad-para {
  font-family: "Roboto", sans-serif;
  font-size: 8px;
  color: #232323;
  width: 162px;
  margin: 6px auto;
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
.appointment {
  padding-top: 20px;
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
  width: 100%;
}
.package .pack-bg {
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 20px;
  padding-bottom: 30px;
}
.package .header {
  text-align: center;
}

.package .main .item {
  position: relative;
}
.package .main .item .line {
  position: absolute;
  bottom: -23px;
  left: 0;
  width: 100%;
  border: 1px dashed #000000;
}
.package .main .item .left {
  width: 20%;
  padding-top: 1px;
}
.package .main .item .right {
  width: 80%;
}

/* package end */

/* works start */
.works {
  position: relative;
}
.works .heads {
  padding-left: 10px;
}
.works .headsT {
  padding-right: 10px;
}
.works .main .item {
  position: relative;
}
.works .main .item .round {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ed0046;
  color: #fff;
  position: absolute;
  top: 44%;
  left: 45%;
  text-align: center;
  line-height: 20px;
  z-index: 2;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
}
.works .main::after {
  height: 93%;
  border: 1px solid #d9d9d9;
  position: absolute;
  left: 48%;
  top: 6%;
  content: "";
}
.works .main .w-subHeading {
  width: 152px;
}
.works .main .w-subPara {
  width: 152px;
}
.works .main .left {
  width: 50%;
}
.works .main .right {
  width: 50%;
}
/* works end */

/* question start */
.question {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
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
