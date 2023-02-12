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
    <div class="icon-wrapper">
      <!-- <VIcon size="32" :label="title" v-bind="icon" /> -->
      <div>
        <div class="i-carbon-home icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feat-card {
  --feat-card-border: rgba(15, 118, 110, 0.666);

  @apply transition-250 bg-brand-lit/25
    rd-xl backdrop-blur-1 of-hidden relative;

  border: 1px solid var(--feat-card-border);

  .dark & {
    --feat-card-border: rgba(19, 78, 74, 0.666);

    @apply bg-emerald-900/10;
  }

  &:hover {
    .icon {
      @apply text-pink;
    }
  }

  &::before {
    @apply absolute content-[''] bottom-0 left-0 w-full bg-sky;
  }
}

h3 {
  @apply text-h5 font-medium;
}

.content {
  @apply p-8 text-center space-y-4;
}

.icon-wrapper {
  @apply grid place-items-center;

  > div {
    border: thin dashed var(--feat-card-border);

    @apply p-6 mb--5 mt--3 rounded-full;
  }
}

.icon {
  @apply w-9 h-9 transition-250;
}
</style>
