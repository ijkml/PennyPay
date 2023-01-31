<script setup lang="ts">
defineProps({
  centered: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<template>
  <div role="separator" :class="[centered && 'centered']">
    <span class="one" />
    <span class="two" />
    <span class="three" />
    <span class="four" />
    <span class="five" />
  </div>
</template>

<style scoped lang="scss">
div {
  @apply my-1 w-max pointer-events-none;

  &.centered {
    @apply mx-auto;
  }
}

span {
  @apply inline-block h-1 bg-brand-pri/88
    rounded-full pointer-events-none;
}

.one {
  @apply w-1 mr-1;
}

.two {
  @apply w-3 mr-1;
}

.three {
  @apply w-40;
}

.four {
  @apply w-3 ml-1;
}

.five {
  @apply w-1 ml-1;
}
</style>
