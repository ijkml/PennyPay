<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
  icon: string;
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
      <div>
        <div class="icon" :class="[icon]" />
      </div>
    </div>
  </a>
</template>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes nudge {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(35deg);
  }
}

.feat-card {
  --main-color: hsla(176, 61%, 19%, 0.7);
  border: 1px solid var(--main-color);

  @apply rd-xl of-hidden transition-400 cursor-pointer
    flex flex-col justify-between bg-emerald-900/13;

  --alt-1: hsl(45, 100%, 25%);
  --alt-2: hsl(120, 100%, 25%);
  --alt-3: hsl(200, 100%, 25%);

  &:where(:hover, :focus-visible) {
    .icon {
      color: var(--main-color);
      animation: nudge 2s 200ms cubic-bezier(0.4, 0, 0.2, 1) 1;
    }

    .icon-wrapper > div::after {
      animation: spin 8s cubic-bezier(0.4, 0, 0.2, 1) alternate infinite;
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
  @apply text-1.25rem/[1.35] font-medium;
}

.content {
  @apply py-8 px-8 text-center space-y-4;

  @media (min-width: 500px) and (max-width: 639.99px) {
    @apply px-5;
  }
}

.icon-wrapper {
  @apply grid place-items-center transition-inherit;

  > div {
    @apply p-6 mb--4 mt--3 transition-inherit relative;

    &::after {
      @apply content-[''] w-full h-full absolute rd-100% inset-0;

      border: thin dashed var(--main-color);
    }
  }
}

.icon {
  @apply w-7 h-7 transition-inherit;
}
</style>
