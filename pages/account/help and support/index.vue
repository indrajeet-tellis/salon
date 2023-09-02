<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Help & Support" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 100px">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center" style="margin-top: 20px">
            <img src="../../../public/assets/support-img.png" />
          </div>
          <div style="margin-top: 27px">
            <h3 class="contact-text">Contact Us</h3>
            <div class="contact-card">
              <ul>
                <li>
                  <i class="fa-solid fa-phone-volume icon"></i> +21-789456123
                </li>
                <li>
                  <i class="fa-solid fa-envelope icon"></i>salonnz12@info.com
                </li>
                <li>
                  <i class="fa-solid fa-location-dot icon"></i>Salonnz, 29
                  Houston RD, TX 52014
                </li>
                <li><i class="fa-solid fa-globe icon"></i>www.salonnz.com</li>
              </ul>
            </div>
            <h2 class="needHelp-text">Need Help ?</h2>
            <div class="need-item">
              <h3 class="needHelp-subtext">
                How many apps are included in my subscription?
              </h3>
              <p class="needHelp-tittle">
                Only one app is included in the subscription. We strive towards
                a pricing model that is is both simple and fair.
              </p>
            </div>
            <div class="need-item">
              <h3 class="needHelp-subtext">
                How manWhat happens if I don’t upgrade after my trial?y apps are
                included in my subscription?
              </h3>
              <p class="needHelp-tittle">
                Nothing. All your data will wait for you until you make the
                decision to subscribe or publish your app to the stores.
              </p>
            </div>
            <div class="need-item">
              <h3 class="needHelp-subtext">
                Do I need an Apple or Google Play developer account?
              </h3>
              <p class="needHelp-tittle">
                Yes, you are required to have your own Apple Developer account
                ($99/year) and Google Play developer account ($25 one-time
                payment).
              </p>
            </div>
            <h3 class="text">Do you need any help ?</h3>
            <div class="" style="margin-top: 20px">
              <div class="text-box text-center">
                <textarea
                  v-model="message"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
            <demo-button name="Submit" style="margin: 30px auto 0 auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.contact-text {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}
.contact-card {
  width: 285px;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.37);
}
.contact-card ul {
  padding: 12px 17px !important;
}
.contact-card ul li {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
}
.contact-card ul li .icon {
  color: #fff !important;
  width: 25px;
  height: 25px;
  background: linear-gradient(
    0deg,
    rgba(59, 77, 185, 1) 0%,
    rgba(12, 23, 64, 1) 100%
  );
  border-radius: 50%;
  text-align: center;
  align-items: center;
  line-height: 25px;
  margin-right: 20px;
  font-size: 12px;
}
.needHelp-text {
  color: #2c3b91;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 32px;
}
.needHelp-subtext {
  color: #2c3b91;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 319px;
  position: relative;
  margin-left: 15px;
}
.needHelp-subtext::after {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ed0046;
  border-radius: 50%;
  content: "";
  top: 5px;
  left: -14px;
}
.needHelp-tittle {
  color: #333;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 319px;
  margin-left: 15px;
}
.text {
  color: #2c3b91;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 32px;
}
.text-box textarea {
  width: 298px;
  height: 115px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  padding: 8px 6px !important;
}
.text-box textarea::placeholder {
  color: #d9d9d9;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
