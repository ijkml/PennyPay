<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  items: {
    text: string;
    to: RouteLocationRaw;
  }[];
  class?: string;
}>();

const { items, class: className } = toRefs(props);
</script>

<template>
  <Popover v-slot="{ open: active, close }" class="relative">
    <PopoverButton :class="[active && 'active', className]">
      <slot />
      <div
        :class="{ active }"
        class="popover-btn-icon i-carbon-chevron-down"
        aria-hidden="true"
      />
    </PopoverButton>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="pop-panel-body">
        <div>
          <div class="pop-panel-container">
            <NuxtLink
              v-for="item in items"
              :key="item.text"
              :title="item.text"
              :to="item.to"
              class="pop-panel-item"
              exact-active-class="active"
              @click="close"
            >
              <div class="ppi-body">
                <p v-text="item.text" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </PopoverPanel>
    </Transition>
  </Popover>
</template>

<style lang="scss" scoped>
.popover-btn-icon {
  @apply ml-2 mr--1 h-4.5 w-4.5 transition-transform transform
    duration-200 self-center backface-hidden;

  &.active {
    @apply rotate-180;
  }
}

.pop-panel-body {
  @apply absolute z-10 mt-3 w-56 transform px-4
    sm:px-0 right-1/2 translate-x-1/2;

  > div {
    @apply overflow-hidden rounded-lg shadow-lg ring-1 ring-black
      ring-opacity-5 dark:(border border-brand-pri shadow-none ring-none);
  }
}

.pop-panel-container {
  @apply relative grid gap-8 p-7 bg-light-2 dark:(bg-brand-pri);
}

.pop-panel-item {
  @apply flex items-center rounded-lg p-2 -m-3 transition ease-in-out;

  &:focus,
  &:focus-visible {
    @apply outline-none;
  }

  &:hover {
    @apply bg-brand-pri bg-opacity-10 dark:(bg-opacity-50);
  }

  &:focus-visible {
    @apply ring ring-brand-pri/50 bg-brand-pri/5
      dark:(ring-brand-pri bg-brand-pri/40);
  }

  &.active {
    @apply bg-brand-pri/10 dark:(bg-zinc/20);

    &:hover {
      @apply bg-brand-pri/20 dark:(bg-brand-pri/50);
    }
  }
}

.ppi-body {
  @apply ml-4 text-sm;

  p {
    @apply font-medium text-zinc-700 dark:(text-zinc-100);
  }
}
</style>
