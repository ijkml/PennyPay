<script setup lang="ts">
</script>

<template>
  <div class="page-root">
    <HomeHero />

    <HomeLearnMore />

    <HomeGlobalTrade />

    <HomeMobileApp />

    <HomeFeatures />

    <HomeStats />

    <section
      id="section-usedby"
      class="dark"
      role="region"
      aria-labelledby="heading-usedby"
    >
      <div class="max-screen">
        <div class="header-cont">
          <div class="pre-heading">On the shoulders of giants</div>
          <h2 id="heading-usedby" class="heading">
            <!-- Powering growth for the world's most innovative people -->
            Backed by the world's most innovative brands
          </h2>
          <VDivider centered />
          <p>
            God set them in the dome from the man he said, Because you have
            done? The woman said, The serpent tricked me, and I hid myself.
          </p>
        </div>
        <LogoWall />
      </div>
    </section>

    <section id="get-started">
      <div class="cta-container dark">
        <div class="pre-heading">Ready to thrive?</div>
        <h2 class="heading">
          Create an account, start accepting secure payments
        </h2>
        <div class="actions">
          <VButton cta="primary">Create an Account</VButton>
          <VButton cta="third">Pricing Options</VButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.pre-heading {
  @apply text-xs tracking-0.5 m-1 mb--1 font-medium
    uppercase text-#58585f dark:text-#a4a4ac;
}
.heading {
  // text-#323232/90
  @apply font-medium text-emerald-9/90 text-1.8rem/[1.2]
    md:(text-2.358rem/[1.2]) dark:(text-emerald-1/90);
}
</style>

<style scoped lang="scss">
#get-started {
  @alt-bg2();
  @apply sm:(px-4 py-16) md:(px-8 py-20);

  .cta-container {
    background: url('@img/bg-003.svg') center / cover no-repeat;

    @apply px-4 py-16 text-brand-lit text-center
      max-w-screen-lg mx-auto flex flex-col items-center
        sm:(rounded-3xl) md:(px-16 rounded-6xl);

    .heading {
      @apply font-semibold;
    }

    .pre-heading {
      @apply text-brand-lit;
    }

    .max-screen-cont {
      @apply flex flex-col items-center py-8 px-4
        sm:(px-8) mx-auto text-center text-brand-lit;
    }

    .actions {
      @apply mt-6 sm:-mx-2 space-x-2 children:(mx-2 mt-3);
    }
  }
}

/* ---------- 2023 ---------- */

#section-usedby {
  background-color: hsla(183, 90%, 8%, 1);

  .max-screen {
    @apply py-13 px-14px sm:(px-8) text-brand-wht;
  }

  .header-cont {
    @apply text-center  max-w-lg md:(max-w-xl) mx-auto;

    p {
      @apply mt-5 text-lg;
    }
  }
}
</style>
