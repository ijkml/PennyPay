<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · PennyPay` : 'PennyPay';
  },
});

useServerSeoMeta({
  title: 'PennyPay',
  ogTitle: 'PennyPay · Accept payments globally with no structural lock-in',
  description: 'Accept payments globally with no structural lock-in.',
  ogDescription: 'Accept payments globally with no structural lock-in.',
  ogImage: 'https://pennypay.netlify.app/og.png',
  ogImageAlt: 'Screenshot of the PennyPay homepage',
  twitterCard: 'summary_large_image',
  twitterCreator: '@ijk_ml',
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>


<style lang="scss">
</style>
