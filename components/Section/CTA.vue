<script setup lang="ts">
</script>

<template>
  <section id="get-started" role="region" aria-labelledby="heading_get-started">
    <div class="cta-wrapper dark">
      <div class="cta-container">
        <div class="pre-heading">Let's get started</div>
        <h2 id="heading_get-started" class="heading">
          Create an account, start accepting secure&nbsp;payments
        </h2>
        <div class="actions">
          <VButton to="/">Create an Account</VButton>
          <NuxtLink class="cta-2nd" to="/">Pricing Options</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#get-started {
  @apply sm:(px-4 py-16) md:(px-8 py-20);
}

.cta-wrapper {
  background: url('@img/bg-spot.svg') center / cover no-repeat;

  @apply py-16 px-4 space-y-4 max-w-60rem mx-auto
    sm:(rounded-3xl) md:(px-16 rounded-2.5rem);
}

.cta-container {
  @apply max-w-55ch mx-auto text-center grid;
}

.heading {
  @apply font-semibold my-4;
}

.actions {
  @apply mt-3 inline-grid mx-auto gap-4;
}

.cta-2nd {
  @apply underline underline-(offset-16 transparent dashed)
    outline-none op-55 transition-all-250 text-emerald-1/90;

  &:where(:hover, :focus-visible) {
    @apply op-100 underline-(offset-8 zinc-5/45);
  }
}
</style>
