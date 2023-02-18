<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    title: string;
    text: string;
    img: string;
  }>(),
  {
    img: '',
    name: '',
    text: '',
    title: '',
  }
);

const { img: image, name, text, title } = toRefs(props);
</script>

<template>
  <div class="slider-container">
    <figure class="text-container">
      <blockquote class="quote-body" v-text="text" />

      <figcaption class="quote-footer">
        <div class="qf-avatar">
          <img
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            width="50"
            height="50"
            :src="`/images/avatars/${image}`"
            :alt="name"
          />
        </div>

        <div>
          <div class="qf-name" v-text="name" />
          <div v-text="title" />
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped lang="scss">
.slider-container {
  @apply grid max-w-sm of-hidden rd-4 transition-250
    mx-auto shadow-md bg-lime-1/45 ring-(1 lime-3/20)
      dark:(bg-green-8/8 ring-lime-3/10) select-none
        backdrop-blur-1;
}

img {
  @apply pointer-events-none select-none rd-inherit
    object-(cover center) w-full h-full absolute inset-0;
}

.text-container {
  @apply px-4 py-6 max-w-50ch text-center mx-auto;
}

.quote-body {
  @apply sm:(text-1.06rem/1.65rem);
}

.qf-name {
  @apply font-medium text-base sm:text-lg
    dark:(text-brand-sec) text-brand-pri;
}

@media (max-width: 359.99px) {
  .quote-footer {
    @apply text-center;
  }

  .qf-avatar {
    @apply hidden;
  }
}

@media (min-width: 360px) {
  .text-container {
    @apply px-6;
  }

  .qf-avatar {
    @apply block;
  }
}

.quote-footer {
  @apply mt-5 gap-4 p-1 inline-flex text-(left sm)
    items-start text-zinc-6 dark:(text-zinc-4);
}

.qf-avatar {
  @apply relative rd-lg w-11 h-11 aspect-1 sm:(h-13 w-13 rd-xl);
}
</style>
