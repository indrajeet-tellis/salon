<template>
  <section
    class="banner"
    :style="{ backgroundImage: 'url(/assets/Frame.png)' }"
  >
    <div class="container">
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

  <section
    class="advantage"
    :style="{ backgroundImage: 'url(/assets/group.png)' }"
  >
    <div class="container">
      <div class="main">
        <h2>Advantages of having your own salon app</h2>
        <Button />
      </div>
      <div class="">
        <img src="/assets/ad-phn.png" alt="Advertisement Phone" />
      </div>
    </div>
    <div>
      <h1 class="m-5">HELLO......</h1>
      <Button />
    </div>
  </section>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none !important;
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

.advantage {
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 990px;
  background-repeat: no-repeat;
  margin-top: 50px;
  padding: 20px 0;
}
.advantage .main {
  display: flex;
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
</style>
