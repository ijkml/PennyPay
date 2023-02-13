<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
  icon: {
    vbox: string;
    icon: string;
  };
}>();

const { icon, text, title } = toRefs(props);

const url = slugify(title.value);
</script>

<template>
  <a class="feat-card" :href="`/features/${url}`" @click.prevent>
    <div class="content">
      <h3 class="feat-head">{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
    <div class="icon-wrapper">
      <!-- <VIcon size="32" :label="title" v-bind="icon" /> -->
      <div>
        <div class="icon" :class="[icon]" />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
@use 'sass:color';

.feat-card {
  --main-color: hsla(175, 77%, 26%, 0.7);
  border: 1px solid var(--main-color);

  @apply rd-xl of-hidden transition-400 cursor-pointer
    flex flex-col justify-between bg-brand-lit/25;

  .dark & {
    --main-color: hsla(176, 61%, 19%, 0.7);

    @apply bg-emerald-900/10;
  }

  --alt-1: hsl(45, 100%, 25%);
  --alt-2: hsl(120, 100%, 25%);
  --alt-3: hsl(200, 100%, 25%);

  &:hover {
    .icon {
      color: var(--main-color);
    }

    &:nth-of-type(odd) {
      --main-color: var(--alt-1);
    }
    &:nth-of-type(even) {
      --main-color: var(--alt-2);
    }
    &:first-of-type,
    &:last-of-type {
      --main-color: var(--alt-3);
    }
  }
}

h3 {
  @apply text-h5/[1.35] font-medium;
}

.content {
  @apply py-8 px-8 text-center space-y-4;
}

.icon-wrapper {
  @apply grid place-items-center transition-inherit;

  > div {
    border: thin dashed var(--main-color);
    // color: var(--main-color);

    @apply p-6 mb--4 mt--3 rd-100% of-hidden transition-inherit;
  }
}

.icon {
  @apply w-7 h-7 transition-inherit;
}
</style>
