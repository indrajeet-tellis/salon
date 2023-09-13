<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Accordian from "../components/Accordian.vue";
import { useRoute } from "vue-router";
import Heading from "../components/heading.vue";
import BottomNav from "../components/bottom-nav.vue";
import "../style/main.css";
import BannerButton from "../components/Banner-button.vue";
import SoftwareItem from "../components/SoftwareItem.vue";
import AdvantageCard from "../components/AdvantageCard.vue";
import OnlineReviewCard from "../components/OnlineReviewCard.vue";
import AppointmentBox from "../components/AppointmentBox.vue";
import PackageItem from "../components/PackageItem.vue";
export default {
  data() {
    return {
      currentGone: "send",
      currentFeature: "send",
      CurrentSoftware: "send",
    };
  },
  methods: {
    handleCurrentGone(params) {
      this.currentGone = params;
      navigateTo("/advantage");
    },
    handleCurrentFeature(params) {
      this.currentGone = params;
      navigateTo("/feature");
    },
    handleCurrentSoftware(params) {
      this.currentSoftware = params;
      navigateTo("/service");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Accordian,
    Heading,
    BottomNav,
    BannerButton,
    SoftwareItem,
    AdvantageCard,
    OnlineReviewCard,
    AppointmentBox,
    PackageItem,
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
              <h1 class="b-heading">Hello Marcel,</h1>
              <div class="icon">
                <i class="fa-regular fa-bell"></i>
              </div>
            </div>
            <p class="b-para">Welcome to Salonnz, your salon digital partner</p>
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
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/bnr-bg.png)' }"
              >
                <div class="banner-btn">
                  <BannerButton
                    name="Request Demo"
                    style="margin: 106px auto 0 auto"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/bnr-bg-one.png)' }"
              >
                <div class="banner-btn-one">
                  <BannerButton
                    name="Request Demo"
                    style="margin-top: 112px; margin-left: 20px"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/bnr-bg-two.png)' }"
              >
                <div class="banner-btn">
                  <BannerButton
                    name="Request Demo"
                    style="margin-top: 112px; margin-left: 20px"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="banItem"
                :style="{ backgroundImage: 'url(/assets/bnr-bg-three.png)' }"
              >
                <div class="banner-btn">
                  <BannerButton
                    name="Request Demo"
                    style="margin-top: 117px; margin-left: 207px"
                  />
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
          <div class="main d-flex align-items-center justify-content-between">
            <heading name="What we can do for your salon?" />
            <Button @click="handleCurrentSoftware" />
          </div>
        </div>
      </div>
    </div>
    <div class="botom-scroll-container">
      <SoftwareItem name="Salon Software" />
      <SoftwareItem name="Digital marketing" />
      <SoftwareItem name="Logo & Graphics" />
      <SoftwareItem name="Custom Salon Apps" />
      <SoftwareItem name="Website design" />
      <SoftwareItem name="SEO" />
    </div>
  </section>
  <!-- software end -->

  <!-- advantage start -->
  <section class="advantage pt-5">
    <div class="container bg-ad">
      <div class="row">
        <div class="col">
          <div class="main d-flex justify-content-between">
            <div style="width: 222px">
              <heading name="Advantages of having your own salon app" />
            </div>
            <Button
              @click="handleCurrentGone('update')"
              style="margin-top: -4px"
            />
          </div>
          <div class="pic mt-4">
            <img src="/assets/ad-main.png" alt="advantage" />
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="">
          <swiper
            :slidesPerView="'auto'"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            :pagination="false"
            :modules="modules"
            class="mySwiper"
            :space-between="50"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
          >
            <swiper-slide>
              <AdvantageCard
                tittle=" Increasing a customer loyalty"
                subtittle="People like attention, and your customers are no exception.
                  Continuous interaction with your customers make them feel
                  special, and their trust in you grows."
              />
            </swiper-slide>

            <swiper-slide>
              <AdvantageCard
                tittle=" Attracting and retaining an audience"
                subtittle="  Your customers will start recommending your application to their friends and acquaintances, thereby, attracting new customers. By sending relevant and useful information, you expand your reach."
              />
            </swiper-slide>

            <swiper-slide>
              <AdvantageCard
                tittle="  Optimization and automation of business"
                subtittle=" Besides marketing benefits, the application controls the work of employees, simplifies all daily activities, increases productivity."
              />
            </swiper-slide>

            <swiper-slide>
              <AdvantageCard
                tittle="You get a powerful communication channel with your customer"
                subtittle="Sending push-up notifications, providing information about special offers, discounts and promotions motivate your customers to use your services more often."
              />
            </swiper-slide>

            <swiper-slide>
              <AdvantageCard
                tittle="Brand Awareness"
                subtittle="The development of a business application also contributes to the fact that more and more people get to know about your brand. It works as a kind of advertisement for your services your brand becomes more recognizable and your reputation grows in such a way."
              />
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
            <p class="marketing-para mt-2 mb-0">Push Notifications</p>
          </div>
          <div class="mar-main mt-3 d-flex">
            <div class="ma-one" style="width: 30%; margin-top: -13px">
              <div>
                <img src="/assets/mar-three.png" />
                <p class="marketing-para mb-0 mt-2">Refferal Program</p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-two.png" />
                <p class="marketing-para mb-0 mt-2">Packages</p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-four.png" />
                <p class="marketing-para mb-0 mt-2">Membership</p>
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
                <p class="marketing-para mb-0 mt-2">Reward Points</p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-six.png" />
                <p class="marketing-para mb-0 mt-2">Review</p>
              </div>
              <div style="margin-top: 33px">
                <img src="/assets/mar-seven.png" />
                <p class="marketing-para mb-0 mt-2">Gift Card</p>
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
          <div class="d-flex align-items-center">
            <div class="left d-flex">
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
    <div class="">
      <div class="row">
        <div class="on-main text-center">
          <heading name=" Online Review Management for Social Ratings" />
          <p class="online-subText">
            Increase your new client rate with our automatic ratings and reviews
          </p>
        </div>
        <div class="text-center mt-3">
          <img src="/assets/on-img.png" alt="" />
        </div>
        <div class="main mt-4" style="padding-left: 25px">
          <swiper
            :slidesPerView="'auto'"
            :pagination="false"
            :modules="modules"
            class="mySwiper"
            :space-between="30"
          >
            <swiper-slide>
              <OnlineReviewCard
                heading="Increase Visibility"
                subheading="Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before."
              />
            </swiper-slide>
            <swiper-slide>
              <OnlineReviewCard
                heading="Increase Visibility"
                subheading="Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before."
              />
            </swiper-slide>
            <swiper-slide>
              <OnlineReviewCard
                heading="Increase Visibility"
                subheading="Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before."
              />
            </swiper-slide>
            <swiper-slide>
              <OnlineReviewCard
                heading="Increase Visibility"
                subheading="Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before."
              />
            </swiper-slide>
            <swiper-slide>
              <OnlineReviewCard
                heading="Increase Visibility"
                subheading="Ratings and reviews increase your salon’s online visibility
                  and reputation, ensuring you rank more highly & attract more
                  clients than ever before."
              />
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
          <div class="appointment-heading d-flex justify-content-between">
            <div class="left">
              <heading name="Features of our appointment management solution" />
            </div>
            <div class="right" style="margin-top: -4px">
              <Button @click="handleCurrentFeature('update')" />
            </div>
          </div>
          <div class="text-center position-relative" style="margin-top: 120px">
            <img class="app-img" src="/assets/appo-mainImg.png" alt="app-img" />
            <div>
              <AppointmentBox
                text="Discount"
                class="one"
                style="position: absolute; bottom: 18px; left: 33px"
              />
              <AppointmentBox
                text="Payroll"
                class="two"
                style="position: absolute; bottom: 99px; left: 13px"
              />
              <AppointmentBox
                text="Staff"
                class="three"
                style="position: absolute; bottom: 184px; left: 17px"
              />
              <AppointmentBox
                text="Coupones"
                class="four"
                style="position: absolute; bottom: 244px; left: 84px"
              />
              <AppointmentBox
                text="Appointment"
                class="five"
                style="position: absolute; bottom: 252px; left: 174px"
              />
              <AppointmentBox
                text="Sales"
                class="six"
                style="position: absolute; bottom: 199px; left: 244px"
              />
              <AppointmentBox
                text="Calender"
                class="seven"
                style="position: absolute; bottom: 118px; left: 266px"
              />
              <AppointmentBox
                text="Dashboard"
                class="eight"
                style="position: absolute; bottom: 37px; left: 264px"
              />
            </div>
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
            <p class="package-subheading">
              All-in-one package for your for your meeting all your salon
              digitalization
            </p>
          </div>
          <div class="main mt-3">
            <div style="position: relative">
              <PackageItem
                class="one"
                tittle=" Branded salon app with your own logo"
              />
              <div class="line"></div>
            </div>
            <div style="position: relative">
              <PackageItem
                class="two"
                style="margin-top: 40px"
                tittle=" New awesome looking website or upgrade your existing website"
              />
              <div class="line"></div>
            </div>
            <div style="position: relative">
              <PackageItem
                class="two"
                style="margin-top: 40px"
                tittle=" Online booking option on the website"
              />
              <!-- src="url(assets/pack-two.png)" -->
              <div class="line"></div>
            </div>
            <div style="position: relative">
              <PackageItem
                class="two"
                style="margin-top: 40px"
                tittle=" App promotion in social media with images/video content"
              />
              <div class="line"></div>
            </div>
            <div style="position: relative">
              <PackageItem
                class="two"
                style="margin-top: 40px"
                tittle=" Review and Reputation management"
              />
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
                  <h3 class="subHeading mb-0">Request Demo</h3>
                  <p class="subtext mb-0">
                    Submit and request a demo online on our website.
                  </p>
                </div>
              </div>
            </div>
            <div class="item d-flex align-items-center mt-4">
              <div class="round">2</div>
              <div class="left text-end">
                <div class="headsT">
                  <h3 class="subHeading mb-0">We will contact you</h3>
                  <p class="subtext mb-0">
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
                  <h3 class="subHeading mb-0">
                    Features and functionality Consultation
                  </h3>
                  <p class="subtext mb-0">
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
                  <h3 class="subHeading mb-0">Review the App and Website</h3>
                  <p class="subtext mb-0">
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
                  <h3 class="subHeading mb-0">
                    Publish the app and website live.
                  </h3>
                  <p class="subtext mb-0">
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

  <!-- FAQ’s start -->
  <section
    class="question mt-5"
    :style="{ backgroundImage: 'url(/assets/block.png)' }"
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
    <BottomNav />
  </section>
  <!-- FAQ’s end -->
