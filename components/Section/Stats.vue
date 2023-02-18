<script setup lang="ts">
const stats = [
  {
    title: 'Followers',
    fig: 40,
    suffix: 'k+',
    icon: 'icon-twitter',
    link: 'https://twitter.com/ijk_ml/',
  },
  {
    title: 'Transactions',
    fig: 15.5,
    suffix: 'M+',
    icon: 'icon-users',
    link: '/blog/2022-review',
  },
  {
    title: 'Downloads',
    fig: 100,
    suffix: 'M+',
    icon: 'icon-download',
    link: '/download',
  },
  {
    title: 'Partners',
    fig: 213,
    suffix: '',
    icon: 'icon-network',
    link: '/partners',
  },
];
</script>

<template>
  <section id="section-stats" role="region" aria-labelledby="heading_stats">
    <div>
      <div class="text-wrapper">
        <div class="pre-heading">Trusted by industry leaders</div>
        <h2 id="heading_stats" class="heading">
          The preferred choice for<wbr /> brands and&nbsp;individuals
        </h2>
        <p>
          Trusted by industry leaders and consumers alike, our platform delivers
          reliability and flexibility to manage transactions with ease. Join the
          countless businesses, freelancers, and brands who have made us their
          preferred choice.
        </p>
      </div>

      <div>
        <div class="stats-wrapper">
          <StatsCard
            v-for="st in stats"
            :key="st.title"
            class="stat-box"
            v-bind="st"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-stats {
  @apply py-24 bg-brand-lit dark:(bg-brand-blk);

  > div {
    @apply mx-auto grid gap-8 px-4
      sm:(px-8) md:(grid-cols-2 gap-5% items-center) max-w-screen-lg;
  }
}

.text-wrapper {
  @apply space-y-4 text-lg text-center max-w-55ch mx-auto
    md:(mx-0 text-left);

  p {
    @apply text-lg;
  }
}

.stats-wrapper {
  @apply px-1 grid grid-cols-2 gap-4 mx-auto py-4 max-w-100;
}

@media (max-width: 767.99px) {
  :deep(.stat-box) {
    @apply transition-all-250;

    outline: 1px solid transparent;

    &:where(:hover, :focus-visible) {
      outline-color: adjust-color($pri, $alpha: -0.4);
    }
  }
}

@media (min-width: 768px) {
  :deep(.stat-box) {
    @apply rotate--5 transform-gpu relative filter
      transition will-change-transform outline-none;

    &:nth-child(even) {
      @apply rotate-5;
    }
  }

  :deep(.stat-box):is(:hover, :focus-visible) {
    @apply scale-115 z-2 rotate-0;
  }

  .stats-wrapper:where(:hover, :focus-within) {
    @supports not selector(:has(+ *)) {
      :deep(.stat-box):not(:where(:hover, :focus-visible)) {
        @apply op-60 grayscale-50 blur-1;
      }
    }

    @supports selector(:has(+ *)) {
      &:has(.stat-box:where(:hover, :focus-visible))
        :deep(.stat-box):not(:where(:hover, :focus-visible)) {
        @apply op-60 grayscale-50 blur-1;
      }
    }
  }
}
</style>
