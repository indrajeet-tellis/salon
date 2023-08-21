<template>
  <div
    class="advantage-head"
    :style="{ backgroundImage: 'url(/assets/banner.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Feature-head py-5">
            <mobile-heading class="text-center" name="Advantage" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="Advantage-main">
            <h3 class="Advantage-header mb-0">
              Advantages of having your own salon app
            </h3>
            <div class="Advantage-item">
              <img src="/assets/ad-one.png" />
              <h4 class="adItem-heading">Increasing a customer loyalty</h4>
              <p class="adItem-para">
                People like attention, and your customers are no exception.
                Continuous interaction with your customers make them feel
                special, and their trust in you grows.
              </p>
            </div>
            <div class="Advantage-item one">
              <img src="/assets/ad-two.png" />
              <h4 class="adItem-heading">
                Attracting and retaining an audience
              </h4>
              <p class="adItem-para">
                Your customers will start recommending your application to their
                friends and acquaintances, thereby, attracting new customers. By
                sending relevant and useful information, you expand your reach.
              </p>
            </div>
            <div class="Advantage-item one">
              <img src="/assets/ad-three.png" />
              <h4 class="adItem-heading">
                Optimization and automation of business
              </h4>
              <p class="adItem-para">
                Besides marketing benefits, the application controls the work of
                employees, simplifies all daily activities, increases
                productivity.
              </p>
            </div>
            <div class="Advantage-item one">
              <img src="/assets/ad-four.png" />
              <h4 class="adItem-heading">
                You get a powerful communication channel with your customer
              </h4>
              <p class="adItem-para">
                Sending push-up notifications, providing information about
                special offers, discounts and promotions motivate your customers
                to use your services more often.
              </p>
            </div>
            <div class="Advantage-item one last">
              <img src="/assets/ad-five.png" />
              <h4 class="adItem-heading">Brand Awareness</h4>
              <p class="adItem-para">
                The development of a business application also contributes to
                the fact that more and more people get to know about your brand.
                It works as a kind of advertisement for your services your brand
                becomes more recognizable and your reputation grows in such a
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MobileHeading from "../../components/mobile-heading.vue";
export default {
  components: {
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
  },
};
</script>

<style scoped>
.advantage-head {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.Advantage-main {
  margin-bottom: 120px;
}
.Advantage-item {
  text-align: center;
  margin-top: 25px;
  position: relative;
}
.Advantage-item::after {
  width: 65%;
  border: 1px dashed #979797;
  position: absolute;
  bottom: -11%;
  left: 17%;
  content: "";
}
.Advantage-header {
  font-size: 18px !important;
  font-weight: 500 !important;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 215px;
  margin: 10px auto;
}
.adItem-heading {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: #2c3b91;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  width: 215px;
  margin: 7px auto;
}
.adItem-para {
  font-size: 8px !important;
  font-weight: 400 !important;
  color: #5a5a5a;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 215px;
  margin: 0 auto;
}
.one {
  margin-top: 35px;
}
.last::after {
  border: none !important;
}
</style>