</template>

<style scoped>
/* marketing start */
.marketing {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.marketing-para {
  color: #ed2d66;
  font-size: 12px;
  font-weight: 700;
}
/* marketing end */

/* banner start */
.b-heading {
  font-size: 22px;
  font-weight: 700;
  color: #2c3b91;
}
.banner .ban-main {
  position: absolute;
  bottom: -32%;
  left: 0%;
}
.banner .banItem {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding-top: 7px;
  width: 335px;
  height: 160px;
  border-radius: 20px;
  margin: 0 auto 38px auto;
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
  padding-bottom: 145px;
}
.b-para {
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 0 !important;
}
/* banner end */

/* software start*/
.software {
  margin-top: 42px;
}
.software .main {
  margin-top: 40px;
}

/* software end */

/* online start */

.online .swiper-slide {
  width: 60% !important;
}

.online {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.online-subText {
  color: #333333;
  font-size: 12px;
  font-weight: 400;
  width: 255px;
  margin: 0 auto;
}

/* online end */

/* advantage start */
.advantage .swiper-slide {
  width: 65%;
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
  width: 65%;
  box-sizing: border-box;
}
.features .left ul li {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #232323;
  margin-left: 8px;
  line-height: 23px;
  width: 195px;
}
.features .left .tik {
  margin-left: -33px;
  margin-right: 7px;
}
.features .right img {
  width: 100%;
}
.features .right {
  width: 35%;
}

/* features end */

/* appointment start */
.appointment {
  padding-top: 20px;
}
.appointment .left {
  width: 291px !important;
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
.package-subheading {
  color: #333333;
  font-size: 12px;
  font-weight: 400;
  width: 284px;
  margin: 0 auto;
}

.package .main .line {
  position: absolute;
  bottom: -18px;
  left: 3px;
  width: 96%;
  border: 0.5px dashed #737373;
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
.works .main .subHeading {
  width: 154px;
  color: #ed0046;
  font-size: 12px;
  font-weight: 700;
}
.works .main .subtext {
  width: 153px;
  font-size: 11px;
  font-weight: 400;
  color: #333333;
  margin-top: 9px;
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
