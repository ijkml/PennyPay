<script setup lang="ts">
import { headerMenu } from '@data/app-links';

const props = withDefaults(
  defineProps<{
    blend: boolean;
  }>(),
  {
    blend: true,
  }
);

const { blend } = toRefs(props);

const { y: scrolledHeight } = usePageScroll();

const scrolled = ref(false);
const elevated = ref(false);

watchThrottled(
  scrolledHeight,
  (nv, ov) => {
    if (scrolledHeight.value < 500) {
      scrolled.value = false;
      elevated.value = false;
    } else {
      elevated.value = true;
      scrolled.value = nv > ov;
    }
  },
  { throttle: 150 }
);
</script>

<template>
  <header
    class="app-header"
    :class="{
      scrolled,
      blend,
      elevated,
      dark: blend && !elevated,
    }"
  >
    <div class="top-header">
      <NuxtLink to="/">
        <TheLogo class="brand-logo" />
      </NuxtLink>

      <nav class="main-nav">
        <template v-for="menu in headerMenu">
          <MenuHeader
            v-if="menu.menu"
            :key="menu.title"
            class="mn-link"
            :items="menu.items"
          >
            {{ menu.title }}
          </MenuHeader>
          <NuxtLink
            v-else
            :key="menu.text"
            :to="menu.link"
            tabindex="0"
            active-class="active"
            class="mn-link"
          >
            {{ menu.text }}
          </NuxtLink>
        </template>
      </nav>

      <div class="spread-right">
        <span class="dark-toggle"><DarkToggle /></span>
        <span class="menu-icon"><MenuMobileButton /></span>
      </div>
    </div>

    <div class="mobile-menu">
      <MenuMobile />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  @apply sticky top-0 visible transform translate-y-0 z-8
  bg-brand-wht/80 border-(b-1 zinc/13) w-full
    dark:(bg-brand-blk/80) will-change-transform;

  @supports (
    (-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))
  ) {
    @apply backdrop-blur-8;
  }

  transition-duration: 450ms;
  transition-property: transform, visibility, background-color, backdrop-filter;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.scrolled {
    @apply invisible translate-y--101%;
  }

  &.blend:not(.elevated) {
    @apply text-zinc-1 bg-brand-blk bg-op-75 border-transparent;

    @supports (
      (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
    ) {
      @apply bg-op-25 backdrop-blur-10;
    }
  }
}

.top-header {
  @apply p-4 mx-auto sm:(px-6) flex items-center
    justify-between max-w-screen-xl;

  height: $nav-height;
}

.mobile-menu {
  @apply relative bg-inherit;
}

.brand-logo {
  @apply max-h-25px w-auto;
}

.main-nav {
  @apply space-x-6 capitalize text-brand-pri dark:(text-brand-lit)
    hidden sm:(flex px-8 ml-auto flex-row items-center);
}

.mn-link,
:deep(.mn-link) {
  @apply cursor-pointer p-0.5 inline-flex outline-none
    items-center relative tracking-wide;

  &::after {
    @apply absolute top-full left-0 w-full h-0.1rem transition-300
      op-0 bg-current transform-gpu translate-y-2 content-[''];
  }

  &.active::after {
    @apply op-45 translate-y-1;
  }

  &:is(:hover, :focus-visible)::after {
    @apply op-45 translate-y-0;
  }
}

.menu-icon,
.mobile-menu {
  @apply sm:hidden;
}

.spread-right {
  @apply flex gap-3 items-center;
}
</style>
