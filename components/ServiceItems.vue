<template>
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
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="right">
        <h3 class="website-tittle mb-0">Digital Marketing</h3>
        <p class="website-para mb-0">
          Lift your business to new heights with our digital marketing services.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
      <div class="left">
        <img src="/assets/service-two.png" />
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="left">
        <img src="/assets/service-three.png" />
      </div>
      <div class="right">
        <h3 class="website-tittle mb-0">Salon Software</h3>
        <p class="website-para mb-0">
          Increase customer experience, manage your salon and grow your revenue.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="right">
        <h3 class="website-tittle mb-0">Search Engine Optimization</h3>
        <p class="website-para mb-0">
          It is so important to make your website more visible, and that means
          more traffic and more opportunities to convert prospects into
          customers.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
      <div class="left">
        <img src="/assets/service-four.png" />
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="left">
        <img src="/assets/service-five.png" />
      </div>
      <div class="right">
        <h3 class="website-tittle mb-0">Social Media Management</h3>
        <p class="website-para mb-0">
          Social media is an incredible method to make your salon popular,
          connect with customers, and attract new business.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="right">
        <h3 class="website-tittle mb-0">Logo & Graphics</h3>
        <p class="website-para mb-0">
          We develop the visual identity of your business. Graphic design in
          social media isn't confined to imagery.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
      <div class="left">
        <img src="/assets/service-six.png" />
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="left">
        <img src="/assets/service-seven.png" />
      </div>
      <div class="right">
        <h3 class="website-tittle mb-0">Custom Salon Apps</h3>
        <p class="website-para mb-0">
          We build apps that add value to your business, and boost your
          efficiency.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
    </div>
    <div class="item d-flex align-items-center position-relative mt-4">
      <div class="right">
        <h3 class="website-tittle mb-0">Google Ads</h3>
        <p class="website-para mb-0">
          Proficient Google Ads Management ought to be considered by any
          business that has a venture adequately huge to legitimize employing
          experts for help.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
      <div class="left">
        <img src="/assets/service-eight.png" />
      </div>
    </div>
    <div
      class="item last-line d-flex align-items-center position-relative mt-4"
    >
      <div class="left">
        <img src="/assets/service-nine.png" />
      </div>
      <div class="right">
        <h3 class="website-tittle mb-0">Facebook Ads</h3>
        <p class="website-para mb-0">
          Ads Manager is your starting point for running ads on Facebook,
          Instagram, Messenger or Audience Network.
        </p>
        <div class="read-text" style="color: #ed0046">
          <i class="fa-solid fa-arrow-up-right-from-square read-text-icon"></i
          ><span class="read-text-red">Read More</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";
</script>
<style scoped>
.item-main {
  margin-bottom: 115px;
  margin-top: 30px;
}
.item::after {
  position: absolute;
  bottom: -12%;
  left: 4%;
  content: "";
  border-bottom: 1px dotted #979797;
  widows: 80%;
  width: 86%;
}
.last-line::after {
  display: none;
}
.item .left {
  width: 30%;
  padding-left: 20px;
}
.item .right {
  width: 70%;
  padding-left: 20px;
}
.website-tittle {
  font-size: 18px;
  font-weight: 500;
  color: #2c3b91;
}
.website-para {
  font-size: 12px;
  font-weight: 400;
  color: #232323;
  width: 217px;
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
  margin-left: 5px;
}
</style>
