<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Blogs" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 200px">
    <div class="container">
      <div class="row">
        <div class="col">
          <blog-card />
          <blog-card />
          <blog-card />
          <blog-card />
          <blog-card />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import BlogCard from "../../../components/blog-card.vue";
export default {
  components: {
    MobileHeading,
    BlogCard,
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
