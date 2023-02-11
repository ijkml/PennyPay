<script lang="ts" setup>
import type { WritableComputedRef } from 'vue';

const route = useRoute();
const blendHeader = ref(['/'].includes(route.path));

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', closeMmenu);
nuxtApp.hook('page:finish', () => {
  blendHeader.value = ['/'].includes(route.path);
});

let isLocked: WritableComputedRef<boolean> | null = null;

watch(menuIsOpen, (nv) => {
  isLocked !== null && (isLocked.value = nv);
});

onMounted(() => {
  isLocked = useScrollLock(document.documentElement, false);
  useEventListener(['orientationchange', 'resize'], closeMmenu);
});
</script>

<template>
  <div class="app-layout--default" data-scroll>
    <TheHeader :blend="blendHeader" />
    <main :class="!blendHeader && 'header-space'">
      <slot />
    </main>
    <TheFooter />
    <Transition name="fade">
      <div
        v-show="menuIsOpen"
        class="nav-overlay"
        tabindex="-100"
        aria-hidden="true"
      />
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.app-layout--default {
  @apply min-h-screen flex flex-col mx-auto max-w-screen-2xl relative;

  > footer {
    @apply mt-auto;
  }

  > main {
    @apply min-h-50;
  }

  > header {
    @apply max-w-screen-2xl;
  }
}

.nav-overlay {
  @apply fixed h-full w-full backdrop-filter overflow-hidden z-7
    top-0 left-0 backdrop-blur-0.088rem bg-black/50
      transition-all duration-300;
}
</style>
