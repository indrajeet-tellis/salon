<template>
  <div class="ani-main">
    <div class="ani-box">
      <client-only>
        <Vue3Lottie
          animationLink="https://lottie.host/0f621e40-0aeb-4eaa-a0e3-72d1d3a7b096/cV7NoRllOz.json"
          :height="200"
          :width="200"
          :loop="false"
        />
      </client-only>
    </div>
  </div>
</template>

<style scoped>
.ani-box {
  margin: 0 auto;
}
</style>
