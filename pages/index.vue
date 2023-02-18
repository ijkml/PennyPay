<script setup lang="ts">
import SvgSymbols from '@img/defs.svg?skipsvgo';
</script>

<template>
  <div class="page-root">
    <SectionHero />

    <SectionLearnMore />

    <SectionGlobalTrade />

    <SectionMobileApp />

    <SectionFeatures />

    <SectionSocialProof />

    <SectionStats />

    <SectionTestimonials />

    <SectionCTA />

    <SvgSymbols />
  </div>
</template>

<style lang="scss">
.pre-heading {
  @apply text-xs tracking-0.5 m-1 mb--1 font-medium
    uppercase text-#58585f;

  &.dark,
  .dark & {
    @apply text-#a4a4ac;
  }
}
.heading {
  // text-#323232/90
  @apply font-medium text-emerald-9/90 text-1.8rem/[1.2]
    md:(text-2.358rem/[1.2]);

  &.dark,
  .dark & {
    @apply text-emerald-1/90;
  }
}
</style>
