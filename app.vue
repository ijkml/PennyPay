<script setup lang="ts">
useHead({
  titleTemplate:(titleChunk) => {
    return titleChunk ? `${titleChunk} · PennyPay` : 'PennyPay';
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>


<style lang="scss">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
