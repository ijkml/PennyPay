<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core';

interface StatsCardProps {
  title: string;
  icon: string;
  fig: number;
  prefix?: string;
  suffix?: string;
}

const props = withDefaults(defineProps<StatsCardProps>(), {
  suffix: '',
  prefix: '',
  fig: 0,
  icon: '',
  title: '',
});

const { prefix, suffix, fig, title, icon } = toRefs(props);

const figure = ref(fig.value);
const target = ref<HTMLElement>();

const source = ref(1);
const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    source.value = figure.value;
    stop();
  }
});

const dp = computed(() => {
  return figure.value.toString().split('.')[1]?.length;
});

const output = useTransition(source, {
  delay: 300,
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
});
</script>

<template>
  <div class="stats-row">
    <svg width="24px" height="24px" class="icon">
      <use :xlink:href="`#${icon}`" />
    </svg>
    <div>
      <span class="sr-only">{{ `${prefix}${fig}${suffix}` }}</span>
      <div ref="target" aria-hidden="true" class="fig">
        <span class="fix">{{ prefix }}</span
        >{{ output.toFixed(dp) }}<span class="fix"> {{ suffix }}</span>
      </div>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>


<style lang="scss" scoped>
.stats-row {
  // --main-color: hsla(175, 77%, 26%, 0.666);
  // --main-color: hsla(176, 61%, 19%, 0.666);

  @apply py-4 bg-brand-lit text-brand-pri
    rd-xl w-full max-w-38 select-none px-4 sm:px-8;

  .dark & {
    @apply bg-teal-900 text-brand-lit;
  }
}

.icon {
  @apply text-emerald-9/75 dark:(text-emerald-1/55) w-7 h-7;
}

.fig {
  @apply font-medium tracking-wide text-h5 sm:(text-h4) mt-4;
}

.fix {
  @apply text-85%;
}

.title {
  @apply mt-1;
}
</style>
