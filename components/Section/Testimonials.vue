<script setup lang="ts">
</script>

<template>
  <section
    id="success-stories"
    role="region"
    aria-labelledby="heading_testimonials"
  >
    <div class="content-wrapper">
      <div class="head-wrapper">
        <div class="pre-heading">Our customers love us!</div>
        <h2 class="heading">See what people are saying about us</h2>
      </div>

      <div class="quote-wrapper">
        <TestimonialSlider />
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0px"
      height="0px"
      class="svg-bg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      viewBox="0 0 900 600"
    >
      <path d="M0 0h900v600H0z" fill="none" />
      <path d="m738 600-208-600h370v600z" class="bg-color" />
    </svg>
  </section>
</template>

<style scoped lang="scss">
#success-stories {
  @apply py-16 relative;
}

.content-wrapper {
  @apply mx-auto max-w-screen-xl px-4;
}

.head-wrapper {
  @apply max-w-55ch mx-auto text-center space-y-4 mb-10 sm:(px-4);
}

.quote-wrapper {
  @apply of-hidden;

  --padding: 0rem;
  padding: 0 var(--padding);

  mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0),
    hsl(0, 0%, 0%) calc(var(--padding) * 1.2),
    hsl(0, 0%, 0%) calc(100% - (var(--padding) * 1.2)),
    hsla(0, 0%, 0%, 0)
  );

  @media (min-width: 640px) {
    --padding: 2.2rem;
  }

  @media (min-width: 768px) {
    --padding: 4.4rem;
  }
}

.high-lite {
  @apply text-emerald-6;
}

.bg-color {
  @apply fill-brand-lit dark:(fill-brand-blk);
  // @apply fill-lime-2 dark:(fill-lime-8);
}

.svg-bg {
  @apply top-0 left-0 h-full w-full absolute z--1;
}
</style>
