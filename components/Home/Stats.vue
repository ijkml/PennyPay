<script setup lang="ts">
const stats = [
  {
    title: 'Followers',
    fig: 40,
    suffix: 'k+',
    icon: 'icon-twitter',
  },
  {
    title: 'Users',
    fig: 10.6,
    suffix: 'M+',
    icon: 'icon-users',
  },
  {
    title: 'Downloads',
    fig: 107,
    suffix: 'M+',
    icon: 'icon-download',
  },
  {
    title: 'Partners',
    fig: 213,
    suffix: '',
    icon: 'icon-network',
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

      <div class="stats-wrapper">
        <div class="company-stats">
          <HomeStatsCard v-for="st in stats" :key="st.title" v-bind="st" />
        </div>
      </div>
    </div>
    <HomeStatsIcons />
  </section>
</template>

<style scoped lang="scss">
#section-stats {
  @apply py-24;

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
  @apply flex;
}

.company-stats {
  @apply p-1 inline-grid grid-cols-2 gap-4 mx-auto;

  > div {
    @apply rotate--5 transform-gpu relative
      transition-250 will-change-transform;

    &:nth-child(even) {
      @apply translate-y-2;
    }
  }

  &:hover {
    > div {
      &:hover {
        @apply scale-115 z-10 rotate-0 translate-0;

        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }

      &:not(:hover) {
        @apply op-50;
      }
    }
  }
}
</style>
