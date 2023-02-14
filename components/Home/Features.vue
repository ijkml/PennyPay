<script setup lang="ts">
const features = [
  {
    title: 'Cutting-Edge Tech',
    text: 'Stay ahead of the game with innovative technologies.',
    icon: 'i-carbon-ibm-cloud-transit-gateway',
  },
  {
    title: 'Efficient Automation',
    text: 'Unleash productivity and streamline your workflow.',
    icon: 'i-carbon-workflow-automation',
  },
  {
    title: 'Scalable Solutions',
    text: 'Customizable solutions for your unique needs.',
    icon: 'i-carbon-intent-request-scale-out',
  },
  {
    title: 'Advanced Analytics',
    text: 'Gain data-driven insights with advanced analytics.',
    icon: 'i-carbon-data-vis-1',
  },
  {
    title: 'Flexible Deployment',
    text: 'Flexible implementation options for maximum impact.',
    icon: 'i-carbon-deployment-pattern',
  },
  {
    title: 'Proactive Support',
    text: 'Prompt, effective assistance to optimize your experience.',
    icon: 'i-carbon-gateway-user-access',
  },
];
</script>

<template>
  <section
    id="feature-set"
    class="dark"
    role="region"
    aria-labelledby="heading_features"
  >
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
        <HomeFeatureCard
          v-for="feat in features"
          :key="feat.title"
          v-bind="feat"
          class="feat"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#feature-set {
  @apply py-24 px-4 sm:(px-8) lg:(bg-fixed) bg-brand-blk;

  $bg: hsl(185, 31%, 5%);

  color: hsla(0, 0%, 90%, 0.9);
  background: url('@img/bg-peaks.svg') center / cover no-repeat,
    linear-gradient(to bottom, $bg, $bg);

  > div {
    @apply max-w-screen-xl mx-auto;
  }
}

.heading-wrapper {
  @apply max-w-55ch mx-auto text-center space-y-4;

  p {
    @apply;
  }
}

.feature-wrapper {
  @apply max-w-6xl mx-auto grid gap-6 mt-13;

  @media (min-width: 500px) and (max-width: 949.99px) {
    @apply gap-8 grid-cols-2;
  }

  @media (min-width: 950px) {
    @apply grid-cols-3;
  }
}

.feat {
  @apply max-w-92 mx-auto;
}
</style>
