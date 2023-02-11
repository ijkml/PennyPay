<script setup lang="ts">
</script>

<template>
  <section id="learn-more" role="region" aria-labelledby="heading_learn-more">
    <div>
      <div class="text-cont">
        <div class="pre-heading">Take Control</div>
        <h2 id="heading_learn-more" class="heading">
          Transactions built for your business, your&nbsp;way
        </h2>
        <p>
          With our solution, you have the freedom to manage transactions and
          payments without the restrictions of long-term contracts or
          complicated setup processes.
        </p>
        <p>
          Whether you're an established business or just starting out, our
          flexible platform lets you tailor the payment experience to your
          unique needs.
        </p>
      </div>
      <div class="img-cont">
        <img
          src="@img/user-1.webp"
          alt="Happy PennyPay customer"
          width="500"
          height="750"
          loading="lazy"
          decoding="async"
        />
        <img
          src="@img/user-2.webp"
          alt="Happy PennyPay customer"
          width="500"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#learn-more {
  @apply bg-brand-lit dark:(bg-brand-blk);

  > div {
    @apply grid grid-cols-1 gap-8 items-center px-4 py-16
      text-center mx-auto max-w-screen-xl sm:(px-8)
        lg:(grid-cols-2 gap-16 text-left);
  }
}

.text-cont {
  @apply space-y-4 text-lg max-w-55ch mx-auto;
}

.img-cont {
  @apply grid grid-cols-2 gap-4 mt-8 max-w-60ch mx-auto;

  > img {
    @apply w-full rounded-xl object-contain;

    &:last-of-type {
      @apply mt-4 lg:mt-10;
    }
  }
}
</style>
