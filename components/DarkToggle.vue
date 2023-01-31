<script setup lang="ts">
type AppColorScheme = 'dark' | 'light';

const icon = ref<0 | 1 | 2>(0);

const colorMode = useColorMode();

function renderIcon(theme: AppColorScheme) {
  icon.value = theme === 'light' ? 1 : 2;
}

function switchTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
}

onMounted(() => {
  renderIcon(colorMode.preference as AppColorScheme);
});

watch(colorMode, () => {
  renderIcon(colorMode.preference as AppColorScheme);
});

const preferredColor = usePreferredColorScheme();

watch(preferredColor, (pref) => {
  colorMode.preference = pref === 'light' ? 'light' : 'dark';
});
</script>

<template>
  <button
    title="Change theme"
    class="!outline-none"
    tabindex="0"
    @click="switchTheme"
  >
    <Transition name="fade" mode="out-in">
      <span v-if="icon === 1" class="i-carbon-sun" />
      <span v-else-if="icon === 2" class="i-carbon-moon" />
      <span v-else class="i-carbon-smoothing" />
    </Transition>
  </button>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  @apply w-9 h-9 inline-flex place-items-center rounded-md
    transition duration-300 bg-zinc-5 bg-op-0
      focus:outline-none text-current;

  > span {
    @apply block transition m-auto duration-350
      transform backface-hidden;
  }

  &:hover,
  &:focus-visible {
    @apply bg-op-25;

    span {
      @apply rotate--135;
    }
  }
}
</style>
