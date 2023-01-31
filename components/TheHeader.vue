<script setup lang="ts">
import { appNavLinks } from '@data/links';

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

const theMmenu = ref<null | HTMLElement>(null);

onClickOutside(theMmenu, closeMmenu, {
  ignore: ['.menu-icon', '.dark-toggle'],
});
</script>

<template>
  <header
    class="app-header-def l-t-d"
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
        <NuxtLink
          v-for="hl in appNavLinks"
          :key="hl.text"
          :to="hl.to"
          tabindex="0"
          active-class="active"
          class="mn-link"
        >
          {{ hl.text }}
        </NuxtLink>
      </nav>

      <div class="spread-right">
        <span class="dark-toggle"><DarkToggle /></span>
        <span class="menu-icon"><SideNavButton /></span>
      </div>
    </div>

    <div class="mobile-menu">
      <MobileMenu ref="theMmenu" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header-def {
  @apply z-8 w-full sticky top-0 bg-brand-wht/80 dark:(bg-brand-blk/80)
    transform translate-y-0 visible will-change-transform;

  @supports (
    (-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))
  ) {
    @apply backdrop-blur-8;
  }

  transition-duration: 450ms;
  transition-property: transform, visibility, background-color, backdrop-filter;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.scrolled__ {
    @apply invisible translate-y--101%;
  }

  &.blend:not(.elevated) {
    @apply text-zinc-1 bg-brand-blk bg-op-75;

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
  @apply text-zinc-600 space-x-6
    capitalize dark:text-zinc-300;

  // @apply hidden lg:(flex px-16 -mx-4 flex-row items-center);

  @apply hidden sm:(flex px-8 ml-auto flex-row items-center);
}

.mn-link,
:deep(.mn-link) {
  @apply cursor-pointer p-1 inline-flex
    items-center justify-center;

  &:not(.dropdown) {
    @apply duration-200 underline-offset-10;

    text-decoration: underline solid transparent 0.1rem;
    transition: text-decoration-color 300ms, text-underline-offset 300ms,
      color 250ms;
    transition-timing-function: ease;

    &.active,
    &:focus-visible,
    &:hover {
      @apply text-brand-pri underline-brand-pri/50
        dark:(text-brand-lit underline-brand-lit/50)
          outline-none;
    }

    &.active {
      @apply underline-offset-8;
    }

    &,
    &.active {
      &:focus-visible,
      &:hover {
        @apply underline-offset-5;
      }
    }
  }

  &.dropdown {
    @apply px-6px pt-1 pb-0 transition outline-none
      border-b-2 border-transparent;

    &.hovered,
    &:focus-visible,
    &:hover {
      @apply outline-none text-brand-pri border-brand-pri/40
        dark:(text-brand-lit border-brand-lit/40);
    }
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
