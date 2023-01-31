<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core';
import type { ComputedRef } from 'vue';

interface StatsCardProps {
  title: string;
  icon: { icon: string; vbox: string };
  fig: number | string;
  suffix?: string;
  animate?: boolean;
}

const props = withDefaults(defineProps<StatsCardProps>(), {
  animate: false,
  suffix: '',
  fig: 0,
  title: '',
});

const { animate, suffix, fig: _fig, title, icon } = toRefs(props);

const fig = ref(+_fig.value);
const target = ref<HTMLElement>();
let dp: ComputedRef<number>;
let output: ComputedRef<number>;

if (animate.value) {
  const source = ref(1);
  const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      source.value = fig.value;
    }
  });

  dp = computed(() => {
    return fig.value.toString().split('.')[1]?.length;
  });

  output = useTransition(source, {
    delay: 300,
    duration: 3000,
    transition: TransitionPresets.easeInSine,
    onFinished: stop,
  });
}
</script>

<template>
  <div class="stats-row">
    <VIcon size="33px" v-bind="icon" class="icon" />
    <div v-if="animate">
      <span class="sr-only">{{ fig + suffix }}</span>
      <div ref="target" aria-hidden="true" class="fig">
        {{ output.toFixed(dp) }}<span class="suffix">{{ suffix }}</span>
      </div>
    </div>
    <div v-else class="fig">
      {{ _fig }}<span class="suffix">{{ suffix }}</span>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>


<style lang="scss" scoped>
.stats-row {
  --feat-card-border: rgba(15, 118, 110, 0.666);
  border: 1px solid var(--feat-card-border);

  @apply py-4 px-8 col-span-2 bg-brand-lit/30
    rounded-xl w-full text-brand-pri
      dark:(text-brand-lit);

  .dark & {
    --feat-card-border: rgba(19, 78, 74, 0.666);
    @apply bg-teal-900/10;
  }

  .icon {
    @apply opacity-90 dark:(opacity-50);
  }

  .fig {
    @apply font-medium tracking-wide text-h4 mt-4;

    .suffix {
      @apply text-[90%] pl-2px;
    }
  }

  .title {
    @apply mt-1px;
  }
}
</style>
