<script setup lang="ts">
import { features, stats } from '@data/homepage';
</script>

<template>
  <div class="page-root">
    <HomeHero />

    <HomeLearnMore />

    <HomeGlobalTrade />

    <HomeMobileApp />

    <section
      id="section-feats"
      class="section-cntred"
      role="region"
      aria-labelledby="heading-feats"
    >
      <div class="max-screen-cont">
        <div class="header-cont">
          <div class="pre-heading">Built for you</div>
          <h2 id="heading-feats" class="heading">
            Grow your brand with our unparalleled feature set
          </h2>
          <VDivider centered />
          <p>
            Our feature set is unparalleled, but our robust iteration and
            user-proof configuration is usually considered an amazing
            achievement.
          </p>
        </div>

        <div class="feature-cont">
          <div v-for="feat in features" :key="feat.title">
            <FeatureCard v-bind="feat" />
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-facts"
      class="sect-wwd"
      role="region"
      aria-labelledby="heading-facts"
    >
      <div class="max-screen-cont">
        <div class="text-cont">
          <div class="pre-heading">A Global Platfrom</div>
          <h2 id="heading-facts" class="heading">
            Trusted by 30,000+ freelancers and brands
          </h2>
          <div class="text">
            <p>
              The Sprawl was a handgun and nine rounds of ammunition, and as he
              made his way down Shiga from the banks of every computer in the
              tunnel’s ceiling.
            </p>
          </div>
        </div>

        <div class="img-cont">
          <div class="company-stats">
            <StatsCard v-for="st in stats" :key="st.title" v-bind="st" />
          </div>
        </div>
      </div>
    </section>

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

<style lang="scss" scoped>
.sect-wwd {
  @apply py-18 lg:(px-8);

  .max-screen-cont {
    @apply items-center py-4 px-14px sm:(p-8) md:(flex)
      at-md:(max-w-none);

    > div {
      @apply w-full lg:w-1/2;
    }
  }

  .text {
    @apply py-2 space-y-2;

    p {
      @apply text-lg max-w-50ch mx-auto md:(mx-0);
    }
  }

  .actions {
    @apply mt-5;
  }

  .heading {
    @apply mx-auto text-center md:(text-left mx-0);
  }

  .text-cont {
    @apply py-8 text-center md:(pl-1/20 text-left);

    > div {
      @apply max-w-xl;
    }
  }

  .img-cont {
    @apply mb-8 md:(mb-0);

    img {
      @apply max-w-full object-contain mx-auto transition;
    }
  }

  &.reversed {
    .max-screen-cont {
      @apply flex-row-reverse;
    }

    .text-cont {
      @apply md:(pl-0 pr-1/20);
    }
  }
}

#section-wwd,
#section-wwd2 {
  @alt-bg2();
}

.section-cntred {
  background: url('@img/bg-001.svg') center / cover no-repeat;

  @apply py-18 lg:(px-8 bg-fixed);

  .max-screen-cont {
    @apply py-4 px-14px sm:(p-8);
  }

  .header-cont {
    @apply text-center  max-w-lg md:(max-w-xl) mx-auto;

    p {
      @apply mt-5 text-lg;
    }
  }

  .feature-cont {
    @apply mt-16 grid grid-cols-1 gap-8
      sm:(grid-cols-2) lg:(grid-cols-3);

    > div {
      @apply row-auto;
    }
  }

  .usedby-brands {
    @apply max-w-screen-xl mx-auto mt-20;

    > div {
      @apply grid grid-cols-2 gap-8 md:grid-cols-6
        lg:grid-cols-5;
    }
  }
}

#section-wcu {
  // @alt-bg2();

  section {
    @apply max-w-prose;

    .heading {
      @apply text-2xl mb-1;

      span {
        @apply opacity-60 text-[90%] mr-1;
      }
    }
  }

  .sub-sects {
    @apply space-y-10 mt-8;
  }
}

#section-facts {
  @alt-bg2();

  @apply py-18 lg:(px-8);

  .text-cont {
    @apply md:(pr-1/20 pl-0);
  }

  .company-stats {
    @apply p-1 grid grid-cols-4 gap-4 max-w-444px mx-auto;
  }
}

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

/* ---------- FINAL ---------- */
.page-root {
  :deep(.pre-heading) {
    @apply text-xs tracking-0.5 m-1 mb--1 font-medium
      uppercase text-zinc-5 dark:text-#a4a4ac;
  }

  :deep(.heading) {
    @apply font-medium text-1.8rem/[1.2] md:(text-2.358rem/[1.2]);
  }
}
</style>
