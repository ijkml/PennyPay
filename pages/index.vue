<script setup lang="ts">
import HeroImage from '@img/Dash.webp?url';
import { features, sproof, stats } from '@data/homepage';
</script>

<template>
  <div>
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
              We think we know that it is better to exploit vertically. Without
              macro-vertical CAE, you will lack research and development.
            </p>

            <div class="screamer-cta">
              <VButton>Get Started</VButton>
            </div>

            <div class="screamer-sp">
              <p>Trusted by</p>
              <div>
                <div v-for="l in sproof" :key="l.name" class="logo-item">
                  <img
                    height="20px"
                    width="auto"
                    :src="`${l.logo}`"
                    :alt="l.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="img-col">
          <div>
            <img :src="HeroImage" alt="Picture showing dashboard" />
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-wwd"
      role="region"
      class="sect-wwd"
      aria-labelledby="heading-wwd"
    >
      <div class="max-screen-cont">
        <div class="img-cont">
          <img lazy src="@img/s-001.png" alt="" />
        </div>

        <div class="text-cont">
          <div>
            <div class="pre-heading">Easy to use</div>
            <h2 id="heading-wwd" class="heading">
              Access and manage funds seamlessly across any device
            </h2>
            <div class="text">
              <p>
                A company that can streamline elegantly will (at some undefined
                point of time in the future) be able to engineer virtually than
                to strategize macro-intuitively.
              </p>
            </div>
            <div class="actions">
              <VButton>Learn More</VButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-wcu"
      class="sect-wwd reversed"
      aria-labelledby="heading-wcu"
    >
      <div class="wrapper">
        <div class="img-cont">
          <img lazy src="@img/s-003.png" alt="" />
        </div>

        <div class="text-cont">
          <div>
            <div class="pre-heading">One of a kind</div>
            <h2 id="heading-wcu" class="heading">
              Built for endless uses,<br />
              across all platforms.
            </h2>

            <div class="sub-sects">
              <section aria-labelledby="heading-wcu-s1">
                <h3 id="heading-wwd-s1" class="heading">
                  <span>01.</span> Robust integrations
                </h3>
                <div class="text">
                  <p>
                    Quick: do you have a virally-distributed plan of action for
                    managing emerging partnerships? Without data hygiene
                    supervising, you will lack synergies.
                  </p>
                </div>
              </section>

              <section aria-labelledby="heading-wcu-s2">
                <h3 id="heading-wwd-s2" class="heading">
                  <span>02.</span> Unparalleled support
                </h3>
                <div class="text">
                  <p>
                    We understand that it is better to streamline
                    cyber-virtually. If you incentivize dynamically, you may
                    also mesh iteravely.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="section-wwd2"
      role="region"
      class="sect-wwd"
      aria-labelledby="heading-wwd2"
    >
      <div class="max-screen-cont">
        <div class="img-cont">
          <img lazy src="@img/s-002.png" alt="" />
        </div>

        <div class="text-cont">
          <div>
            <div class="pre-heading">Visualize, understand</div>
            <h2 id="heading-wwd2" class="heading">
              Income visualisation at your fingertips
            </h2>
            <div class="text">
              <p>
                Do you have a plan to become cross-media? We think we know that
                it is better to engineer virtually than to strategize
                macro-intuitively.
              </p>
            </div>
            <div class="actions">
              <VButton>Get Started</VButton>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            <!-- You earned it, getting paid should not be a hassle -->
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
#hero-sect {
  --hero-bg: url('@img/subtle-prism-1.svg');

  @apply flex flex-col justify-center items-center
    overflow-hidden lg:(bg-fixed);

  background: $blk var(--hero-bg) center / cover no-repeat;
  // #13331b,#0d2218,#045256
  margin-top: -$nav-height;

  > div {
    @apply lg:(flex) w-full z-0 py-9 mt-13;
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
    // background: url('@img/006.svg') center / cover no-repeat;

    > div {
      @apply w-full h-full flex flex-col justify-center py-8;
    }
  }
}

#screamer-h1 {
  font-size: clamp(2.1rem, calc(4vw + 1rem), 3rem);
  line-height: 1.2;

  @apply text-brand-lit font-bold;

  & + p {
    @apply my-5 px-1 text-lg sm:(px-0 text-xl)
    leading-normal text-zinc-200;
  }
}

.screamer-sp {
  @apply mt-10;

  p {
    @apply tracking-wide text-zinc-400;
  }

  > div {
    @apply m-0 mt-2 mr-auto flex justify-start
      py-1px items-center flex-wrap;
  }

  .logo-item {
    @apply m-3;

    img {
      @apply w-auto h-7 object-contain filter grayscale-100
        invert-88 transition duration-300;
    }
  }
}

.heading {
  @apply leading-tight font-medium mb-3
    text-h3 max-w-lg md:(text-h2 max-w-xl);
}

.pre-heading {
  @apply text-[0.83rem] tracking-[0.13em] m-1 mb-4 font-medium
    uppercase text-zinc-600 dark:text-zinc-400;
}

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
      @apply max-w-full object-contain mx-auto
        filter dark:(invert-99) transition;
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
    @apply py-4 px-14px sm:(px-8 py-13) text-brand-wht;
  }

  .header-cont {
    @apply text-center  max-w-lg md:(max-w-xl) mx-auto;

    p {
      @apply mt-5 text-lg;
    }
  }
}
</style>
