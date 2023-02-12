<script setup lang="ts">
import { features } from '@data/homepage';
</script>

<template>
  <section id="feature-set" role="region" aria-labelledby="heading_features">
    <div>
      <div class="heading-wrapper">
        <div class="pre-heading">Built for you</div>
        <h2 id="heading_features" class="heading">
          Stay ahead of the curve with innovative solutions
        </h2>
        <p>
          Our feature set is unparalleled, but our robust iteration and
          user-proof configuration is usually considered an amazing achievement.
        </p>
      </div>

      <div class="feature-wrapper">
        <div v-for="feat in features" :key="feat.title">
          <HomeFeatureCard v-bind="feat" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#feature-set {
  @apply py-16 px-4 sm:(px-8) lg:(bg-fixed);

  background: url('@img/bg-peaks.svg') center / cover no-repeat;

  > div {
    @apply max-w-screen-xl mx-auto;
  }
}

.heading-wrapper {
  @apply max-w-55ch mx-auto text-center space-y-4 text-lg;
}

.feature-wrapper {
  @apply max-w-6xl mx-auto grid gap-6 mt-13
    sm:(gap-8 grid-cols-2) lg:(grid-cols-3);
}
</style>
