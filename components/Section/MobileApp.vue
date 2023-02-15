<script setup lang="ts">
</script>

<template>
  <div class="app-section-root">
    <section class="app-section" role="region" aria-labelledby="heading_viz">
      <div class="text-cont">
        <div>
          <div class="pre-heading">Make Sense of Your Money</div>
          <h2 id="heading_viz" class="heading">
            Transform financial data into actionable&nbsp;insights
          </h2>
          <p>
            PennyPay transforms financial data into actionable insights via
            visually appealing graphs, charts, and dashboards. Quickly
            understand income, expenses, and profits to make informed decisions
            and reach financial goals with confidence.
          </p>
        </div>
      </div>

      <div class="img-cont">
        <img
          loading="lazy"
          decoding="async"
          width="700"
          height="700"
          src="@img/visualization.webp"
          alt="Different data visualization controls in PennyPay"
        />
      </div>
    </section>

    <section class="app-section" role="region" aria-labelledby="heading_app">
      <div class="img-cont">
        <img
          loading="lazy"
          decoding="async"
          width="700"
          height="700"
          src="@img/devices.webp"
          alt="Screenshots of the PennyPay mobile app in light and dark modes"
        />
      </div>

      <div class="text-cont">
        <div>
          <div class="pre-heading">Flexibility & Convenience</div>
          <h2 id="heading_app" class="heading">
            Access and manage funds seamlessly across any&nbsp;device
          </h2>
          <p>
            Take control of your finances anytime, anywhere with PennyPay. Our
            platform offers real-time access and an intuitive design, allowing
            you to effortlessly manage your funds and make informed financial
            decisions on the go.
          </p>
          <VButton to="/download">Download App</VButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.app-section-root {
  @apply py-5 bg-brand-lit dark:(bg-brand-blk);
}

.app-section {
  @apply items-center mx-auto px-4 py-8 grid transition-250
    gap-8 sm:(p-8 grid-cols-2) md:(gap-5%) max-w-screen-xl;
}

.text-cont {
  @apply py-1 flex sm:(py-2) md:(py-4);

  > div {
    @apply max-w-55ch space-y-4 lt-sm:mx-auto;
  }
}

p {
  @apply text-lg;
}

.img-cont {
  @apply flex;

  img {
    @apply aspect-1 object-contain w-full mx-auto max-h-100 md:(max-h-120);
  }
}
</style>
