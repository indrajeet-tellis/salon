<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="img-heading">
            <div class="profile-img"><img src="/assets/profile-img.png" /></div>
            <mobile-heading class="text-center" name="Marcel Dalima" />
            <p class="email-text">limadacell@gmail.com</p>
            <div
              class="editProfile-btn d-flex"
              @click="handleCurrentEdit('update')"
            >
              <i class="fa-solid fa-pencil edit-icon me-1"></i>
              <p class="edit-text">Edit Profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-top: 262px">
    <div class="container scroll-container">
      <div class="row">
        <div class="col">
          <div class="box d-flex position-relative">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/salon-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">My Salon</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentMysalon('update')"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/app-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">App Builder</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/pricing-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">Pricing</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentPricing('update')"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/faq-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">FAQ</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentFaqs(update)"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/help-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">Help & Support</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentHelp(update)"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/salon-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">Blogs</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentBlogs(update)"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/feedback-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">Feedback & Suggestion</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentFeedback(update)"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/review-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text">Review our app</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentReviews(update)"
            ></i>
          </div>
          <div class="box d-flex position-relative" style="margin-top: 40px">
            <div class="item d-flex align-items-center">
              <img
                src="/assets/logout-img.png"
                style="width: 12%; height: 60%; margin-right: 15px"
              />
              <p class="profile-text logout">Log out</p>
            </div>
            <i
              class="fa-solid fa-angle-right"
              style="color: #41416e; font-size: 20px"
              @click="handleCurrentLogout(update)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BottomNav />
</template>
<script>
import BottomNav from "../../components/bottom-nav.vue";
import MobileHeading from "../../components/mobile-heading.vue";
import "../../style/main.css";
export default {
  components: {
    MobileHeading,
    BottomNav,
  },
  data() {
    return {
      CurrentEdit: "send",
      CurrentMysalon: "send",
      CurrentPricing: "send",
      CurrentFaqs: "send",
      CurrentHelp: "send",
      CurrentBlogs: "send",
      CurrentFeedback: "send",
      CurrentReviews: "send",
      CurrentLogout: "send",
    };
  },
  methods: {
    handleCurrentEdit(params) {
      this.currentEdit = params;
      navigateTo("/account/edit-profile");
    },
    handleCurrentMysalon(params) {
      this.currentMysalon = params;
      navigateTo("/account/salon-information");
    },
    handleCurrentPricing(params) {
      this.currentPricing = params;
      navigateTo("/account/our-pricing");
    },
    handleCurrentFaqs(params) {
      this.currentFaqs = params;
      navigateTo("/account/FAQ's");
    },
    handleCurrentHelp(params) {
      this.currentHelp = params;
      navigateTo("/account/help%20and%20support");
    },
    handleCurrentBlogs(params) {
      this.currentBlogs = params;
      navigateTo("/account/Blogs");
    },
    handleCurrentFeedback(params) {
      this.currentFeedback = params;
      navigateTo("/account/feedback");
    },
    handleCurrentReviews(params) {
      this.currentReviews = params;
      navigateTo("/account/reviews");
    },
    handleCurrentLogout(params) {
      this.currentLogout = params;
      navigateTo("/");
    },
  },
};
</script>
<style scoped>
.img-heading {
  padding-top: 3rem !important;
  padding-bottom: 1rem !important;
}
.email-text {
  color: #2c3b91;
  font-size: 14px;
  font-weight: 400;
  /* letter-spacing: 0.28px; */
  text-align: center;
}
.profile-img {
  text-align: center;
}
.editProfile-btn {
  width: 90px;
  border: 1px solid rgb(217, 223, 252);
  background: transparent;
  border-radius: 20px;
  padding: 10px 15px;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.34);
  margin: 20px auto 0 auto !important;
}
.edit-icon {
  font-size: 10px;
  color: #737373;
}
.edit-text {
  color: #737373;
  text-align: center;
  font-size: 8px;
  font-weight: 400;
  /* letter-spacing: 0.16px; */
  margin-bottom: 0 !important ;
}
.profile-text {
  color: #2c3b91;
  font-size: 16px;
  font-weight: 400;
  /* letter-spacing: 0.32px; */
  margin-bottom: 0 !important;
  width: 195px;
}
.logout {
  color: #ed0046;
  font-size: 16px;
  font-weight: 400;
  /* letter-spacing: 0.32px; */
  margin-bottom: 0 !important;
  width: 195px;
}
.box {
  justify-content: space-between;
  align-items: center !important;
  margin-top: 20px;
}
.box::after {
  position: absolute;
  content: "";
  bottom: -80%;
  left: 0%;
  width: 100%;
  height: 1px;
  background: #e8eaf1;
}
</style>
