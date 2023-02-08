<script setup lang="ts">
import HeroImage from '@img/dashboard.webp?url';
</script>

<template>
  <section
    id="hero-sect"
    class="dark"
    role="region"
    aria-labelledby="screamer-h1"
  >
    <div class="max-screen">
      <div class="text-col">
        <div>
          <h1 id="screamer-h1">
            Accept payments globally with no structural lock-in.
          </h1>
          <p>
            PennyPay takes the complexity out of global commerce so that you can
            unleash the full potential of your brand.
          </p>

          <div class="inline-flex gap-2 flex-wrap">
            <VButton to="#learn-more">Register / Sign In</VButton>
            <VButton variant="secondary" to="#learn-more">Learn More</VButton>
          </div>

          <div class="soc-proof">
            <p>Backed by innovative brands</p>

            <img
              class="brand-logos"
              src="@img/brands-1.svg"
              height="28.5"
              width="242"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              alt="Rakuten, Shopify and Airbnb"
            />
          </div>
        </div>
      </div>

      <div class="img-col">
        <div>
          <img
            loading="eager"
            fetchpriority="high"
            decoding="async"
            :src="HeroImage"
            alt="Picture showing the PennyPay dashboard"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#hero-sect {
  @apply flex flex-col justify-center items-center
    overflow-hidden lg:(bg-fixed);

  // GRADIENT ALT: #13331b,#0d2218,#045256
  background: $blk url('@img/prism.svg') center / cover no-repeat;
  margin-top: -$nav-height;

  > div {
    @apply lg:(flex) w-full z-0 py-9 mt-13;
  }
}

.text-col {
  @apply flex items-center justify-center w-full
    px-6 py-8 lg:(min-h-32rem w-1/2);

  > div {
    @apply max-w-xl;
  }
}

.img-col {
  @apply hidden w-full h-64 sm:(h-70) lg:(flex w-1/2 h-auto) p-2;

  > div {
    @apply w-full h-full flex flex-col justify-center py-8;
  }
}

#screamer-h1 {
  font-size: clamp(2rem, calc(4vw + 1rem), 3rem);
  line-height: 1.2;

  @apply text-brand-lit font-bold;

  & + p {
    @apply my-5 px-1 text-lg sm:(px-0 text-xl)
    leading-normal text-zinc-200;
  }
}

.soc-proof {
  @apply mt-10 tracking-wide text-zinc-400;
}

.brand-logos {
  @apply invert-86 grayscale-86 op-86 w-auto max-h-10
    mt-3 object-contain;
}
</style>
