<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  items: {
    text: string;
    link: RouteLocationRaw;
  }[];
}>();

const { items } = toRefs(props);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <Popover v-slot="{ open: active, close }" class="relative">
    <PopoverButton v-bind="$attrs" :class="{ active }">
      <slot />
      <div class="popover-btn-icon i-carbon-chevron-down" aria-hidden="true" />
    </PopoverButton>

    <Transition
      enter-active-class="transition-200 ease-out"
      enter-from-class="translate-y-3 op-0"
      enter-to-class="translate-y-0 op-100"
      leave-active-class="transition-150 ease-in"
      leave-from-class="translate-y-0 op-100"
      leave-to-class="translate-y-3 op-0"
    >
      <PopoverPanel class="pop-panel-body">
        <div class="pop-panel-container">
          <NuxtLink
            v-for="item in items"
            :key="item.text"
            :title="item.text"
            :to="item.link"
            class="pop-panel-item"
            exact-active-class="active"
            @click="close"
          >
            {{ item.text }}
          </NuxtLink>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<style lang="scss" scoped>
.popover-btn {
  &-icon {
    @apply ml-1 h-4 w-4 transition-transform-200 backface-hidden;

    .active > & {
      @apply rotate-180;
    }
  }
}

.pop-panel-body {
  @apply absolute z-8 mt-2.5 w-56 transform p-0
    right-1/2 translate-x-1/2 text-sm;
}

.pop-panel-container {
  @apply relative grid gap-2 p-2 bg-brand-wht/98 rd-lg
    backdrop-blur-8 of-hidden shadow-md ring-(1 black/5)
      dark:(bg-brand-blk/98 border-(1 brand-pri/45)
        ring-none shadow-none);
}

.pop-panel-item {
  @apply flex items-center outline-none rd p-(y-2 x-3)
    m-0 transition ease-in-out;

  &:hover {
    @apply bg-brand-pri bg-op-10 dark:(bg-op-35);
  }

  &:focus-visible {
    @apply ring-(1 brand-pri op-35) bg-(brand-pri op-5)
      dark:(ring-op-100 bg-op-25);
  }

  &.active {
    @apply bg-brand-pri/10 dark:(bg-brand-sec/20);

    &:is(:hover, :focus-visible) {
      @apply bg-(brand-pri op-20) dark:(bg-op-50);
    }
  }
}
</style>
