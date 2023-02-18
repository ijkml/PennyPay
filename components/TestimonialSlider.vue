<script setup lang="ts">
import type { SwiperOptions } from 'swiper';
import { testimonies } from '@data/testimonials';

const options: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  modules: [SwiperMousewheel, SwiperNavigation],
  loop: true,
  mousewheel: true,
  navigation: {
    nextEl: '.splide__arrow.splide__arrow--next',
    prevEl: '.splide__arrow.splide__arrow--prev',
  },
  breakpoints: {
    500: {
      slidesPerView: 'auto',
    },
  },
};

const swiperOptions = options as any;

const arrows = [
  {
    label: 'Previous slide',
    path: 'M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z',
    class: 'splide__arrow--prev',
  },
  {
    label: 'Next slide',
    path: 'M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z',
    class: 'splide__arrow--next',
  },
] as const;
</script>

<template>
  <Swiper class="slide-wrap" v-bind.prop="swiperOptions">
    <SwiperSlide
      v-for="tmn in testimonies"
      :key="tmn.name"
      class="swiper-slide"
    >
      <TestimonialSlide v-bind="tmn" class="ss-content" />
    </SwiperSlide>
    <div class="splide__arrows">
      <button
        v-for="arr in arrows"
        :key="arr.label"
        :aria-label="arr.label"
        class="splide__arrow"
        :class="[arr.class]"
      >
        <svg height="32px" role="presentation" width="32px" viewBox="0 0 32 32">
          <path :d="arr.path" />
        </svg>
      </button>
    </div>
  </Swiper>
</template>

<style scoped lang="scss">
.slide-wrap {
  // @apply outline-(1px dotted red/50);

  @apply p-1 overflow-visible;
}

.swiper-slide {
  @apply my-auto;
}

@media (min-width: 500px) {
  .swiper-slide {
    @apply w-auto;
  }

  .ss-content {
    @apply mx-0;
  }
}

.splide__arrows {
  @apply flex gap-8 items-center justify-center px-8 py-2 mt-8;
}

.splide__arrow {
  @apply rd-1 p-2 transition-200 outline-none
    border-(1 solid brand-pri/30);

  svg {
    @apply h-5 w-5 fill-current transition-inherit;
  }

  &:where(:disabled, .disabled) {
    @apply op-40 cursor-default;
  }

  &:not(:where(:disabled, .disabled)):where(:hover, :focus-visible) {
    @apply bg-brand-lit dark:(bg-brand-pri/30 text-white);
  }
}
</style>
