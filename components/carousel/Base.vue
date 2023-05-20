<script setup>
import { onMounted } from "vue";

const props = defineProps({
  startAutoPlay: {
    type: Boolean,
    required: false,
    default: true,
  },
  timeout: {
    type: Number,
    required: false,
    default: 5000,
  },
  navigation: {
    type: Boolean,
    required: false,
    default: true,
  },
  pagination: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const currentSlide = ref(1);
const getSlideCount = ref(null);
const autoPlayEnabled = ref(props.startAutoPlay);

onMounted(() => {
  getSlideCount.value = document.querySelectorAll(".slide").length;
});

//Next Prev Buttons
const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
    return;
  }
  currentSlide.value += 1;
};

const prevSlide = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = getSlideCount.value;
    return;
  }
  currentSlide.value -= 1;
};

//Pagination
const goToSlide = (index) => {
  currentSlide.value = index + 1;
};

//AutoPlay
const autoPlay = () => {
  setInterval(() => {
    nextSlide();
  }, props.timeout);
};

if (autoPlayEnabled.value) {
  autoPlay();
}
</script>

<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <div v-if="props.navigation" class="toggle-page left">
      <button @click="prevSlide">
        <svg
          role="img"
          aria-describedby="left-arrow-icon-title"
          width="11"
          height="27"
          viewBox="0 0 11 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="left-arrow-icon-title">Left Arrow Icon</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5933 0.312215C10.7028 0.423792 10.7927 0.55993 10.858 0.71285C10.9232 0.865769 10.9624 1.03247 10.9735 1.20343C10.9845 1.37438 10.967 1.54625 10.9221 1.70919C10.8772 1.87213 10.8058 2.02296 10.7118 2.15305L2.54309 13.4834L10.7118 24.8138C10.8112 24.9428 10.8878 25.0942 10.9369 25.2591C10.9861 25.424 11.0069 25.599 10.998 25.7736C10.9892 25.9482 10.9509 26.1189 10.8854 26.2756C10.8199 26.4323 10.7286 26.5717 10.6169 26.6856C10.5052 26.7995 10.3754 26.8855 10.2351 26.9386C10.0949 26.9916 9.94711 27.0106 9.80058 26.9944C9.65405 26.9782 9.51175 26.9271 9.38215 26.8442C9.25255 26.7614 9.1383 26.6483 9.04618 26.5119L0.264159 14.3325C0.0936948 14.096 0 13.7948 0 13.4834C0 13.172 0.0936948 12.8708 0.264159 12.6343L9.04618 0.454889C9.2357 0.192482 9.5051 0.0302436 9.79519 0.00381775C10.0853 -0.0226081 10.3723 0.0889408 10.5933 0.313956V0.312215Z"
          />
        </svg>
      </button>
    </div>
    <div v-if="props.navigation" class="toggle-page right">
      <button @click="nextSlide">
        <svg
          role="img"
          aria-describedby="right-arrow-icon-title"
          width="11"
          height="27"
          viewBox="0 0 11 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title id="right-arrow-icon-title">Left Arrow Icon</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.384105 0.313956C0.605707 0.0886188 0.893485 -0.0228943 1.1842 0.00392137C1.47492 0.0307371 1.74479 0.193688 1.93451 0.456966L10.7353 12.6651C10.9061 12.9021 11 13.204 11 13.5162C11 13.8283 10.9061 14.1302 10.7353 14.3672L1.93451 26.5754C1.74165 26.8258 1.47445 26.9772 1.1894 26.9976C0.904348 27.0181 0.623784 26.9059 0.407018 26.6849C0.190253 26.4638 0.0542729 26.1512 0.0278253 25.8131C0.00137756 25.475 0.0865346 25.138 0.265295 24.8732L8.45148 13.5162L0.265295 2.15913C0.0754269 1.89608 -0.0188623 1.55419 0.00313984 1.20854C0.025142 0.862896 0.161636 0.541769 0.382638 0.315701L0.384105 0.313956Z"
          />
        </svg>
      </button>
    </div>

    <div v-if="props.pagination" class="pagination">
      <span
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel:hover .toggle-page {
  @apply opacity-100 transition-opacity duration-500 ease-in-out;
}
.toggle-page {
  @apply flex absolute top-0 bottom-0 items-center z-20 opacity-0 transition-opacity duration-500 ease-in-out;

  //TODO: Cambiar los estilos al boton
  button {
    @apply py-4 px-3;

    svg {
      @apply fill-slate-700 transition-all duration-500 ease-out;
    }

    &:hover svg {
      @apply scale-150 transition-all duration-500 ease-out;
    }
  }
}
.left {
  @apply left-0;
}
.right {
  @apply right-0;
}

.pagination {
  @apply absolute bottom-[-30px] w-full flex justify-center items-center gap-4;

  span {
    @apply w-3 h-3 cursor-pointer rounded-full bg-slate-300 shadow-md transition-all duration-300 ease-in-out;

    &:hover {
      @apply bg-black;
    }
  }
  .active {
    @apply w-5 h-5 border-[1px] border-slate-700 bg-white;

    &:hover {
      @apply bg-white;
    }
  }
}
</style>
