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

const dp = computed(() => {
  return figure.value.toString().split('.')[1]?.length;
});

const source = ref(fig.value / 100);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      setTimeout(() => {
        source.value = figure.value;
      }, 0);
    } else {
      setTimeout(() => {
        source.value = fig.value / 100;
      }, 0);
    }
  },
  {
    threshold: 0.6,
  }
);

const output = useTransition(source, {
  delay: 1000,
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
});

onBeforeUnmount(stop);
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
  box-shadow: 0 0 1px 0 rgba(82, 82, 91, 0.3), 0 1px 2px rgba(0, 0, 0, 0.05);
  @apply py-4 rd-xl w-full px-4 select-none bg-#ebfee7 sm:px-8
    dark:(bg-#09201c border-0 text-brand-lit shadow-none);
  background: hsl(110, 100%, 97%);
}

.icon {
  @apply text-emerald-9/75 dark:(text-emerald-1/60) w-7 h-7;
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
