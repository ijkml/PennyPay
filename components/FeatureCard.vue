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
</script>

<template>
  <div class="feat-card">
    <div class="content">
      <h3 class="feat-head">{{ title }}</h3>
      <p>{{ text }}</p>
    </div>
    <div class="icon">
      <div>
        <VIcon size="36" :label="title" v-bind="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feat-card {
  --feat-card-border: rgba(15, 118, 110, 0.666);

  .dark & {
    --feat-card-border: rgba(19, 78, 74, 0.666);
    @apply bg-teal-900/10;
  }

  @apply px-8 pt-8 pb-14 grid gap-8 relative
    rounded-xl grid-cols-4 bg-brand-lit/30
      overflow-hidden transition;

  border: 1px solid var(--feat-card-border);
}

.icon {
  @apply h-32 w-32 -right-8 -bottom-8 justify-center
    items-center flex absolute text-teal-600
      light:(text-teal-700) pointer-events-none;

  div {
    @apply border rounded-full flex items-center
      justify-center z-1 w-24 h-24;

    border: 1px solid var(--feat-card-border);
  }
}

.content {
  @apply col-span-3;
}

.feat-head {
  @apply text-h5 font-medium mb-4 text-brand-pri
    dark:(text-brand-lit) tracking-wide
      transition-colors;
}
</style>
