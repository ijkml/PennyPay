<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

interface ButtonProps {
  // custom
  variant?: 'primary' | 'secondary';
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  // link
  to?: string | RouteLocationRaw;
  href?: string | RouteLocationRaw;
  external?: boolean;
  // nuxt-link
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null;
  replace?: boolean;
  rel?: string | null;
  noRel?: boolean;
  prefetch?: boolean;
  noPrefetch?: boolean;
  activeClass?: string;
  exactActiveClass?: string;
  ariaCurrentValue?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  small: false,
  variant: 'primary',
  type: 'button',
  to: undefined,
  href: undefined,
  external: undefined,
  target: undefined,
  replace: undefined,
  rel: undefined,
  noRel: undefined,
  prefetch: true,
  noPrefetch: undefined,
  activeClass: undefined,
  exactActiveClass: undefined,
  ariaCurrentValue: undefined,
});

const emit = defineEmits<{
  (e: 'click', event: any): void;
}>();

function bubble(event: any) {
  emit('click', event);
}

const { to, href, external, variant, small, type, ...otherProps } =
  toRefs(props);

const isLink = computed(() => {
  return Boolean(to?.value || href?.value || external?.value);
});

const btnStyles = computed(() => {
  return `pnp-${variant.value} ${small.value ? 'pnp-sm' : ''}`.trim();
});

const linkProps = computed(() => {
  return reactive({ to, href, external, ...otherProps });
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <NuxtLink
    v-if="isLink"
    class="pnp-btn"
    :class="[btnStyles]"
    v-bind.attr="$attrs"
    v-bind="linkProps"
    @click="bubble($event)"
  >
    <span>
      <slot />
    </span>
  </NuxtLink>

  <button
    v-else
    class="pnp-btn"
    :class="[btnStyles]"
    :type="type"
    v-bind.attr="$attrs"
    @click="bubble($event)"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
.pnp {
  &-btn {
    background-image: linear-gradient(to right, var(--stop-1), var(--stop-2));

    @apply inline-block relative rounded transition duration-300
      cursor-pointer outline-none;

    > span {
      @apply inline-block w-auto px-4 py-2 z-1 font-medium
        rounded-inherit min-w-15 relative;
    }

    &::after {
      @apply outline-none bg-[var(--stop-3)] absolute left-0 top-0 z-0
        opacity-0 content-[''] w-full h-full transition duration-300
          rounded-inherit pointer-events-none;
    }

    &:where(:disabled, .disabled) {
      @apply cursor-default op-75 filter-grayscale-100;
    }

    &:not(:disabled):not(.disabled) {
      &:hover,
      &:focus-visible {
        @apply outline-none;

        &::after {
          @apply op-100;
        }
      }
    }
  }

  &-primary {
    // --stop-1: theme('colors.teal.700');
    // --stop-2: theme('colors.teal.900');
    // --stop-3: hsl(174, 83%, 24%);
    --stop-1: theme('colors.teal.900');
    --stop-2: theme('colors.green.900');
    --stop-3: theme('colors.teal.800');
    color: #f5f5f5;
  }

  &-secondary {
    --stop-1: transparent;
    --stop-2: transparent;
    --stop-3: currentColor;

    @apply border border-zinc-500/50;

    &:not(:disabled) {
      &:hover,
      &:focus-visible {
        @apply text-brand-pri dark:(text-brand-lit)
          outline-none;

        &::after {
          @apply op-8;
          opacity: 0.08 !important;
        }
      }
    }
  }
}
</style>
