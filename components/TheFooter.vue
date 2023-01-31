<script setup lang="ts">
import { appFooterLinks } from '@data/links';
</script>

<template>
  <footer class="app-footer-def l-t-d">
    <div>
      <div class="layer-top">
        <div class="brand">
          <div class="logo">
            <NuxtLink to="/">
              <TheLogo class="brand-logo" />
            </NuxtLink>
          </div>

          <p class="text">Accept payments globally, leave stress behind.</p>

          <SocialBlock />
        </div>

        <div class="link-grid">
          <div>
            <div v-for="fl in appFooterLinks" :key="fl.header">
              <h3 class="lc-header">
                {{ fl.header }}
              </h3>
              <div class="lc-col">
                <div v-for="l in fl.links" :key="l.text" class="lc-link">
                  <NuxtLink tabindex="0" :to="l.to">
                    {{ l.text }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="divider" />

      <div class="layer-bottom">
        <div class="copyright">
          &copy;{{ new Date().getFullYear() }}
          <NuxtLink tabindex="0" to="/">PennyPay Inc</NuxtLink>
        </div>
        <div class="insignia">
          <a
            href="http://ijkml.bio.link"
            target="_blank"
            tabindex="0"
            title="Moses Laurence · UI Developer"
          >
            Website by <strong>ML</strong>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer-def {
  @apply border-t border-[var(--divider-color)] overflow-x-hidden
    dark:(bg-brand-blk text-white) bg-brand-wht;

  > div {
    @apply container px-8 mx-auto max-w-screen-xl;
  }
}

.layer-top {
  @apply pt-13 pb-8 lg:flex;
}

.brand {
  @apply w-full lg:(w-2/5 pr-8);

  .logo,
  &-logo {
    @apply max-w-40;
  }

  .text {
    @apply max-w-sm my-4 text-zinc-700 dark:text-zinc-300;
  }
}

.link-grid {
  @apply mt-6 lg:mt-0 lg:flex-1;

  > div {
    @apply grid grid-cols-2 gap-6
      sm:grid-cols-3 md:grid-cols-4;
  }
}

.lc {
  &-col {
    @apply my-3 text-sm;
  }

  &-header {
    @apply uppercase mb-2 font-medium text-zinc-600
      tracking-widest text-sm dark:(text-zinc-300);
  }

  &-link {
    @apply block py-6px truncate;

    a {
      @apply cursor-pointer underline-offset-8;

      text-decoration: underline solid transparent 0.1rem;
      transition: text-decoration-color 300ms, text-underline-offset 300ms,
        color 250ms;
      transition-timing-function: ease;

      &:focus-visible,
      &:hover {
        @apply text-brand-pri underline-brand-pri/50
          dark:(text-brand-lit underline-brand-lit/50)
            underline-offset-5 outline-none;
      }
    }
  }
}

.layer-bottom {
  @apply flex py-3 px-4 mx-auto space-y-4
    items-center flex-col;

  @media (min-width: 450px) and (max-width: 639.9px) {
    @apply space-y-0 flex-row space-x-4 justify-between;

    .copyright {
      @apply max-w-1/2;
    }
  }

  @media (min-width: 640px) {
    @apply flex-row space-y-0 space-x-4 justify-between;
  }
}

.copyright a {
  @apply font-medium;
}

.insignia {
  @apply text-zinc-500 underline underline-current
    decoration-dotted underline-offset-4 cursor-pointer
      transition duration-300 px-1;

  strong {
    @apply font-semibold;
  }

  &:hover,
  &:focus-visible {
    @apply text-zinc-700 dark:(text-zinc-300);
  }
}
</style>
