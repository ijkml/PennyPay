<script setup lang="ts">
import LogoSvg from '@img/defs-2.svg?skipsvgo';

const logos = [
  {
    title: 'Vue',
    link: 'https://vuejs.org/',
    icon: '#pl-vue',
  },
  {
    title: 'Nuxt',
    link: 'https://nuxt.com/',
    icon: '#pl-nuxt',
  },
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    icon: '#pl-vite',
  },
  {
    title: 'UnoCSS',
    link: 'https://github.com/unocss/unocss/',
    icon: '#pl-uno',
  },
  {
    title: 'Headless UI',
    link: 'https://headlessui.com/',
    icon: '#pl-headless',
  },
];
</script>

<template>
  <div class="page-root">
    <section class="root-section">
      <h1>PennyPay</h1>
      <p>
        PennyPay started out as yet another <q>crypto platform landing page</q>,
        but it quickly became apparent that the Web3 trend was fizzling out
        faster than a dropped ice cream on a hot day. <small>/**oops**/</small>
      </p>
      <p>
        So, I took a sharp turn and transformed PennyPay into something much
        more exciting <wbr /><small>/**I&thinsp;hope**/</small><wbr /> - a
        fictional challenger to PayPal.
      </p>
      <p>
        <a
          target="_blank"
          href="http://twitter.com/ijk_ml"
          rel="noopener noreferrer"
          >Let me know what you think.</a
        >
        The code is on
        <a
          referrerpolicy="origin"
          rel="noopener"
          target="_blank"
          href="https://github.com/ijkml/PennyPay"
        >
          github.com/ijkml/PennyPay</a
        >.
      </p>
      <div class="logos">
        <a
          v-for="l in logos"
          :key="l.title"
          :href="l.link"
          class="logo"
          target="_blank"
          :title="l.title"
          rel="noopener"
          referrerpolicy="origin"
        >
          <svg width="24px" height="24px" class="icon" role="presentation">
            <use :xlink:href="l.icon" />
          </svg>
        </a>
      </div>
      <p>
        with 💚 and Vue,<br />
        until the sequel,<br />
        <a target="_blank" href="http://twitter.com/ijk_ml">ML</a>
      </p>
    </section>
    <LogoSvg />
  </div>
</template>

<style scoped lang="scss">
.page-root {
  @apply min-h-90vh py-8 grid place-items-center;
}

.root-section {
  @apply p-8 font-mono max-w-55ch mx-auto text-center;
}

h1 {
  @apply text-center text-2xl font-semibold
    mb-4 text-emerald-8 dark:(text-lime-5);
}

p {
  @apply mb-3 leading-relaxed;
}

.logos {
  @apply m-(t-5 b-8) inline-flex flex-wrap p-1 gap-4
    items-center justify-center;
}

.logo {
  svg {
    @apply w-6 h-auto;
  }

  @apply outline-none transition-300 saturate-30 dark:(saturate-70 op-70);

  &:is(:hover, :focus-visible) {
    @apply saturate-100 op-100;
  }
}

a:not(.logo) {
  @apply decoration-none relative text-emerald-8
    dark:(text-lime-5) focus:(outline-none);

  background: linear-gradient(0deg, currentColor, currentColor) no-repeat right
    bottom / 0 1px;
  transition: background-size 350ms;
  padding-bottom: 1px;

  &:where(:hover, :focus-visible) {
    background-size: 100% 1px;
    background-position-x: left;
  }
}

a small {
  @apply op-80 text-75%;
}

q {
  @apply op-85 italic;
}
</style>
