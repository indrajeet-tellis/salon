<template>
  <section
    class="banner"
    :style="{ backgroundImage: 'url(/assets/Frame.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main">
            <h1 class="heading">Hello Marcel,</h1>
            <p class="para">Welcome to Salonnz, your salon digital partner</p>
            <div>
              <img src="../assets/Background.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- bannner end -->

  <section class="software">
    <div class="container">
      <div class="main">
        <h2 class="">What we can do for your salon?</h2>
        <div class="button">
          <a>View All</a>
        </div>
      </div>
      <div class="up">
        <div class="item">
          <div class="round">
            <img src="../assets/s-one.png" />
          </div>
          <p>Website design</p>
        </div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </section>

  <div class="">
    <i class="fas fa-heart"></i>
    <i class="fa-regular fa-bell"></i>
    <i class="fa-solid fa-bell"></i>
  </div>
  <div>
    <h1 class="my-text">Hello, Google Fonts!</h1>
  </div>

  <!-- software end -->

  <section
    class="advantage"
    :style="{ backgroundImage: 'url(/assets/group.png)' }"
  >
    <div class="container">
      <div class="main">
        <h2>Advantages of having your own salon app</h2>
        <div class="button">
          <a href="#">View All</a>
        </div>
      </div>
      <div class="ad-img">
        <img src="../assets/ad-phn.png" />
      </div>
    </div>
    <div>
      <h1 class="m-5">HELLO......</h1>
    </div>
  </section>
</template>

<style>
.my-text {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none !important;
}
.banner .heading {
  color: #fff;
}
.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
  padding: 70px 0;
}
.banner .para {
  color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
}
.banner .main {
  padding: 0 30px;
}
/* banner end */
.software .main {
  display: flex;
  column-gap: 50px;
  margin-top: 12px;
}
.software .main h2 {
  font-weight: 500;
  font-size: 18px;
  color: #1c2d57;
  margin-left: 10px;
}
.software .main .button a {
  font-weight: 500;
  font-size: 12px;
  color: #ed0046;
  text-decoration: none !important;
  cursor: pointer;
  margin-left: 30px;
}

.software .up {
  display: flex;
  margin-top: 30px;
}
/* .software .up .item {
  width: 20%;
  border: 1px solid wheat;
  height: 300px;
} */
.software .up .item .round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
}
.software .up .item .round img {
  padding: 10px;
}
.software .up .item p {
  margin-top: 20px;
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
