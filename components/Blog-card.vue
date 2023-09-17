<template>
  <div class="d-flex align-items-center">
    <div class="left">
      <img src="../public/assets/blog-card.png" />
    </div>
    <div class="right" style="margin-left: 16px">
      <p class="sub-text">20 Apr, 2022</p>
      <h3 class="card-text">
        How Long Does It Take To Build A Salon Booking App?
      </h3>
      <div class="d-flex">
        <p class="card-icon me-4"><i class="fa-solid fa-eye"></i>123k</p>
        <p class="card-icon"><i class="fa-solid fa-comments"></i>25</p>
      </div>
    </div>
  </div>
</template>
<script>
import "../style/main.css";
</script>
<style scoped>
.sub-text {
  color: #333;

  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0 !important;
}
.card-text {
  color: #2c3b91;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0 !important;
  margin-top: 7px;
}
.card-icon {
  color: #333;
  text-align: center;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0 !important;
  margin-top: 16px;
}
.card-icon i {
  color: #ed0046;
  margin-right: 5px;
}
</style>
