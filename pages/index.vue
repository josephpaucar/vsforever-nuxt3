<script setup>
const carouselSlides = ref(["img1.jpg", "img2.jpg", "img3.jpg"]);
</script>
<template>
  <div class="container mx-auto px-3">
    <CarouselBase
      :navigation="true"
      :pagination="false"
      :startAutoPlay="true"
      :timeout="8000"
      class="carousel relative"
      v-slot="{ currentSlide }"
    >
      <CarouselSlide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info">
          <div class="full-width">
            <img :src="`/${slide}`" :alt="slide" />
          </div>
          <div class="container absolute top-0 bottom-0 left-0 right-0 z-10">
            <div class="flex h-full w-full justify-center items-center">
              <h1>Hello in Carousel</h1>
            </div>
          </div>
        </div>
      </CarouselSlide>
    </CarouselBase>

    <section>
      <div>
        <h2>Live out your life</h2>
        <p>Welcome to learts Store</p>
        <p>
          Learts is an online shop of two passionate craftsmen where they sell
          handicrafts and arts’ works in the US.
        </p>
        <p>
          We provide high-end unique vases, wall arts, home accessories, and
          furniture pieces.
        </p>
      </div>
      <div class="categories">
        <div class="category-card">
          <nuxt-link to="/">
            <div class="category__image">
              <div class="wrapper">
                <img src="/img1.jpg" alt="category-1" />
              </div>
            </div>
            <div class="category__title">
              <p>Title</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
  <div class="text-5xl font-caveat">Caveat font</div>
  <div class="text-5xl font-didact">Didact Gothic font</div>
  <div class="text-5xl font-marcellus">Marcellus font</div>
</template>
<style lang="scss" scoped>
.full-width {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  max-height: 865px;
  min-height: 585px;

  img {
    @apply w-full h-full max-h-[865px] min-h-[585px] object-cover aspect-video;
  }
}
.category-card {
  @apply h-[270px] w-[270px] relative;

  &:hover img {
    @apply scale-110 transition-all duration-700 ease-in;
  }
  &:hover .category__image .wrapper:after {
    @apply opacity-100 transition-opacity duration-500 ease-in-out;
  }
  .category__image {
    @apply overflow-hidden relative;

    .wrapper {
      img {
        @apply h-[270px] w-[270px] object-cover transition-all duration-700 ease-in;
      }
    }
    .wrapper::after {
      @apply block absolute top-5 left-5 bg-transparent border border-solid border-white transition-opacity duration-500 ease-in-out;
      content: "";
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      opacity: 0;
    }
  }

  .category__title {
    @apply absolute z-10 bottom-[-20px] left-0 right-0 flex justify-center;

    p {
      @apply bg-red-100 px-5 py-3;
    }
  }
}
</style>
