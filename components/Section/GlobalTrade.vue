<script setup lang="ts">
const features = [
  {
    title: 'Real-time Management',
    icon: 'icon-realtime',
    color: 'orange',
    text: 'PennyPay offers real-time management of financials with immediate visibility of payments and funds for efficient financial control.',
  },
  {
    title: 'Frictionless Integrations',
    icon: 'icon-integrations',
    color: 'teal',
    text: 'Effortlessly integrate PennyPay into your existing business operations and workflows for seamless transactions and fund management.',
  },
];
</script>

<template>
  <section id="sect-global" role="region" aria-labelledby="heading_global">
    <div>
      <div class="section-text">
        <div class="pre-heading">Global reach, simplified</div>
        <h2 id="heading_global" class="heading">
          Global commerce at your&nbsp;fingertips
        </h2>
        <p>
          Effortlessly process payments and manage funds globally with our
          user-friendly platform. Expand your business opportunities with global
          commerce.
        </p>
      </div>

      <div class="features">
        <div v-for="feat in features" :key="feat.title" class="feat">
          <div class="icon" :class="[`svg-${feat.color}`]">
            <svg width="24px" height="24px">
              <use :xlink:href="`#${feat.icon}`" />
            </svg>
          </div>
          <h3 v-text="feat.title" />
          <p v-text="feat.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#sect-global {
  @apply py-16;

  > div {
    @apply mt-10 mx-auto max-w-screen-xl px-4;
  }
}

.section-text {
  @apply text-center max-w-55ch mx-auto mb-8 space-y-4;

  p {
    @apply text-lg;
  }
}

.features {
  @apply grid grid-cols-1 py-2 px-1 gap-8 max-w-5xl mx-auto
    items-center sm:(grid-cols-2 px-2) md:(gap-12);

  p {
    @apply text-1.088rem;
  }
}

.feat {
  @apply text-center p-4 max-w-50ch sm:(max-w-60ch) mx-auto;
}

h3 {
  @apply text-2xl mb-3 font-medium;
}

.icon {
  @apply w-24 h-24 flex justify-center items-center rounded-lg
    mx-auto mb-6;

  &.svg-orange {
    @apply text-amber-6 bg-(amber-4 op-26)
      dark:(text-amber-3 bg-op-13);
  }

  &.svg-teal {
    @apply text-emerald-7 bg-(emerald-5 op-16)
      dark:(text-emerald-4 bg-op-13);
  }

  > svg {
    @apply h-16 w-16;
  }
}
</style>
