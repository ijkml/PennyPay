<script setup lang="ts">
const logos = [
  'logo-hulu',
  'logo-notion',
  'logo-spotify',
  'logo-mcdonalds',
  'logo-jordan',
  'logo-aws',
  'logo-burger-king',
  'logo-honda',
];
</script>

<template>
  <section
    id="section-community"
    class="dark"
    role="region"
    aria-labelledby="heading_community"
  >
    <div>
      <div class="text-wrapper">
        <div class="pre-heading">On the shoulders of giants</div>
        <h2 id="heading_community" class="heading">
          Built on a foundation of innovation and&nbsp;ingenuity
        </h2>
        <p>
          Our relentless pursuit of innovation means we're always working to
          bring you the latest and greatest solutions to meet your needs.
        </p>
      </div>

      <article class="wrapper">
        <div
          v-for="mak in [false, true]"
          :key="`${mak}`"
          class="marquee"
          :class="{ 'marquee--reverse': mak }"
        >
          <div
            v-for="u in [false, true]"
            :key="`${u}`"
            v-bind="u && { 'aria-hidden': true }"
            class="marquee__group"
          >
            <svg v-for="l in logos" :key="l">
              <use :xlink:href="`#${l}`" />
            </svg>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-community {
  @apply py-24 lg:(bg-fixed);

  $bg: hsl(185, 31%, 5%);

  background: url('@img/bg-peaks.svg') center / cover no-repeat,
    linear-gradient(to bottom, $bg, $bg);

  > div {
    @apply px-4 text-brand-wht mx-auto sm:px-8 lg:container;
  }
}

.text-wrapper {
  @apply max-w-55ch mx-auto text-center space-y-4;
}

p {
  @apply text-lg;
}

.wrapper {
  --color-bg: hsl(184, 91%, 10%);
  --size: 5.6rem;
  --gap: 1rem;
  --duration: 60s;
  --scroll-end: calc(-100% - var(--gap));

  @apply max-w-full text-brand-lit/90 of-hidden flex flex-col
    gap-[var(--gap)] p-4 m-(x-auto b-0 t-8) transition-all;

  @media (min-width: 640px) {
    --size: 8rem;
  }
  @media (min-width: 768px) {
    --size: 10rem;
  }
}

.marquee {
  @apply flex gap-[var(--gap)] of-hidden select-none;

  mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0),
    hsl(0, 0%, 0%) 20%,
    hsl(0, 0%, 0%) 80%,
    hsla(0, 0%, 0%, 0)
  );

  svg {
    width: var(--size);
    background: var(--color-bg);
    padding: calc(var(--size) / 10);

    @apply grid rounded-lg aspect-16/9 fill-current place-items-center;
  }
}

.marquee__group {
  @apply min-w-full flex justify-center items-center
    shrink-0 gap-[var(--gap)];

  animation: scroll-x var(--duration) linear infinite;

  .marquee--reverse & {
    animation-direction: reverse;
    animation-delay: -3s;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-play-state: paused;
  }
}

@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--scroll-end));
  }
}
</style>
