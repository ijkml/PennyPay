<script setup lang="ts">
import { mobileMenu } from '@data/app-links';
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <div v-if="menuIsOpen" class="menu-wrapper">
      <template v-for="mm in mobileMenu" :key="mm.title">
        <div class="link-cont">
          <NuxtLink
            v-for="l in mm.items"
            :key="l.text"
            class="menu-link"
            :to="l.link"
          >
            <div>{{ l.text }}</div>
          </NuxtLink>
        </div>
        <hr class="link-hr" />
      </template>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.menu-wrapper {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  @apply p-2 absolute top-0 right-0 w-full max-w-60 rounded-bl-lg
    h-auto max-h-85vh of-(x-hidden y-auto) b-(l b brand-pri op-2)
      dark:(b-op-50 shadow-none bg-brand-blk/98) bg-brand-wht/98;
}

.link-cont {
  @apply py-4 pl-4 pr-8 grid grid-cols-1 gap-2;
}

.menu-link {
  $hover-p-width: 1em;

  @apply block text-right text-lg transition duration-300
    relative outline-none select-none;

  padding: 0.2rem 0.25rem;

  div {
    @apply block transition-inherit;
  }

  &::before {
    content: '';
    transform: scale3d(0, 1, 1);
    transform-origin: 100% 50%;
    height: 0.1em;
    width: $hover-p-width;
    top: calc(50% - (0.1em / 2));

    @apply transition-inherit absolute right-0 bg-zinc-4;
  }

  &:hover,
  &:focus-visible {
    @apply outline-none;

    div {
      transform: translate3d(-$hover-p-width, 0, 0);
    }

    &::before {
      transform: scale3d(1, 1, 1);
    }
  }
}

.link-hr {
  border-width: thin 0 0;
  border-style: solid;

  @apply w-4/5 ml-auto my-3 border-brand-blk/20
    dark:(border-brand-wht/10);

  &:last-of-type {
    @apply hidden;
  }
}
</style>
