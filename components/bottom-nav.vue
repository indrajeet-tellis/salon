<template>
  <nav>
    <div class="bottom-nav">
      <div class="links">
        <ul class="mb-0 ps-0 text-center">
          <li class="py-4">
            <NuxtLink to="/"><i class="fa-solid fa-house"></i>Home</NuxtLink>
          </li>
          <li class="py-4">
            <NuxtLink to="/service"
              ><i class="fa-solid fa-users-gear"></i>Services</NuxtLink
            >
          </li>
          <li class="py-4">
            <NuxtLink to="/requestDemo"
              ><i class="fa-regular fa-file-video"></i>Demo</NuxtLink
            >
          </li>
          <li class="py-4">
            <NuxtLink to="/themes"
              ><i class="fa-solid fa-mobile-retro"></i>Themes</NuxtLink
            >
          </li>
          <li class="py-4">
            <NuxtLink to="/account"
              ><i class="fa-solid fa-user"></i>Account</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
const route = useRoute();
console.log(route.params.id);
</script>
<style scoped>
a {
  text-decoration: none !important;
}
.links {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  width: 100%;
  column-gap: 20px;
  z-index: 999;
}
.links ul {
  display: flex;
  justify-content: space-around;
}
.links ul li i {
  font-size: 20px;
}
.links ul li a {
  color: #737373 !important;
  font-size: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 400 !important;
  flex-direction: column;
  display: flex;
  row-gap: 10px;
}
nav .bottom-nav {
  position: absolute;
}
.router-link-active.router-link-exact-active {
  color: #2c3b91 !important;
  position: relative;
}

.links ul li a::after {
  width: 73px;
  height: 4px;
  background: #2c3b91;
  content: "";
  position: absolute;
  left: -55%;
  top: -53%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>
