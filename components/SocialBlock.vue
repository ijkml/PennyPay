<script setup lang="ts">
const socialMedia = [
  { text: 'Twitter', icon: 'i-carbon-logo-twitter', link: '#' },
  { text: 'Facebook', icon: 'i-carbon-logo-facebook', link: '#' },
  { text: 'LinkedIn', icon: 'i-carbon-logo-linkedin', link: '#' },
  { text: 'Discord', icon: 'i-carbon-logo-discord', link: '#' },
];
</script>

<template>
  <div class="socials">
    <a
      v-for="s in socialMedia"
      :key="s.text + s.link"
      :href="s.link"
      target="_blank"
      class="soc-link"
      :title="s.text"
      tabindex="0"
      @click.prevent
    >
      <div :class="s.icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.socials {
  @apply flex space-x-2;
}

.soc-link {
  @apply rounded-md relative inline-flex h-9 w-9
    items-center justify-center text-zinc-600
      dark:(text-zinc-200);

  > div {
    @apply text-22px;
  }

  &::before {
    @apply top-0 left-0 w-full h-full absolute opacity-0;

    content: '';
    border-radius: inherit;
    background: currentColor;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.6, 1);
  }

  &:hover,
  &:focus-visible {
    @apply outline-none text-brand-pri
      dark:(text-brand-lit);

    &::before {
      opacity: 0.123;
    }
  }
}
</style>
