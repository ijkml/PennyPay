<script setup lang="ts">
import { footerMenu } from '@data/app-links';

const socials = [
  {
    text: 'Twitter',
    icon: 'i-carbon-logo-twitter',
    link: 'https://twitter.com/ijk_ml',
  },
  {
    text: 'GitHub',
    icon: 'i-carbon-logo-github',
    link: 'https://github.com/ijkml',
  },
  {
    text: 'Telegram',
    icon: 'i-carbon-send-alt-filled',
    link: 'https://t.me/ijk_ml',
  },
  {
    text: 'BioLink',
    icon: 'i-carbon-direct-link',
    link: 'https://ijkml.bio.link/',
  },
];
</script>

<template>
  <footer class="app-footer-def l-t-d">
    <div>
      <div class="layer-top">
        <div class="brand">
          <NuxtLink to="/">
            <TheLogo :once="false" class="the-logo" />
          </NuxtLink>

          <p class="tagline">
            Revolutionize your transaction processing experience.
          </p>

          <div class="socials">
            <a
              v-for="s in socials"
              :key="s.text + s.link"
              :href="s.link"
              :title="s.text"
              class="soc-link"
              target="_blank"
              tabindex="0"
              rel="noopener"
              referrerpolicy="origin"
            >
              <div :class="s.icon" />
            </a>
          </div>
        </div>

        <div class="link-grid">
          <div>
            <div v-for="fm in footerMenu" :key="fm.title">
              <h3 class="lc-header" v-text="fm.title" />
              <div class="lc-col">
                <div v-for="l in fm.items" :key="l.text" class="lc-link">
                  <a
                    v-if="l.external"
                    :href="l.link"
                    target="_blank"
                    referrerpolicy="origin"
                    rel="noopener"
                    tabindex="0"
                    v-text="l.text"
                  />
                  <NuxtLink v-else tabindex="0" :to="l.link">
                    {{ l.text }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="hr" />

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
            rel="noopener"
            referrerpolicy="origin"
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
  @apply border-(t-1 zinc/16) overflow-x-hidden bg-brand-wht
    text-zinc-7 dark:(bg-brand-blk text-zinc-2);

  > div {
    @apply container px-8 mx-auto max-w-screen-xl;
  }
}

.layer-top {
  @apply pt-13 pb-8 lg:flex;
}

.brand {
  @apply w-full lg:(w-2/5 pr-8);
}

.tagline {
  @apply max-w-60 my-4 text-zinc-700 dark:(text-zinc-300);
}

.the-logo {
  @apply max-h-7 w-auto;
}

.link-grid {
  @apply mt-6 lg:mt-0 lg:flex-1;

  > div {
    @apply grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4;
  }
}

.lc {
  &-col {
    @apply my-3 text-sm grid gap-0.5;
  }

  &-header {
    @apply uppercase mb-2 font-medium text-zinc-600
      tracking-widest text-sm dark:(text-zinc-300);
  }

  &-link {
    @apply block p-1.5 truncate;

    a {
      @apply cursor-pointer inline-flex outline-none
        items-center relative tracking-wide px-0.5;

      &::after {
        @apply absolute top-full left-0 w-full h-0.1rem transition-300
          op-0 bg-current transform-gpu translate-y-2 content-[''];
      }

      &:is(:hover, :focus-visible)::after {
        @apply op-40 translate-y-0;
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

.socials {
  @apply flex space-x-2;
}

.soc-link {
  @apply rounded-md relative inline-flex h-9 w-9
    items-center justify-center text-zinc-600
      dark:(text-zinc-200) outline-none;

  > div {
    @apply text-20px;
  }

  &::before {
    @apply inset-0 w-full h-full absolute op-0 rounded-inherit
      content-[''] bg-current transition-200;
  }

  &:is(:hover, :focus-visible) {
    @apply outline-none text-brand-pri dark:(text-brand-lit);

    &::before {
      @apply op-12.3;
    }
  }
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
