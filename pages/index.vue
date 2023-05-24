<script setup>
const carouselSlides = ref(["img1.jpg", "img2.jpg", "img3.jpg"]);
const categories = ref([
  {
    img: "bebidas.png",
    title: "Bebidas de Aloe",
  },
  {
    img: "colmena.png",
    title: "Colmena",
  },
  {
    img: "belleza.png",
    title: "Belleza",
  },
  {
    img: "cuidado_personal.png",
    title: "Cuidado Personal",
  },
  {
    img: "cuidado_piel.png",
    title: "Cuidado de la piel",
  },
  {
    img: "nutricion.png",
    title: "Nutrición",
  },
  {
    img: "suplementos.png",
    title: "Suplementos",
  },
]);
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

    <section class="introduction">
      <div class="my-20">
        <h2>Vive una vida plena</h2>
        <p
          class="text-center font-marcellus text-lg uppercase text-dark-green font-medium mb-10"
        >
          Bienvenidos a VidaSana Forever
        </p>
        <p
          class="text-center font-didact text-base text-gray-dark tracking-wide"
        >
          Learts is an online shop of two passionate craftsmen where they sell
          handicrafts and arts’ works in the US.
        </p>
        <p
          class="text-center font-didact text-base text-gray-dark tracking-wide"
        >
          We provide high-end unique vases, wall arts, home accessories, and
          furniture pieces.
        </p>
      </div>
      <div
        class="my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12 justify-center"
      >
        <div
          v-for="(category, index) in categories"
          class="category-card"
          :key="index"
        >
          <nuxt-link to="/">
            <div class="category__image">
              <div class="wrapper">
                <img :src="category.img" :alt="category.title" />
              </div>
            </div>
            <div class="category__title">
              <p>{{ category.title }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <div class="divider"></div>
  </div>
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
.divider {
  @apply h-[1px] bg-slate-400 w-11/12 mx-auto;
}
.category-card {
  @apply w-full max-w-[330px] sm:max-w-full relative mx-auto;

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
        @apply w-full aspect-square object-cover transition-all duration-700 ease-in;
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
    @apply w-10/12 absolute z-10 bottom-[-20px] left-0 right-0 flex justify-center mx-auto;

    p {
      @apply font-marcellus bg-red-100 px-5 py-3 w-full text-center;
    }
  }
}

.introduction {
  @apply my-20;
  h2 {
    @apply text-center font-windsong text-6xl relative w-fit mx-auto py-8;

    &::after {
      @apply absolute right-[-90px] top-[25px] hidden md:block;
      content: url("~/assets/images/leaf.svg");
    }

    &::before {
      @apply absolute left-[-80px] top-[25px] hidden md:block;
      content: url("~/assets/images/leaf-rotated.svg");
    }
  }
}
</style>
